import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import RecipeTitle from '../components/RecipeTitle';
import RecipeBasicInfo from '../components/RecipeBasicInfo';
import RecipeDescription from '../components/RecipeDescription';
import RecipeImageUpload from '../components/RecipeImageUpload';
import IngredientList from '../components/IngredientList';
import IngredientAdd from '../components/IngredientAdd';
import { Button } from '../layouts/Recipe';
import {
  setNewIngredient,
  changeNewIngredient,
  changeRecipe,
  changeIngredient,
  removeIngredient,
  swapIngredients,
  writeRecipe,
  removeRecipe,
  removeFile,
} from '../redux/recipe';
import { updateRecipes } from '../redux/recipes';
import {
  isEmpty,
  isMatch,
  isNotEmpty,
} from '../utils/utils';

const RecipeWriteContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
    upload,
    image,
  } = recipe;

  const fileInputRef = useRef();
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

  const onRemoveIngredient = (event) => {
    const { value } = event.target;
    dispatch(removeIngredient({ value }));
  };

  const onKeyUpSetNewIngredient = (event) => {
    if (isMatch(event.key)('Enter')) {
      dispatch(setNewIngredient({ fields: newIngredient }));
    }
  };

  const onClickSetNewIngredient = () => {
    dispatch(setNewIngredient({ fields: newIngredient }));
  };

  const onDragEndIngredient = (result) => {
    const originIndex = result.source.index || 0;
    const destinationIndex = result.destination.index || 0;

    dispatch(swapIngredients({ originIndex, destinationIndex }));
  };

  const onSubmit = async () => {
    await dispatch(writeRecipe());
    await dispatch(updateRecipes());

    if (isEmpty(recipe.id)) {
      history.push('/');
      return;
    }

    history.push(`/recipe/${recipe.id}`);
  };

  const onRemove = async () => {
    const ensure = window.confirm('레시피를 삭제하시겠습니까?');
    if (isEmpty(ensure)) {
      return;
    }

    await dispatch(removeRecipe());
    await dispatch(updateRecipes());
    history.push('/');
  };

  const onFileChange = (event) => {
    const { target: { files } } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { currentTarget: { result } } = finishedEvent;
      dispatch(changeRecipe({ name: 'upload', value: result }));
    };
    reader.readAsDataURL(theFile);
  };

  const onClearFile = () => {
    dispatch(changeRecipe({ name: 'upload', value: null }));
    fileInputRef.current.value = '';
  };

  const onRemoveFile = async () => {
    await dispatch(removeFile());
    await dispatch(writeRecipe());
    await dispatch(updateRecipes());
    fileInputRef.current.value = '';
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

      <IngredientAdd
        newId={newId}
        newIngredient={newIngredient}
        onChangeNewIngredient={onChangeNewIngredient}
        onKeyUpSetNewIngredient={onKeyUpSetNewIngredient}
        onClickSetNewIngredient={onClickSetNewIngredient}
      />

      <IngredientList
        ingredients={ingredients}
        onChangeIngredient={onChangeIngredient}
        onRemoveIngredient={onRemoveIngredient}
        onDragEndIngredient={onDragEndIngredient}
      />

      <RecipeDescription
        description={description}
        onChangeRecipe={onChangeRecipe}
      />

      <RecipeImageUpload
        upload={upload}
        image={image}
        fileInputRef={fileInputRef}
        onFileChange={onFileChange}
        onClearFile={onClearFile}
        onRemoveFile={onRemoveFile}
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
