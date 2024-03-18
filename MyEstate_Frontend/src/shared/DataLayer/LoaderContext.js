import { createContext } from 'react';

const LoaderContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export default LoaderContext;
