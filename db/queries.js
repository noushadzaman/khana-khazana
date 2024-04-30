import { recipeModel } from "@/models/recipes-model";
import { replaceMongoIdInArray, replaceMongoIdInObj } from "@/utils/data-utils";

async function getAllRecipes(query) {
  try {
    let allRecipes = [];
    if (query) {
      console.log("Query:", query);
      const regex = new RegExp(query, "i");
      console.log("Regex:", regex);
      allRecipes = await recipeModel
        .find({ category: { $regex: regex } })
        .lean();
    } else {
      allRecipes = await recipeModel.find().lean();
    }
    console.log("Found recipes:", allRecipes);
    return replaceMongoIdInArray(allRecipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    // Handle the error or rethrow it
    throw error;
  }
}

async function getRecipeById(recipeId) {
  const recipe = await recipeModel.findById(recipeId).lean();
  return replaceMongoIdInObj(recipe);
}

export { getAllRecipes, getRecipeById };
