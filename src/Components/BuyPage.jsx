import React, {useState, useEffect}  from "react";
import Axios  from "axios";
import CartItem from "./CartItem";

import { faker } from "@faker-js/faker";


// import {random, commerce} from "faker"
import {Container, Col, Row } from "reactstrap"


// const apiKey = " KEy"
// const url = "https:api.pexels.com/v1/search?query=laptop$per_page=6&page=1"
const localurl = "https://myjson.dit.upm.es/api/bins/8icy";

const BuyPage = ({ addInCart }) => {
    
    const [product, setProduct] = useState([])
    const fetchPhotos = async () => {
      const { data } = await Axios.get(localurl,{});

      const { photos } = data;

      const allproduct = photos.map((photo) => ({
        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: faker.word.adjective(),
        productPrice: faker.finance.amount(),
        id: faker.datatype.uuid(),
      }));

    setProduct(allproduct)

    };

     useEffect(() => {
        fetchPhotos();
     }, []);


     return (
       <Container fluid>
         <h1 className="text-success text-center">Buy Now</h1>
         <Row>
           {product.map((product) => (
             <Col md={4} key={product.id}>
               <CartItem product={product}  addInCart = { addInCart }  />
             </Col>
           ))}
         </Row>
       </Container>
     );

}

export default BuyPage;


