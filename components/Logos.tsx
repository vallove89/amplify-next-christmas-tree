import React from "react";

const cities = [
  { name: "Dallas", size: "h4" },
  { name: "Fort Worth", size: "h4" },
  { name: "Arlington", size: "h4" },
  { name: "Plano", size: "h4" },
  { name: "Garland", size: "h4" },
  { name: "Irving", size: "h4" },
  { name: "Frisco", size: "h4" },
  { name: "Carrollton", size: "h4" },
  { name: "Denton", size: "h4" },
  { name: "Lewisville", size: "h4" },
  { name: "Allen", size: "h5" },
  { name: "Euless", size: "h5" },
  { name: "Flower Mound", size: "h5" },
  { name: "Grapevine", size: "h5" },
  { name: "North Richland Hills", size: "h5" },
  { name: "Richardson", size: "h5" },
  { name: "Rowlett", size: "h5" },
  { name: "The Colony", size: "h5" },
  { name: "Wylie", size: "h5" },
  { name: "Addison", size: "h6" },
  { name: "Colleyville", size: "h6" },
  { name: "Coppell", size: "h6" },
  { name: "Highland Village", size: "h6" },
  { name: "Little Elm", size: "h6" },
  { name: "Murphy", size: "h6" },
  { name: "Parker", size: "h6" },
  { name: "Roanoke", size: "h6" },
  { name: "Sachse", size: "h6" },
  { name: "Southlake", size: "h6" },
];

// Shuffle function to randomize order
const shuffleArray = (array: typeof cities) => {
  return array.sort(() => Math.random() - 0.5);
};

const Logos: React.FC = () => {
  const shuffledCities = shuffleArray([...cities]);

  return (
    <section id="logos" className="py-32 px-5 bg-background relative w-full min-h-[500px] sm:min-h-[600px] flex flex-wrap justify-evenly items-center gap-4 sm:gap-6 md:gap-10">
      <p className="text-lg font-medium text-center w-full">
        We deliver Christmas Tree to your home in:
      </p>
      {shuffledCities.map((city, index) => {
        const Tag = city.size as keyof JSX.IntrinsicElements;
        return (
          <Tag
            key={index}
            className={`whitespace-nowrap ${
              city.size === "h4"
                ? "text-3xl sm:text-4xl md:text-5xl font-bold"
                : city.size === "h5"
                ? "text-xl sm:text-2xl md:text-3xl font-semibold"
                : "text-lg sm:text-xl md:text-2xl font-medium opacity-80"
            }`}
          >
            {city.name}
          </Tag>
        );
      })}
    </section>
  );
};

export default Logos;
