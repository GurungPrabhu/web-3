import React from "react";
import { Button } from "@elements";
import Image from "next/image";

const Footer: React.FC = () => (
  <div className="footer">
    <Image
      src={"/../public/neptune-mutual.svg"}
      width={200}
      height={50}
      layout="fixed"
    />
  </div>
);

export { Footer };
