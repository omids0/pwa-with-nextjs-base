import Image from "next/image";
import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <p>Test On IPhone SE:</p>
      <p>First of all testing is images load on github pages host?!</p>
      <Image
        src="./icons/apple-touch-icon.png"
        width={250}
        height={250}
        alt="test image"
        loading="lazy"
      />
    </div>
  );
};

export default HomePage;
