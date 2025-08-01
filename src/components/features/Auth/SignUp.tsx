import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <section className="py-17.5">
      <div className="max-w-[520px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="rounded-lg border border-gray-3 bg-white p-8">
          <div className="mb-8 text-center">
            <h1 className="font-semibold text-2xl text-dark mb-2">
              Create Account
            </h1>
            <p className="text-gray-5">Join us to start shopping for construction materials</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded border border-gray-3 px-4 py-3 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded border border-gray-3 px-4 py-3 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full rounded border border-gray-3 px-4 py-3 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full rounded border border-gray-3 px-4 py-3 focus:border-blue-500 focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-3 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-5">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-500 hover:text-blue-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-500 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-blue-500 py-3 font-medium text-white transition-colors hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-5">
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-500 hover:text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
