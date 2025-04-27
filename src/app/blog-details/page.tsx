import BlogDetailsPageData from "@/components/Blog/blogDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mafiin Cloud",
  description: "Mafiin Cloud Konsultan",
};

export default function BlogPage() {
  return <BlogDetailsPageData />;
}
