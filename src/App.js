import Body from "./Components/Body";
import {Dataprovider} from "./context/DataContext"

function App() {
  return (
    <div className="App">
      <Dataprovider>
        <Body/>
      </Dataprovider>

    </div>
  );
}

export default App;
