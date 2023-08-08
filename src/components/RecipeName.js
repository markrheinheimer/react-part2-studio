import recipedata from './recipe.json';

function RecipeName() {
  const recipeImage = recipedata.map((data) => (
    <div key={data.name}>
      <img src={data.recipeImage} alt={data.name} className="recipeImage" />
    </div>
  ));

  return recipeImage;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header
