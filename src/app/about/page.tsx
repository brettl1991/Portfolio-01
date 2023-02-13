"use client";

import { dataText } from "@/data";

const About = () => {
  // console.log("Json jhg:", JSON.stringify(dataText));

  return (
    <div>
      <div>{dataText.about.head.text}</div>
    </div>
  );
};

export default About;
