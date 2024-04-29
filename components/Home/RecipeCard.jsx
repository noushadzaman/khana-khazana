import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/details/${recipe?.id}`}>
            <Image
                height={300}
                width={300}
                src={recipe?.thumbnail}
                class="rounded-md bg-cover w-[100%]"
                alt=""
            />
            <h4 class="my-2">{recipe?.name}</h4>
            <div class="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ {recipe?.rating}</span>
                <span>By: {recipe?.author}</span>
            </div>
        </Link>
    );
};

export default RecipeCard;