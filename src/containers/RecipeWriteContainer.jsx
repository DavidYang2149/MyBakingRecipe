import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
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
    description,
  } = recipe;

  const onChangeRecipe = (event) => {
    const { name, value } = event.target;
    dispatch(changeRecipe({ name, value }));
  };

  const onChangeIngredientInput = (event) => {
    const { name, value } = event.target;
    // console.log(event, event.target, name, value);
    dispatch(changeIngredient({ name, value }));
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
                    onChange={onChangeIngredientInput}
                  />
                  <label htmlFor={`weight-${id}`}>용량</label>
                  <input
                    type="number"
                    id={`weight-${id}`}
                    name={`weight-${id}`}
                    value={weight}
                    onChange={onChangeIngredientInput}
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
