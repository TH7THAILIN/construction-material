import MyAccount from "@/components/features/Account/MyAccount";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account | Construction Material Shop",
  description: "Manage your account and orders",
};

export default function MyAccountPage() {
  return <MyAccount />;
}
