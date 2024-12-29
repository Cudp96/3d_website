import React from "react";
import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="font-circular-web text-lg text-blue-50">
            Into The Metagame Layer
          </p>
        </div>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse Yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world
        </p>
      </div>
      <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="video/features-1"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description={`Radiant is a unique blend of technology, design, and art that
            combines cutting-edge technology with innovative design principles. With
            its state-of-the-art AR and VR capabilities, Radiantn't provides users with
            unprecedented access to a wealth of content, experiences, and
            products.`}
        />
      </div>
    </section>
  );
};

export default Features;
