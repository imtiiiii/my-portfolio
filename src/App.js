import { makeStyles, ThemeProvider } from "@material-ui/core";
import AboutMe from "./Components/AboutMe/AboutMe";
import Header from "./Components/Header/Header";
import IOffer from "./Components/IOffer/IOffer";
import Learnings from "./Components/Learnings/Learnings";
import Projects from "./Components/Projects/Projects";
import { Container } from "@mui/material"
import { green, grey } from "@material-ui/core/colors";


function App() {

  return (
    <>

      <Header></Header>
      <AboutMe></AboutMe>
      <IOffer></IOffer>
      <Learnings></Learnings>
      <Projects></Projects>


    </>
  );
}

export default App;
