import './SectionEntropyCup.css';
import { useEffect, useRef, useState } from 'react'; //https://www.reddit.com/r/reactjs/comments/iltrvn/what_is_useref_for_when_should_i_use_it/ 
import Matter from 'matter-js';

//note to self: https://react.dev/reference/react/useRef 

export default function SectionEntropyCup() {
  const sceneRef = useRef<HTMLDivElement>(null); //ref to where canvas is
  const engineRef = useRef<Matter.Engine | null>(null); // store physics engine
  const renderRef = useRef<Matter.Render | null>(null); // store rendering tool 
  const [entropy, setEntropy] = useState('0.00'); 

  const leftWallRef = useRef<Matter.Body | null>(null); //left side cup
  const rightWallRef = useRef<Matter.Body | null>(null); //right side cup
  const baseRef = useRef<Matter.Body | null>(null); //base cup


  useEffect(() => { //runs once
    const { Engine, Render, Runner, Bodies, Composite, Body } = Matter;
    const engine = Engine.create();
    engine.gravity.y = 0.9;
    engineRef.current = engine;

    const render = Render.create({
      element: sceneRef.current!, //cannot be null, sceneRef use the <div> and pass it to element, inserting a canvas there
      engine,
      options: {
        width: 600,
        height: 400,
        background: 'transparent',
        wireframes: false,
      },
    });

    renderRef.current = render;

    const wallOptions = {
      isStatic: true,
      render: { fillStyle: '#111', strokeStyle: 'transparent', lineWidth: 4 },
    };

    const base = Bodies.rectangle(300, 388, 124, 4, wallOptions);
    const leftWall = Bodies.rectangle(213, 266, 4, 250, { ...wallOptions, angle: -0.21 });
    const rightWall = Bodies.rectangle(387, 266, 4, 250, { ...wallOptions, angle: 0.21 });

    baseRef.current = base;
    leftWallRef.current = leftWall;
    rightWallRef.current = rightWall;
    Composite.add(engine.world, [base, leftWall, rightWall]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = render.canvas.getBoundingClientRect();
      const mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      Composite.allBodies(engine.world).forEach((body) => {
        if (body.isStatic) return; //ignore static bodies
        const dx = body.position.x - mouse.x;
        const dy = body.position.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 6400) {
          const forceMagnitude = 0.0003 * body.mass;
          Body.applyForce(body, body.position, {
            x: dx * forceMagnitude,
            y: dy * forceMagnitude,
          });
        }
      });
    };

    render.canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      render.canvas.removeEventListener('mousemove', handleMouseMove);
      Render.stop(render);
      Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  function addShape(type: 'square' | 'triangle') {
    const Body = Matter.Bodies;
    const World = Matter.World;
    const x = 240 + Math.random() * 120; //random dropping position
    const color = type === 'square' ? '#f76e79ff' : '#94e9caff';

    const shape =
      type === 'square'
        ? Body.rectangle(x, 0, 60, 60, { render: { fillStyle: color }, label: 'Rectangle', restitution: 0.1, friction: 0.4 })
        : Body.polygon(x, 0, 3, 45, { render: { fillStyle: color }, label: 'Polygon', restitution: 0.1, friction: 0.4 });

    World.add(engineRef.current!.world, shape);
  }

  function resetScene() {
    const engine = engineRef.current;
    if (!engine) return;
    const toRemove = Matter.Composite.allBodies(engine.world).filter((b) => !b.isStatic); //Get all bodies in the world, filter only dynamic shape
    toRemove.forEach((b) => Matter.Composite.remove(engine.world, b)); //remove non-static bodies
  }

  function calculateEntropy() {
    const engine = engineRef.current;
    if (!engine) return '0.00'; //if engine not ready then just 0.
    const shapes = Matter.Composite.allBodies(engine.world); //get all bodies
    if (!leftWallRef.current || !rightWallRef.current || !baseRef.current) return; //check if cup exists (fail safe)

    //identify boundary
    const xMin = leftWallRef.current.position.x - 40; 
    const xMax = rightWallRef.current.position.x + 40;
    const yMax = baseRef.current.position.y;
    const yMin = yMax - leftWallRef.current.bounds.max.y + leftWallRef.current.bounds.min.y; //ymax - height of cup

    const inCup = (x: number, y: number) => x >= xMin && x <= xMax && y >= yMin && y <= yMax; //arrow function to return true if (x,y) in the cup

    let squareCount = 0;
    let triangleCount = 0;

    shapes.forEach((body) => {
      const { x, y } = body.position; //destructure body for position x,y
      if (inCup(x, y)) {
        if (body.label === 'Rectangle') squareCount++;
        if (body.label === 'Polygon') triangleCount++;
      }
    });

    const total = squareCount + triangleCount;
    const p1 = squareCount / total || 0; //fail safe for 0 div
    const p2 = triangleCount / total || 0; //fail safe for 0 div
    const entropy = (p: number) => (p === 0 ? 0 : -p * Math.log2(p)); //if 0 then entropy = 0, else formula
    return (entropy(p1) + entropy(p2)).toFixed(2); //round to 2 decimal places
  }

  //recalculate entropy every animation frame
  useEffect(() => {
    let animationFrame: number; //for storing AnimationFrame id
    const loop = () => {
      const value = calculateEntropy(); 
      if (value !== undefined) setEntropy(value);
      animationFrame = requestAnimationFrame(loop); //run the loop function again on next animation frame (60Hz)
    };
    loop();
    return () => cancelAnimationFrame(animationFrame); //cleanup when component removed
  }, []);

  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>Interactive Demo: What Is Entropy?</h2>
        <p>
          In this simulation, entropy measures how mixed the shapes are inside the cup.
          The more uniform they are, the lower the entropy. A 50/50 mix means high uncertainty and high entropy.
        </p>
        <p>
          Try adding squares and triangles into the cup below. As the mixture changes, the entropy value updates in real time.
        </p>
      </div>

      <div className="section-block">
        <div className="button-row">
          <button onClick={() => addShape('square')}>Add Square</button>
          <button onClick={() => addShape('triangle')}>Add Triangle</button>
          <button onClick={resetScene}>Reset</button>
        </div>

        <div className="entropy-readout">Current Entropy: {entropy}</div>
        <div ref={sceneRef} className="matter-scene" />
      </div>
      <div className="section-note">
          We want the entropy to be as low as possible: that means the group is more pure and easier to predict!

      </div>
    </div>
  );
}
