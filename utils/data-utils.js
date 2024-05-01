export async function replaceMongoIdInArray(array) {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
}

export async function replaceMongoIdInObj(obj) {
  const { _id, ...rest } = { id: obj._id.toString(), ...obj };
  return { ...rest };
}

export async function findAllCategories(allRecipes) {
  let categories = [];
  for (let i = 0; i < allRecipes.length; i++) {
    const recipeCategory = allRecipes[i].category;
    if (!categories.includes(recipeCategory)) {
      categories.push(recipeCategory);
    }
  }
  return categories;
}

export function makeLink(string) {
  const items = string
    .split(" ")
    .map((item) => (item === "&" ? (item = "and") : item))
    .join("_");
  return items;
}

export function makeLinkReverse(string) {
  const items = string
    .split("_")
    .map((item) => (item === "and" ? (item = "&") : item))
    .join(" ");
  return items;
}