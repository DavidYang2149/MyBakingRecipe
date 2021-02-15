import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';
import Recipe404Page from './pages/Recipe404Page';

const App = () => {
  return (
    <>
      <div>Hello World</div>
      <Switch>
        <Route exact path="/" component={RecipesPage} />
        <Route path="/recipe/:id" component={RecipePage} />
        <Route component={Recipe404Page} />
      </Switch>
    </>
  );
};

export default App;
