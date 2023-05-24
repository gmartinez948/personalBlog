import { motion } from "framer-motion";

const NameHeader = () => {
  return (
    // <motion.div
    //   className="Header"
    //   initial={{ opacity: 0, scale: 1 }}
    //   animate={{ opacity: 1, x: 0, position: "fixed" }}
    //   transition={{
    //     duration: 2.0,
    //     delay: 0.8,
    //     ease: [0, 0.6, 0.2, 1.01],
    //   }}
    // >
    <div className="Name-Text">
      <p>
        Hi, I'm Guillermo Martinez
        <br /> Full Stack Software Engineer
      </p>
    </div>
    // </motion.div>
  );
};

export default NameHeader;
