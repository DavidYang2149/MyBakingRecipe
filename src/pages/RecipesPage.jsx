import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadRecipes } from '../redux/recipes';
import RecipesContainer from '../containers/RecipesContainer';
import useInfiniteScroll from '../components/useInfiniteScroll';

const RecipesPage = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);

  useInfiniteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        dispatch(loadRecipes());
      }
    },
  });

  return (
    <>
      <RecipesContainer />
      <div ref={setTarget} />
    </>
  );
};

export default RecipesPage;
