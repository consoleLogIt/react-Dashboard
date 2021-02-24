import "./App.css";
import { NavBar, CurrentMenu, MenuOptions,MenuContent } from "./Components";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <Container maxWidth="false" className="container" style={{ padding: "0" }}>
      <Paper elevation = {3}>
        <NavBar />
        <CurrentMenu />
        <MenuOptions />
      </Paper>
      <MenuContent/>
    </Container>
  );
}

export default App;
