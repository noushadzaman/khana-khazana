'use client';

import { addFavouriteRecipe } from "@/app/action";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';

const RecipeDetails = ({ recipe }) => {
    const { auth, setAuth } = useAuth();
    const alreadyFavourite = auth?.favourites.find(fav => fav == recipe?.id);
    const [isFavourite, setIsFavourite] = useState(alreadyFavourite);
    const [favourite, setFavourite] = useState(false);
    const [btns, setBtns] = useState(false);
    const router = useRouter();


    async function addFavourite() {
        if (isFavourite) {
            return;
        }
        if (auth) {
            await addFavouriteRecipe(auth?.id, recipe?.id);
            setAuth({
                ...auth,
                favourites: [...auth?.favourites, recipe?.id]
            });
            setFavourite(true);
        }
        else {
            router.push('/login')
        }
    }

    return (
        <section>
            <div className="grid grid-cols-12 container gap-8 justify-items-center">
                <div className="col-span-12 md:col-span-6">
                    <Image
                        width={500}
                        height={500}
                        src={recipe?.image}
                        className="w-full h-full rounded-lg object-contain"
                        alt="Recipe Image"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
                    <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">{recipe?.name}</h2>
                    <p className="text-xs text-[#eb4a36] italic my-2">{recipe?.category}</p>
                    <p className="text-gray-600 text-sm my-6 leading-6">{recipe?.description}</p>
                    <div className="flex gap-4 justify-center divide-x my-12">
                        <div className="flex-1 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-auto">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M12 7v5l3 3" />
                            </svg>
                            <h3 className="font-medium text-lg text-gray-700 mt-2">Prep time</h3>
                            <p className="text-gray-500 text-sm">{recipe?.activeTime}</p>
                        </div>
                        <div className="flex-1 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-auto">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6.5 17h11" />
                                <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                                <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                            </svg>
                            <h3 className="font-medium text-lg text-gray-700 mt-2">Cook time</h3>
                            <p className="text-gray-500 text-sm">{recipe?.totalTime}</p>
                        </div>
                        <div className="flex-1 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-auto">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                            </svg>
                            <h3 className="font-medium text-lg text-gray-700 mt-2">Servings</h3>
                            <p className="text-gray-500 text-sm">{recipe?.serves}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-end items-center">
                        <div
                            onClick={addFavourite}
                            className={`flex gap-2 hover:text-[#eb4a36] ${isFavourite ? 'text-[#eb4a36] cursor-not-allowed' : 'text-gray-600 cursor-pointer'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                                <path stroke="none" d="M0 0h24v24H0z" fill='' />
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            <span>Favourite</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            {
                                btns && <div>
                                    <FacebookShareButton
                                        url={`http://localhost:3000/details/${recipe?.id}`} >
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <PinterestShareButton
                                        url={`http://localhost:3000/details/${recipe?.id}`} >
                                        <PinterestIcon size={32} round />
                                    </PinterestShareButton>
                                    <RedditShareButton
                                        url={`http://localhost:3000/details/${recipe?.id}`} >
                                        <RedditIcon size={32} round />
                                    </RedditShareButton>
                                    <WhatsappShareButton
                                        url={`http://localhost:3000/details/${recipe?.id}`} >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                    <LinkedinShareButton
                                        url={`http://localhost:3000/details/${recipe?.id}`} >
                                        <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                </div>
                            }
                            {
                                !btns &&
                                <div
                                    onClick={() => setBtns(true)}
                                    className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M8.7 10.7l6.6 -3.4" />
                                        <path d="M8.7 13.3l6.6 3.4" />
                                    </svg>
                                    <span>Share</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default RecipeDetails;