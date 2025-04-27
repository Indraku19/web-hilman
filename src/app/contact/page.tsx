import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mafiin Cloud",
  description: "Mafiin Cloud Konsultan",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Hubungi kami jika ada pertanyaan atau keluhan yang ingin ditanyakan atau diskusi tentang layanan kami."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
