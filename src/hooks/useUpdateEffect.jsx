import { useEffect, useRef } from 'react';

const useUpdateEffect = (effect, deps) => {
  const isFirstFinished = useRef(false);

  useEffect(() => {
    if (isFirstFinished.current) {
      return effect();
    }
    isFirstFinished.current = true;
  }, deps);
};

export default useUpdateEffect;
