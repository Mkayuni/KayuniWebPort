import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Moses Kayuni",
  description: "Learn more about Moses Kayuni's background, education, and experience in software development and data engineering.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}