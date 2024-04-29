import RecipeDetails from "@/components/Details/RecipeDetails";
import RecipeSteps from "@/components/Details/RecipeSteps";
import { getRecipeById } from "@/db/queries";

export default async function page({ params: { recipeId } }) {
  const recipe = await getRecipeById(recipeId);
  console.log(recipe);

  return (
    <>
      <RecipeDetails recipe={recipe} />
      <RecipeSteps steps={recipe?.steps} />
    </>
  );
}
