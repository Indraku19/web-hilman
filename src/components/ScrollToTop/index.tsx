import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const redirectToWhatsApp = () => {
    const phoneNumber = "6289657770131";

    const message = "Halo, saya ingin menghubungi Anda";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <div className="flex flex-row">
        <FaWhatsapp
          color="green"
          className="h-10 w-10"
          onClick={redirectToWhatsApp}
        />
        <div className="mx-1" />
        {isVisible && (
          <>
            <div
              onClick={scrollToTop}
              aria-label="scroll to top"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
            >
              <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
