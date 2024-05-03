import { recipeModel } from "@/models/recipes-model";
import { userModel } from "@/models/users-model";
import { dbConnect } from "@/services/mongo";
import { replaceMongoIdInArray, replaceMongoIdInObj } from "@/utils/data-utils";
import mongoose from "mongoose";

async function getAllRecipes(query) {
  try {
    let allRecipes = [];
    if (query) {
      const regex = new RegExp(query, "i");
      await dbConnect();
      allRecipes = await recipeModel
        .find({ category: { $regex: regex } })
        .lean();
    } else {
      await dbConnect();
      allRecipes = await recipeModel.find().lean();
    }
    return replaceMongoIdInArray(allRecipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}

async function getRecipeById(recipeId) {
  await dbConnect();
  const recipe = await recipeModel.findById(recipeId).lean();
  return replaceMongoIdInObj(recipe);
}

async function createUser(user) {
  await dbConnect();
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  await dbConnect();
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObj(user);
  }
  return null;
}

async function updateFavoriteRecipe(userId, recipeId) {
  await dbConnect();
  const user = await userModel.findById(userId);
  user.favourites.push(new mongoose.Types.ObjectId(recipeId));
  user.save();
}

export {
  getAllRecipes,
  getRecipeById,
  createUser,
  findUserByCredentials,
  updateFavoriteRecipe,
};
