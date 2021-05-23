import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import CarouselContainer from "./CarouselContainer";
import About from "./About";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Meta />
      <CarouselContainer />

      <h1
        style={{
          letterSpacing: "4px",
          color: "#810000",
          borderBottom: "2px soild #810000",
        }}
      >
        NEW PRINTS
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <>
          <Row className="animate__animated animate__fadeInUp animate__delay-1.2s">
            {products.map((product) => (
              <Col
                className="card-print"
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
      <h3 style={{ letterSpacing: "2px", fontWeight: "800", color: "white" }}>
        {" "}
        ABOUT ME
      </h3>
      <About />
    </>
  );
};

export default HomeScreen;
