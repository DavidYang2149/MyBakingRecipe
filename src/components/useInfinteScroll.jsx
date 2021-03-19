/* eslint-disable consistent-return */
import { useEffect } from 'react';

import { isEmpty } from '../utils/utils';

export default ({
  root = null, target, onIntersect, threshold = 1.0, rootMargin = '50px',
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    if (isEmpty(target)) {
      return;
    }

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [target, root, rootMargin, onIntersect, threshold]);
};