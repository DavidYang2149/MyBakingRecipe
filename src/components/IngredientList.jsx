import React from 'react';

import IngredientItem from './IngredientItem';
import { Label } from '../layouts/Recipe';
import { isEmpty } from '../utils/utils';

const IngredientList = ({
  ingredients, onChangeIngredient,
}) => {
  return (
    <section>
      <ul>
        {isEmpty(onChangeIngredient) && (
          <li>
            <Label
              width="32%"
              display="inline-block"
            >
              원재료
            </Label>
            <Label
              width="20%"
              display="inline-block"
            >
              용량
            </Label>
          </li>
        )}
        {
          ingredients.map(({ id, ingredient, weight }) => {
            return (
              <IngredientItem
                key={id}
                id={id}
                ingredient={ingredient}
                weight={weight}
                onChangeIngredient={onChangeIngredient}
              />
            );
          })
        }
      </ul>
    </section>
  );
};

export default IngredientList;
