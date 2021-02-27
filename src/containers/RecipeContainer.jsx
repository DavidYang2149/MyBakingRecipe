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
      <div>
        레시피 뷰 페이지
      </div>

      <section>
        <label htmlFor="title">레시피명</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          disabled
        />
        <label htmlFor="category">카테고리</label>
        <select
          id="category"
          name="category"
          value={category}
          disabled
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
          disabled
        />
        <span>개</span>
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
                    disabled
                  />
                  <label htmlFor={`weight-${id}`}>용량</label>
                  <input
                    type="number"
                    id={`weight-${id}`}
                    name={`weight-${id}`}
                    value={weight}
                    disabled
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
          disabled
        />
      </section>

      <div>
        {
          isNotEmpty(userId) && isMatch(userId)(user.userId) && (
            <>
              <Link to={`/recipewrite/${recipe.id}`}><button type="button">수정하기</button></Link>
              <button
                type="button"
                onClick={onRemove}
              >
                삭제하기
              </button>
            </>
          )
        }
      </div>
    </article>
  );
};

export default RecipeContainer;
