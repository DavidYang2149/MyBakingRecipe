import React from 'react';

import { Input, Span, Button } from '../layouts/Recipe';
import { isEmpty, isNotEmpty } from '../utils/utils';

const IngredientItem = ({
  id, ingredient, weight,
  onChangeIngredient, onRemoveIngredient,
  provided,
}) => {
  if (isEmpty(id)) {
    return false;
  }

  return (
    <li
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
    >
      <Input
        type="text"
        id={`ingredient-${id}`}
        name={`ingredient-${id}`}
        value={ingredient}
        onChange={onChangeIngredient}
        width="30%"
        disabled={isEmpty(onChangeIngredient)}
      />
      <Input
        type="number"
        id={`weight-${id}`}
        name={`weight-${id}`}
        value={weight}
        onChange={onChangeIngredient}
        width="20%"
        disabled={isEmpty(onChangeIngredient)}
      />
      <Span>g</Span>
      {
        isNotEmpty(onRemoveIngredient) && (
          <Button
            type="button"
            onClick={onRemoveIngredient}
            value={id}
          >
            삭제
          </Button>
        )
      }
    </li>
  );
};

export default IngredientItem;
