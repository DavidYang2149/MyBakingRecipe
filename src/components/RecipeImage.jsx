import React from 'react';

import { Label } from '../layouts/Recipe';

const RecipeImage = ({ image }) => {
  return (
    <section>
      <div>
        <Label
          htmlFor="displayImage"
          display="block"
        >
          이미지
        </Label>
        <img id="displayImage" src={image || 'images/cookie.jpeg'} width="200px" height="200px" alt="recipe" />
      </div>
    </section>
  );
};

export default RecipeImage;
