import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadRecipes } from '../redux/recipes';
import RecipesContainer from '../containers/RecipesContainer';
import useInfinteScroll from '../components/useInfinteScroll';

const RecipesPage = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);

  useInfinteScroll({
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
