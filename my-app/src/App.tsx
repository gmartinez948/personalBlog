import NameHeader from "./components/NameHeader";
import ContactMe from "./components/ContactMe";
import "./App.css";
import { DownCircleOutlined } from "@ant-design/icons";
import AboutMe from "./components/AboutMe";
import PersonalProjectGrid, {
  PersonalProjectDataProps,
} from "./components/PersonalProjects";
import { useRef } from "react";

function App() {
  const contactMeRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className="App">
      <NameHeader />
      <AboutMe />
      <PersonalProjectGrid />
      <ContactMe ref={contactMeRef} />
    </div>
  );
}

export default App;
