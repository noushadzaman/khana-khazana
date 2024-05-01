import CategorySidebar from "@/components/Home/CategorySidebar";
import HeroSection from "@/components/Home/HeroSection";
import RecipesList from "@/components/RecipesList";
import { getAllRecipes } from "@/db/queries";
import { findAllCategories } from "@/utils/data-utils";

export default async function Home() {
  const allRecipes = await getAllRecipes();
  const allCategories = await findAllCategories(allRecipes);

  return (
    <>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <CategorySidebar allCategories={allCategories} />
          <RecipesList allRecipes={allRecipes} isHome={true} />
        </div>
      </section>
    </>
  );
}
