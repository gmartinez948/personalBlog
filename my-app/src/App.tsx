import NameHeader from "./NameHeader";
import "./App.css";
import { DownCircleOutlined } from "@ant-design/icons";
import AboutMe from "./components/AboutMe";
import PersonalProjectGrid, {
  PersonalProjectDataProps,
} from "./components/PersonalProjects";

function App() {
  return (
    <div>
      <NameHeader />
      <AboutMe />
      <PersonalProjectGrid />
    </div>
  );
}

export default App;
