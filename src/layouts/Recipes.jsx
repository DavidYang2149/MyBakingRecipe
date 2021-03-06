import styled from '@emotion/styled';

const RecipeCards = styled.ul`
  @media (min-width: 600px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0 -1rem;
      justify-content: space-between;
      li {
        /* width: 30%; */
        flex-basis: 33.3%;
        flex-direction: column;
        /* box-shadow: rgb(0 0 0 / 4%) 4px 4px 16px 0px;
        padding: 1 1 0 0rem; */
        /* min-width: 200px; */
      }
  }
`;

const RecipeCard = styled.li`
  border-radius: 5px;
  margin-bottom: 2rem;
  /* box-shadow: 1px 5px; */
  /* box-shadow: rgb(0 0 0 / 4%) 4px 4px 16px 0px; */


  .card-image {
    height: 0;
    padding-bottom: 60%;
    border-radius: 5px 5px 0 0;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .card-image img {
    display: none;
  }

  .card-desc {
    padding: 1rem;
    background: white;
  } 
`;

const Article = styled.article`
  
`;

export {
  RecipeCards,
  RecipeCard,
  Article,
};
