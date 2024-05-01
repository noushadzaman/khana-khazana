import RecipeDetails from "@/components/Details/RecipeDetails";
import RecipeSteps from "@/components/Details/RecipeSteps";
import { getRecipeById } from "@/db/queries";

export async function generateMetadata({ params: { recipeId } }) {
  const recipe = await getRecipeById(recipeId);

  return {
    title: `Khana Khazana - ${recipe?.name}`,
    description: `${recipe?.description}`,
    openGraph: {
      images: [recipe?.image],
    },
  };
}

export default async function page({ params: { recipeId } }) {
  const recipe = await getRecipeById(recipeId);

  return (
    <>
      <RecipeDetails recipe={recipe} />
      <RecipeSteps steps={recipe?.steps} />
    </>
  );
}
