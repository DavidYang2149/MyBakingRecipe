import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderContainer from './containers/common/HeaderContainer';
import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';
import RecipeWritePage from './pages/RecipeWritePage';
import Recipe404Page from './pages/Recipe404Page';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={RecipesPage} />
        <Route path="/recipe/:id" component={RecipePage} />
        <Route path="/recipewrite/:id" component={RecipeWritePage} />
        <Route component={Recipe404Page} />
      </Switch>
    </>
  );
};

export default App;
