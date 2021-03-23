import React from 'react';

import { Label, Input, Button } from '../layouts/Recipe';

const RecipeImageUpload = ({
  upload, image, fileInputRef, onFileChange, onClearFile, onRemoveFile,
}) => {
  return (
    <section>
      {
        image && (
          <div>
            <Label
              htmlFor="displayImage"
              display="block"
            >
              이미지
            </Label>
            <img id="displayImage" src={image} width="200px" height="200px" alt="displayImage" />
            {
              image && (
                <div>
                  <Button
                    type="button"
                    onClick={onRemoveFile}
                  >
                    이미지 삭제하기
                  </Button>
                </div>
              )
            }
          </div>
        )
      }
      <div>
        <Label
          htmlFor="image"
          display="block"
        >
          레시피 이미지
        </Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInputRef}
        />
        {
          upload && (
            <>
              <div>
                <img src={upload} width="200px" height="200px" alt="preview" />
              </div>
              <div>
                <Button
                  type="button"
                  onClick={onClearFile}
                >
                  이미지 비우기
                </Button>
              </div>
            </>
          )
        }
      </div>
    </section>
  );
};

export default RecipeImageUpload;
