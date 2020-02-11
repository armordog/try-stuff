import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { StepProvider } from './step-context';

const findScrollParent = (el) => {
  if(!el) return null;
  const style = window.getComputedStyle(el);
  if(style.overflow !== "hidden" && style.overflow !== "visible") return el;
  return findScrollParent(el.parentElement);
};

function StepperContext({ children }) {
  const [steps, setSteps] = useState([]);
  const [active, setActive] = useState(0);
  const containerRef = useRef();

  const scrollHandler = useCallback(event => {
    let topIndex = 0;
    let distance = Infinity;
    steps
      /* This seems weird but when a step is removed the scrollHandler can still
       * run once before `steps` is updated and the removed ref's current will
       * be null.
       */
      .filter(step => step.ref.current)
      .map(step => step.ref.current.offsetTop - containerRef.current.scrollTop)
      .forEach((top, index) => {
        const currentDistance = Math.abs(top);
        if(currentDistance < distance) {
          topIndex = index;
          distance = currentDistance;
        }
      });

    if(topIndex !== active) setActive(topIndex);
  }, [active, setActive, containerRef, steps]);

  useEffect(
    () => {
      if(!steps.length) return;

      containerRef.current = findScrollParent(steps[0].ref.current);
      // const element = containerRef.current;
      containerRef.current.addEventListener('scroll', scrollHandler);
      return () => {
        containerRef.current.removeEventListener('scroll', scrollHandler);
      }
    },
    [scrollHandler, steps]
  );

  const register = useCallback(step => {
    const id = steps.length;
    setSteps(prevSteps => prevSteps.concat({ ...step, id }));
    return id;
  }, [steps, setSteps]);

  const unregister = useCallback(id => {
    setSteps(prevSteps => prevSteps.filter(step => step.id !== id));
  }, [steps, setSteps]);

  const scrollTo = useCallback(index => {
    steps[index].ref.current.scrollIntoView()
  }, [steps]);

  return (
    <StepProvider value={{ steps, active, setActive, scrollTo, register, unregister }}>
      {children}
    </StepProvider>
  );
}

export default StepperContext;
