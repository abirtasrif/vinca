import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinca | Sign in",
  description: "Welcome",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
