import Button from "./components/exercise1/Button";
import Username from "./components/exercise1/Username";
import Password from "./components/exercise1/Password";

function App() {
  return (
    <div className="App">
      <div className="Username">
        <Username />
      </div>
      <div className="Password">
        <Password />
      </div>
      <div className="Button">
        <Button />
      </div>
    </div>
  );
}

export default App;
