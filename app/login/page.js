import LoginForm from "@/components/Auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section class="h-screen grid place-items-center">
      <div class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 class="font-bold text-2xl">Sign in</h4>
        <LoginForm />
        <p class="text-center text-xs text-gray-600">Or</p>
        <Link
          href="/register"
          class="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
        >
          Create New Account
        </Link>
      </div>
    </section>
  );
}
