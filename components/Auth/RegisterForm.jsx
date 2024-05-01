import { registerUser } from "@/app/action";

const RegisterForm = () => {
    return (
        <form class="login-form" action={registerUser}>
            <div>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
            </div>

            <div>
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
            </div>
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
                class="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
                Create Account
            </button>
        </form>
    );
};

export default RegisterForm;