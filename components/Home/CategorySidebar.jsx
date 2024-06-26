import { makeLink } from '@/utils/data-utils';
import Link from 'next/link';

const CategorySidebar = ({ allCategories }) => {
    return (
        <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                {
                    allCategories.map(category => <li
                        key={category}
                    >
                        <Link href={`/categorized/${makeLink(category)}`}>{category}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default CategorySidebar;