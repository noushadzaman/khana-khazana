import RegisterForm from "@/components/Auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section class="h-screen grid place-items-center">
      <div class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 class="font-bold text-2xl">Sign Up</h4>
        <RegisterForm />
        <p class="text-center text-xs text-gray-600">Or</p>
        <Link
          href="/login"
          class="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
