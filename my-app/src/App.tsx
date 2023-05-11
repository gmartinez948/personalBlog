import NameHeader from "./NameHeader";
import "./App.css";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}>
      <div>
        <NameHeader />
      </div>
    </motion.div>
  );
}

export default App;
