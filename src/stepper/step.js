import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import StepContext from './step-context';

function Step({ children, label }) {
  const { register, unregister } = useContext(StepContext);
  const [id, setId] = useState(-1);

  const ref = useRef();

  const safeUnregister = useCallback(unregister, []);

  useEffect(() => {
    if(id === -1) setId(register({ label, ref }));
  }, [id, label]);

  useEffect(() => {
    return () => {
      if(id !== -1) safeUnregister(id);
    };
  }, [id, safeUnregister]);

  return (
    <div ref={ref}>{children}</div>
  );
}

export default Step;
