import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  loadRecipe,
  removeRecipe,
} from '../redux/recipe';
import {
  isMatch,
  isNotEmpty,
} from '../utils/utils';
import {
  Button,
} from '../layouts/Recipe';
import RecipeTitle from '../components/RecipeTitle';
import RecipeBasicInfo from '../components/RecipeBasicInfo';
import RecipeDescription from '../components/RecipeDescription';
import IngredientList from '../components/IngredientList';

const RecipeContainer = ({ recipeId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadRecipe(recipeId));
  }, []);

  const { user, recipe } = useSelector((state) => ({
    user: state.user,
    recipe: state.recipe,
  }));

  const {
    userId,
    title,
    category,
    product,
    ingredients,
    description,
  } = recipe;

  const onRemove = async () => {
    const ensure = window.confirm('레시피를 삭제하시겠습니까?');
    if (ensure) {
      await dispatch(removeRecipe());
      history.push('/');
    }
  };

  return (
    <article>
      <RecipeTitle title={title} />
      <RecipeBasicInfo
        title={title}
        category={category}
        product={product}
      />

      <IngredientList
        ingredients={ingredients}
      />

      <RecipeDescription
        description={description}
      />

      {
        isNotEmpty(userId) && isMatch(userId)(user.userId) && (
          <section>
            <Link to={`/recipewrite/${recipe.id}`}>
              <Button type="button">수정하기</Button>
            </Link>
            <Button
              type="button"
              onClick={onRemove}
            >
              삭제하기
            </Button>
          </section>
        )
      }
    </article>
  );
};

export default RecipeContainer;
