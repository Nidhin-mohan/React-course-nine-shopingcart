import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
    CardHeader,
} from "reactstrap"



const Cart = ({ CartItem, removeItem, buyNow}) => {
    let amount = 0;

    CartItem.forEach(item => (
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    ));

        return (
          <Container>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
              {CartItem.map((item) => (
                <ListGroupItem>
                  <Row>
                    <Col>
                      <img height={80} src={item.tinyImage} alt='' />
                    </Col>
                    <Col className="text-center">
                      <div className="text-Primary">{item.productName}</div>

                      <span> price :- {item.productPrice}</span>
                      <Button color="danger" onClick={() => removeItem(item)}>
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
            {/* if everything is empty */}

            {CartItem.length >= 1 ? (
                <Card className="text-center mt-3" >
                    <CardHeader> Grand Total</CardHeader>
                    <CardBody>Your amount for {CartItem.length}  product is {amount} </CardBody>
                    <CardFooter>
                        <Button color="success" onClick={buyNow} >pay here</Button>
                    </CardFooter>
                    
                </Card>

            ) : (<h1 className="text-warning"> Cart is Emty</h1>)}


          </Container>
        );

};



export default Cart;