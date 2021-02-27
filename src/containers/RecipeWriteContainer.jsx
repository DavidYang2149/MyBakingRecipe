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
      <div>
        레시피 작성 페이지
      </div>

      <section>
        <label htmlFor="title">레시피명</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChangeRecipe}
        />
        <label htmlFor="category">카테고리</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={onChangeRecipe}
        >
          <option value="0">선택</option>
          <option value="1">쿠키</option>
          <option value="2">구움과자</option>
          <option value="3">케이크</option>
          <option value="4">빵</option>
          <option value="5">마카롱</option>
          <option value="6">기타</option>
        </select>
        <label htmlFor="product">생산량</label>
        <input
          type="number"
          id="product"
          name="product"
          value={product}
          onChange={onChangeRecipe}
        />
        <span>개</span>
      </section>

      <section>
        <ul>
          <li>
            <label htmlFor={`ingredient-${newId}`}>원재료</label>
            <input
              type="text"
              id={`ingredient-${newId}`}
              name={`ingredient-${newId}`}
              value={newIngredient.ingredient}
              onChange={onChangeNewIngredient}
              onKeyUp={onKeyUpSetNewIngredient}
            />
            <label htmlFor={`weight-${newId}`}>용량</label>
            <input
              type="number"
              id={`weight-${newId}`}
              name={`weight-${newId}`}
              value={newIngredient.weight}
              onChange={onChangeNewIngredient}
              onKeyUp={onKeyUpSetNewIngredient}
            />
            <span>g</span>
            <button
              type="button"
              onClick={onClickSetNewIngredient}
            >
              추가하기
            </button>
          </li>
        </ul>
      </section>

      <section>
        <ul>
          {
            ingredients.map(({ id, ingredient, weight }) => {
              return (
                <li key={id}>
                  <label htmlFor={`ingredient-${id}`}>원재료</label>
                  <input
                    type="text"
                    id={`ingredient-${id}`}
                    name={`ingredient-${id}`}
                    value={ingredient}
                    onChange={onChangeIngredient}
                  />
                  <label htmlFor={`weight-${id}`}>용량</label>
                  <input
                    type="number"
                    id={`weight-${id}`}
                    name={`weight-${id}`}
                    value={weight}
                    onChange={onChangeIngredient}
                  />
                  <span>g</span>
                </li>
              );
            })
          }
        </ul>
      </section>

      <section>
        <label htmlFor="description">만드는 방법</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={onChangeRecipe}
        />
      </section>

      <div>
        <button
          type="button"
          onClick={onSubmit}
        >
          {isEmpty(userId) ? '저장하기' : '수정하기'}
        </button>
        {
          isNotEmpty(userId) && (
            <button
              type="button"
              onClick={onRemove}
            >
              삭제하기
            </button>
          )
        }
      </div>
    </article>
  );
};

export default RecipeWriteContainer;
