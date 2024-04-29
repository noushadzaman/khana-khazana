import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image
                        width={120}
                        height={120}
                        src="/logo.png"
                        alt="logo"
                        className="object-cover"
                    />
                </Link>

                <ul className="flex gap-4 text-sm text-gray-500">
                    <li className="py-2 active">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="py-2">
                        <Link href="./index.html">Recipe</Link>
                    </li>

                    <li className="py-2">
                        <Link href="./index.html">About us</Link>
                    </li>

                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;