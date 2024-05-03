import React from "react";

export default function NotFound({ params: { recipeId } }) {
  return (
    <div className="flex items-center justify-center">
      <p className="text-[#00D991] text-3xl my-[37vh]">
        The recipe you are requesting with id {recipeId} could not found
      </p>
    </div>
  );
}
