import { recipeModel } from "@/models/recipes-model";
import { replaceMongoIdInArray, replaceMongoIdInObj } from "@/utils/data-utils";

async function getAllRecipes() {
  const allRecipes = await recipeModel.find().lean();
  return replaceMongoIdInArray(allRecipes);
}

async function getRecipeById(recipeId) {
  const recipe = await recipeModel.findById(recipeId).lean();
  return replaceMongoIdInObj(recipe);
}

export { getAllRecipes, getRecipeById };
