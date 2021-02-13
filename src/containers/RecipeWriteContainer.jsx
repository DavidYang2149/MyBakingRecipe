import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setNewIngredient,
  changeNewIngredient,
  changeRecipe,
  changeIngredient,
} from '../redux/recipe';

const RecipeWriteContainer = () => {
  const dispatch = useDispatch();

  const { recipe } = useSelector((state) => ({
    recipe: state.recipe,
  }));

  const {
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
    if (event.key === 'Enter') {
      dispatch(setNewIngredient({ fields: newIngredient }));
    }
  };

  const onClickSetNewIngredient = () => {
    dispatch(setNewIngredient({ fields: newIngredient }));
  };

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
        <button type="button">저장하기</button>
      </div>
    </article>
  );
};

export default RecipeWriteContainer;
