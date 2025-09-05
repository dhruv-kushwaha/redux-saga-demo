import { useDispatch } from "react-redux";
import "./App.css";
import { addToCart } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "i phone 14",
    type: "mobile",
    price: 10000,
    color: "black",
  };

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
    </div>
  );
}

export default App;
