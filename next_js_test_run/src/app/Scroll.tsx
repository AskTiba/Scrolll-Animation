import { useScroll, useTransform, motion } from "framer-motion";
import "./Card";
export const Scroll = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-screen">
      <ScrollCore />
    </div>
  );
};
export const ScrollCore = () => {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div className="h-[120vh] transform scale-[0.8] p-10 flex items-center justify-center relative ">
      <div
        className="py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} />
        <Card rotate={rotate} translate={translate} scale={scale} />
      </div>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      <h1 className="text-4xl font-semibold">
        Unleash the power of <br />{" "}
        <span className="text-5xl lg:text-6xl  font-bold mt-1 leading-none">
          Scroll Animations
        </span>
      </h1>
    </motion.div>
  );
};

export const Card = () => {
  // Going to implement later in the blog
};
