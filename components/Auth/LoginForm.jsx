'use client';

import { performLogin } from "@/app/action";
import { useAuth } from "@/app/hooks/useAuth";
import { dbConnect } from "@/services/mongo";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
    const [error, setError] = useState('');
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            await dbConnect();
            const found = await performLogin(formData)
            if (found) {
                setAuth(found);
                router.push('/');
            }
            else {
                setError('User not found!')
            }
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div className="my-2 text-red-500">
                {error}
            </div>
            <form className="login-form"
                onSubmit={onSubmit}
            >
                <div>
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button
                    type="submit"
                    className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;