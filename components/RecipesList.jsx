import RecipeCard from "./RecipeCard";

const RecipesList = ({ allRecipes, isHome }) => {
    console.log(allRecipes);
    return (
        <div class="col-span-12 md:col-span-9">
            <div
                class={`grid gap-6 my-8 justify-items-center ${isHome ?
                    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                    }`}
            >
                {
                    allRecipes.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default RecipesList;