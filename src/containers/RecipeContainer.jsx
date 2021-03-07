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
  Label,
  Input,
  Select,
  Span,
  Textarea,
  Button,
  Paragraph,
} from '../layouts/Recipe';

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
      <Paragraph>
        {title}
      </Paragraph>
      <section>
        <Label
          htmlFor="title"
          display="block"
        >
          레시피명
        </Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={title}
          width="60%"
          display="block"
          disabled
        />
        <Label
          htmlFor="category"
          width="30%"
          display="inline-block"
        >
          카테고리
        </Label>
        <Label
          htmlFor="product"
          width="20%"
          display="inline-block"
        >
          생산량
        </Label>
        <div>
          <Select
            id="category"
            name="category"
            value={category}
            width="30%"
            disabled
          >
            <option value="0">선택</option>
            <option value="1">쿠키</option>
            <option value="2">구움과자</option>
            <option value="3">케이크</option>
            <option value="4">빵</option>
            <option value="5">마카롱</option>
            <option value="6">기타</option>
          </Select>
          <Input
            type="number"
            id="product"
            name="product"
            value={product}
            width="20%"
            disabled
          />
          <Span>개</Span>
        </div>
      </section>

      <section>
        <ul>
          <li>
            <Label>원재료</Label>
            <Label>용량</Label>
          </li>
          {
            ingredients.map(({ id, ingredient, weight }) => {
              return (
                <li key={id}>
                  <Input
                    type="text"
                    id={`ingredient-${id}`}
                    name={`ingredient-${id}`}
                    value={ingredient}
                    disabled
                  />
                  <Input
                    type="number"
                    id={`weight-${id}`}
                    name={`weight-${id}`}
                    value={weight}
                    disabled
                  />
                  <Span>g</Span>
                </li>
              );
            })
          }
        </ul>
      </section>

      <section>
        <Label
          htmlFor="description"
          display="block"
        >
          만드는 방법
        </Label>
        <Textarea
          id="description"
          name="description"
          value={description}
          disabled
        />
      </section>

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
