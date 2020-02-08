import React, { useContext } from 'react';
import './stepper.css';
import StepContext from './step-context';

function Stepper({clickToJump}) {
  const {steps, active, setActive}  = useContext(StepContext);
  return (
    <ul className={'c-stepper'}>
      {
        steps.map((step, index) => (
          <li
            key={index}
            className={`c-stepper_step ${index === active ? 'c-stepper_step--active' : ''}`}
            onClick={clickToJump ? () => setActive(index) : null}
          >
            <div className={'c-step_main'}>
              <div className={'c-step_icon'}>
                {index + 1}
              </div>
            </div>
            <label className={'c-step_label'}>
              {step.label}
            </label>
          </li>
        ))
      }
    </ul>
  );
}

export default Stepper;
