import { makeStyles, ThemeProvider } from "@material-ui/core";
import AboutMe from "./Components/AboutMe/AboutMe";
import Header from "./Components/Header/Header";
import IOffer from "./Components/IOffer/IOffer";
import Learnings from "./Components/Learnings/Learnings";
import Projects from "./Components/Projects/Projects";
import { Container } from "@mui/material"
import { green, grey } from "@material-ui/core/colors";
import ContactMe from "./Components/ContactMe/ContactMe";


function App() {

  return (
    <>

      <Header></Header>
      <AboutMe></AboutMe>
      <IOffer></IOffer>
      <Learnings></Learnings>
      <Projects></Projects>
      <ContactMe></ContactMe>


    </>
  );
}

export default App;
