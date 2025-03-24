import React from "react";
import bmiimage from "./assets/bmi.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function BMIchart() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className=" border rounded shadow chart-bg  chart mt-md-5 p-3 ">
          <h1 className="text-center  p-4 about">About BMI</h1>
          <div className="d-flex justify-content-center align-items-center">
            <img src={bmiimage} style={{ width: "300px" }} alt="" />
          </div>
          <p className="mt-3">
            Body mass index (BMI) is a measure of your weight relative to your
            height. For all men and women 20 years old and older, the BMI
            measurement is classified into one of four main weight categories
          </p>
          <div className="d-flex align-items-center justify-content-start">
            <p className="bg-info text-info" style={{ width: "30px" }}>
              .
            </p>
            <p className="ms-3">Below 18.5: Underweight</p>
            <img src="" alt="" />
          </div>

          <div className="d-flex align-items-center justify-content-start">
            <p
              style={{
                backgroundColor: "green",
                color: "green",
                width: "30px",
              }}
            >
              .
            </p>
            <p className="ms-3">18.5 – 24.9: Healthy Weight</p>
            <img src="" alt="" />
          </div>

          <div className="d-flex align-items-center justify-content-start">
            <p
              style={{
                backgroundColor: "orange",
                color: "orange",
                width: "30px",
              }}
            >
              {" "}
              .
            </p>
            <p className="ms-3">25.0 – 29.9: Overweight</p>
            <img src="" alt="" />
          </div>

          <div className="d-flex align-items-center justify-content-start mb-4">
            <p style={{ backgroundColor: "red", color: "red", width: "30px" }}>
              .
            </p>
            <p className="ms-3">30.0 and above: Obesity</p>
            <img src="" alt="" />
          </div>
          <Link
            to={"/"}
            className=" d-flex justify-content-start"
            style={{ textDecoration: "none" }}
          >
            <Button variant="" className="px-5 text-light back-btn ">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BMIchart;
