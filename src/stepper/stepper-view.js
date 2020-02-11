import React, { useState } from 'react';
import Step from './step';
import Stepper from './stepper';
import StepperContext from './stepper-context';

const stepStyle = {
  minHeight: '200px'
};


function StepperView() {
  const [steps, setSteps] = useState(0);

  return (
    <StepperContext>
      <h1>
        <span onClick={() => setSteps(prevSteps => prevSteps - 1)}>-</span>
        Stepper
        <span onClick={() => setSteps(prevSteps => prevSteps + 1)}>+</span>
      </h1>

      <Stepper clickToJump/>

      <div style={{ height: '300px' }}>
        <div style={{ height: '100%', overflow: 'scroll', position: 'relative' }}>
          <div style={{ height: '99%' }}>
            <div style={{ position: 'relative' }}>
              <Step label={'Step A'}>
                <div style={stepStyle}><h1>Step A</h1></div>
              </Step>
              <Step label={'Step B'}>
                <div style={stepStyle}><h1>Step B</h1></div>
              </Step>
              <Step label={'Step C'}>
                <div style={stepStyle}><h1>Step C</h1></div>
              </Step>
              {Array(steps).fill(undefined).map((_, index) => {
                return <Step key={index} label={`Auto-Step ${index}`}>
                  <div style={stepStyle}><h1>Step {index}</h1></div>
                </Step>;
              })}
            </div>
          </div>
        </div>
      </div>

    </StepperContext>
  );
}

export default StepperView;
