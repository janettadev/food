import "./App.css";
import Register from "./autentication/Register";
import Signin from "./autentication/Signin";
import CreateProduct from "./product/CreateProduct";
import Myroutes from "./routes/myroutes";

function App() {
  return (
    <div className="App">
      <CreateProduct />
      {/* <Myroutes/> */}
    </div>
  );
}

export default App;
