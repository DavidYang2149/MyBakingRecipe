import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  setNewIngredient,
  changeNewIngredient,
  changeRecipe,
  changeIngredient,
  loadRecipe,
  writeRecipe,
  removeRecipe,
} from '../redux/recipe';
import {
  isEmpty,
  isMatch,
  isNotEmpty,
} from '../utils/utils';
import {
  Input,
  Label,
  Span,
  Button,
} from '../layouts/Recipe';
import RecipeTitle from '../components/RecipeTitle';
import RecipeBasicInfo from '../components/RecipeBasicInfo';
import RecipeDescription from '../components/RecipeDescription';
import IngredientList from '../components/IngredientList';

const RecipeWriteContainer = ({ recipeId }) => {
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
    newIngredient,
    description,
  } = recipe;

  const newId = ingredients.length + 1;

  const onChangeRecipe = (event) => {
    const { name, value } = event.target;
    dispatch(changeRecipe({ name, value }));
  };

  const onChangeIngredient = (event) => {
    const { name, value } = event.target;
    dispatch(changeIngredient({ name, value }));
  };

  const onChangeNewIngredient = (event) => {
    const { name, value } = event.target;
    dispatch(changeNewIngredient({ name, value }));
  };

  const onKeyUpSetNewIngredient = (event) => {
    if (isMatch(event.key)('Enter')) {
      dispatch(setNewIngredient({ fields: newIngredient }));
    }
  };

  const onClickSetNewIngredient = () => {
    dispatch(setNewIngredient({ fields: newIngredient }));
  };

  const onSubmit = async () => {
    await dispatch(writeRecipe());

    if (isEmpty(recipe.id)) {
      return history.push('/');
    }
    return history.push(`/recipe/${recipe.id}`);
  };

  const onRemove = async () => {
    const ensure = window.confirm('레시피를 삭제하시겠습니까?');
    if (ensure) {
      await dispatch(removeRecipe());
      history.push('/');
    }
  };

  const isNotWriteAdd = (userUserId) => (id) => (recipeUserId) => {
    if (isNotEmpty(userUserId) && isEmpty(id) && isEmpty(recipeUserId)) {
      return false;
    }
    return true;
  };

  const isNotWriteUpdate = (userUserId) => (id) => (recipeUserId) => {
    if (isNotEmpty(userUserId) && isNotEmpty(id) && isMatch(userUserId)(recipeUserId)) {
      return false;
    }
    return true;
  };

  if (isNotWriteAdd(user.userId)(recipe.id)(userId)
    && isNotWriteUpdate(user.userId)(recipe.id)(userId)) {
    return (
      <div>없음</div>
    );
  }

  return (
    <article>
      <RecipeTitle title={isEmpty(userId) ? '레시피 제작' : `${title} 편집`} />
      <RecipeBasicInfo
        title={title}
        category={category}
        product={product}
        onChangeRecipe={onChangeRecipe}
      />

      <section>
        <ul>
          <li>
            <Label
              width="32%"
              display="inline-block"
              htmlFor={`ingredient-${newId}`}
            >
              원재료
            </Label>
            <Label
              width="20%"
              display="inline-block"
              htmlFor={`weight-${newId}`}
            >
              용량
            </Label>
          </li>
          <li>
            <Input
              type="text"
              id={`ingredient-${newId}`}
              name={`ingredient-${newId}`}
              value={newIngredient.ingredient}
              onChange={onChangeNewIngredient}
              onKeyUp={onKeyUpSetNewIngredient}
              width="30%"
            />
            <Input
              type="number"
              id={`weight-${newId}`}
              name={`weight-${newId}`}
              value={newIngredient.weight}
              onChange={onChangeNewIngredient}
              onKeyUp={onKeyUpSetNewIngredient}
              width="20%"
            />
            <Span>g</Span>
            <Button
              type="button"
              onClick={onClickSetNewIngredient}
            >
              추가하기
            </Button>
          </li>
        </ul>
      </section>

      <IngredientList
        ingredients={ingredients}
        onChangeIngredient={onChangeIngredient}
      />

      <RecipeDescription
        description={description}
        onChangeRecipe={onChangeRecipe}
      />

      <section>
        <Button
          type="button"
          onClick={onSubmit}
        >
          {isEmpty(userId) ? '저장하기' : '수정완료'}
        </Button>
        {
          isNotEmpty(userId) && (
            <Button
              type="button"
              onClick={onRemove}
            >
              삭제하기
            </Button>
          )
        }
      </section>
    </article>
  );
};

export default RecipeWriteContainer;
