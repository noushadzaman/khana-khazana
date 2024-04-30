import RecipesList from "@/components/RecipesList";
import { getAllRecipes } from "@/db/queries";
import { makeLinkReverse } from "@/utils/data-utils";

export default async function page({ params: { category } }) {
  const allRecipes = await getAllRecipes(makeLinkReverse(category));
  return (
    <>
      <section class="container py-8">
        <div>
          <h3 class="font-semibold text-xl">Appetizers & Snacks</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            <RecipesList allRecipes={allRecipes} />
          </div>
        </div>
      </section>
    </>
  );
}
