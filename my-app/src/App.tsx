import NameHeader from "./components/NameHeader";
import ContactMe from "./components/ContactMe";
import "./App.css";
import { DownCircleOutlined } from "@ant-design/icons";
import AboutMe from "./components/AboutMe";
import PersonalProjectGrid, {
  PersonalProjectDataProps,
} from "./components/PersonalProjects";

function App() {
  return (
    <div className="App">
      <NameHeader />
      <AboutMe />
      <PersonalProjectGrid />
      <ContactMe />
    </div>
  );
}

export default App;
