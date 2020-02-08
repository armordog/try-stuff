import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import { StepProvider } from './step-context';

function StepperContext({ children, containerRef }) {
  const [steps, setSteps] = useState([]);
  const [active, setActive] = useState(0);

  const scrollHandler = useCallback(event => {
    let topIndex = 0;
    let highest = Infinity;
    steps
      /* This seems weird but when a step is removed the scrollHandler can still
       * run once before `steps` is updated and the removed ref's current will
       * be null.
       */
      .filter(step => step.ref.current)
      .map(step => step.ref.current.offsetTop - containerRef.current.scrollTop)
      .forEach((top, index) => {
        if(top > 0 && top < highest) {
          topIndex = index;
          highest = top;
        }
      });

    if(topIndex !== active) setActive(topIndex);
  }, [active, setActive, containerRef, steps]);

  useEffect(
    () => {
      const element = containerRef.current;
      element.addEventListener('scroll', scrollHandler);
      return () => {
        element.removeEventListener('scroll', scrollHandler);
      }
    },
    [scrollHandler]
  );

  const register = useCallback(step => {
    const id = steps.length;
    setSteps(prevSteps => prevSteps.concat({ ...step, id }));
    return id;
  }, [steps, setSteps]);

  const unregister = useCallback(id => {
    setSteps(prevSteps => prevSteps.filter(step => step.id !== id));
  }, [steps, setSteps]);

  return (
    <StepProvider value={{ steps, active, setActive, register, unregister }}>
      {children}
    </StepProvider>
  );
}

export default StepperContext;
