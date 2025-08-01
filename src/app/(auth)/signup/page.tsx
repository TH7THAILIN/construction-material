import SignUp from "@/components/features/Auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Construction Material Shop",
  description: "Create your account to start shopping",
};

export default function SignUpPage() {
  return <SignUp />;
}
