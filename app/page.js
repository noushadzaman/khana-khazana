import CategorySidebar from "@/components/Home/CategorySidebar";
import HeroSection from "@/components/Home/HeroSection";
import RecipesList from "@/components/Home/RecipesList";
import { getAllRecipes } from "@/db/queries";

export default async function Home() {
  const allRecipes = await getAllRecipes();
  console.log(allRecipes);

  return (
    <>
      <HeroSection />
      <section class="container py-8">
        <div class="grid grid-cols-12 py-4">
          <CategorySidebar />
          <RecipesList allRecipes={allRecipes} />
        </div>
      </section>
    </>
  );
}
