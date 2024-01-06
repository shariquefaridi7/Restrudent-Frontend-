import Nav from "./component/header";
import Body from "./component/body";
import Model from "./component/model"
import { DataProvider } from "./Datacontext/dataContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Nav />
        <Body />
        <Model />
      </DataProvider>
    </div>
  )
}

export default App;
