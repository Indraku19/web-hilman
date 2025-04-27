"use client"; // Add this at the top to make the component a Client Component

import { useLottie } from "lottie-react";
import CloudAnimation from "public/Lottie/cloud.json"; // Assuming your path is correct

export default function Cloud() {
  const options = {
    animationData: CloudAnimation,
    loop: true, // Set this to false if you don't want it to loop
    style: { width: "100%", height: "100%" },
  };

  const { View } = useLottie(options);

  return <div>{View}</div>;
}
