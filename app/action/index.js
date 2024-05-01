"use server";

import {
  createUser,
  findUserByCredentials,
  updateFavoriteRecipe,
} from "@/db/queries";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addFavouriteRecipe(userId, recipeId) {
  try {
    await updateFavoriteRecipe(userId, recipeId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
  redirect("/");
}

export { registerUser, performLogin, addFavouriteRecipe };
