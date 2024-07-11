import { useCallback } from 'react';
import { ImagePath } from '../constants/image-path';

const useDom = () => {
  const errorLoading = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const PLACEHOLDER_IMG = `${import.meta.env.VITE_DEPLOY_URL}/${ImagePath.NOIMAGEFOUND}`;
    if (event.target instanceof HTMLImageElement) {
      event.target.src = PLACEHOLDER_IMG;
    }
  }, []);


  return {
    errorLoading,
  };
};

export default useDom;
