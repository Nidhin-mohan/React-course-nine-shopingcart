import {useState} from "react"


import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css";
import './App.css';


import { Container, Col, Row } from "reactstrap";
import { ToastContainer,toast } from "react-toastify"

import Cart from  "./Components/Cart"
import BuyPage from "./Components/BuyPage";



function App() {

  const [cartItem, setCartItem] = useState([]);

const addInCart = item => {
  const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id;

  });
  if(isAlreadyAdded !== -1) {
    toast("already added in cart", {
      type: "error"
    });
  };

  setCartItem([...cartItem, item]);
}

const buNow = () => {
  setCartItem([])

  toast("purchase Complete", {
    type: "success"
  });
};

const removeItem = item => {
  setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
}



  return (
   <Container>
    <h1>hi </h1>
    <ToastContainer>
      <Row>
       
        <Col md= "8">
        <BuyPage  addInCart = {addInCart} />
        </Col>
        <Col md= "4">
          <Cart cartItem={cartItem}  removeItem={removeItem} buNow={buNow} />
        </Col>
      </Row>
    </ToastContainer>
   </Container>
  );
}

export default App;
