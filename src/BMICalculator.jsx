import React from "react";
import "./BMICalculator.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function BMICalculator() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="main">
          <Row>
            <div className=" col-12 col-md-6  bg-warning main-img "></div>

            <div className="col-12 col-md-6  bg-dark text-light p-5  main-content">
              <h6 className="mb-3 mt-5 ">KEEP YOUR BODY AT GLANCE</h6>
              <h2 className="mb-3 mb-md-5">Check your BMI Get Personalized Advice</h2>
              <Link to="/home">
                <Button variant="primary" className="w-100 my-3 ">
                  Go to BMI Calculator
                </Button>
              </Link>
              <Link to={"/bmichart"}>
                <Button variant="outline-primary" className="w-100 mt-3 mb-5">
                  BMI Chart
                </Button>
              </Link>{" "}
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BMICalculator;
