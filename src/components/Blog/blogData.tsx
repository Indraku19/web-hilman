import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Solusi Website Profesional untuk Bisnis Anda",
    paragraph:
      "Kami menyediakan layanan pembuatan website company profile yang dirancang khusus untuk meningkatkan...",
    image: "/images/blog/contohWebCompany.png",
    author: {
      name: "Mafiin Cloud",
      image: "/images/logo/MB.png",
      designation: "Support: DevOps",
    },
    tags: ["Company Profile"],
    publishDate: "July 2024",
  },
  {
    id: 2,
    title: "Undangan Digital untuk Acara Pernikahan Anda",
    paragraph:
      "Mafiin Cloud juga menyediakan layanan undangan digital berbasis website yang siap membantu Anda dalam...",
    image: "/images/blog/wedding.png",
    author: {
      name: "Mafiin Cloud",
      image: "/images/logo/MB.png",
      designation: "Support: Full Stack",
    },
    tags: ["Undangan Digital"],
    publishDate: "September 2024",
  },
];
export default blogData;
