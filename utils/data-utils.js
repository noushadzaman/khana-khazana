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
