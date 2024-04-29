
const LoginForm = () => {
    return (
        <form class="login-form">
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
                Login
            </button>
        </form>
    );
};

export default LoginForm;