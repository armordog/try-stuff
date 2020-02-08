import { createContext } from 'react';

const StepContext = createContext({
  steps: [],
  active: 0,
  register: () => {},
  unregister: ()=> {}
});

export const StepProvider = StepContext.Provider;
export const StepConsumer = StepContext.Consumer;
export default StepContext;
