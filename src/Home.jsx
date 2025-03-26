import { useState } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons/faBowlFood";
import { Row } from "react-bootstrap";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons/faPersonWalking";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [dietPlan, setDietPlan] = useState("");
  const [exercise, setExercise] = useState("");
  const [image, setImage] = useState("");

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeter = height / 100;
      const BMIValue = (weight / (heightInMeter * heightInMeter)).toFixed(1);
      setBMI(BMIValue);

      if (BMIValue < 18.5) {
        setCategory("Underweight");
        setDietPlan(
          "Increase calorie intake, eat more protein and healthy fats."
        );

        setExercise("Strength training, yoga, and light cardio.");
        setImage(
          "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/bmi-calc/bmi-calc-vue3/bmi-calc-underweight.png"
        );
      } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
        setCategory("Normal Weight");
        setDietPlan("Balanced diet with proteins, carbs, and healthy fats.");
        setExercise("Regular workouts with a mix of strength and cardio.");
        setImage(
          "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/bmi-calc/bmi-calc-vue3/bmi-calc-healthy.png"
        );
      } else if (BMIValue >= 25 && BMIValue <= 29.9) {
        setCategory("Overweight");
        setDietPlan("Eat fiber-rich, low-calorie foods with lean proteins.");
        setExercise("Cardio workouts, HIIT, and strength training.");
        setImage(
          "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/bmi-calc/bmi-calc-vue3/bmi-calc-overweight.png"
        );
      } else {
        setCategory("Obese");
        setDietPlan(
          "Follow a calorie-deficit diet with more vegetables and proteins."
        );
        setExercise(
          "Low-impact workouts, walking, and guided strength exercises."
        );

        setImage(
          "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/bmi-calc/bmi-calc-vue3/bmi-calc-obese-active.png"
        );
      }
    } else {
      alert("Please enter valid weight and height");
    }
  };

  const valueReset = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setCategory("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <Container className=" p-md-4  border rounded shadow text-center home  ">
        <h1 className=" mb-5 mt-3 ">BMI CALCULATOR</h1>

        <form>
          <Form.Control
            type="text"
            className="inp p-3 mb-4"
            placeholder="Enter Weight (Kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <Form.Control
            type="text"
            className="inp p-3 mb-4"
            placeholder="Enter Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <Button
            onClick={calculateBMI}
            className="mt-3 w-100"
            variant="primary"
          >
            Calculate
          </Button>

          <div className="d-flex justify-content-between align-items-center w-100 mt-3 mb-5">
            <Link to={"/"} className=" ">
              <Button variant="warning" className="px-5">
                Back
              </Button>
            </Link>

            <Button
              variant="outline-primary"
              onClick={valueReset}
              className="px-5"
            >
              Reset
            </Button>
          </div>
        </form>

        {bmi && (
          <div className=" p-3 info">
            <div>
              <h3 className="mt-3">
                <FontAwesomeIcon icon={faPerson} /> Your BMI:{" "}
                <span className="text-success">{bmi}</span>
              </h3>
              <div className="d-flex justify-content-center align-items-center">
                <h4 className="text-clr">{category}</h4>
                <img src={image} alt="" style={{ width: "50px" }} />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <Row className="mt-4">
                <Col className="text-start ">
                  <h6 className="mb-3">
                    <FontAwesomeIcon icon={faBowlFood} /> Dietary Intake Suggestions :
                  </h6>
                  <p className="bg p-3">
                    {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                     {dietPlan}
                  </p>
                </Col>
                <Col className="text-start">
                  <h6 className="mb-3">
                    <FontAwesomeIcon icon={faPersonWalking} /> Recommended
                    Exercises :
                  </h6>
                  <p className="bg p-3">
                    {/* <FontAwesomeIcon icon={faArrowRight} />  */}
                    {exercise}
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </Container>
    </div>

  //   <div className="bmi-container">
  //   <Container className="bmi-card">
  //     <Row>
  //       {/* Left Side: Input Form */}
  //       <Col md={6} className="input-section">
  //         <h2 className="title">BMI Calculator</h2>
  //         <Form onSubmit={calculateBMI}>
  //           <Form.Group>
  //             <Form.Control
  //               type="text"
  //               className="inp"
  //               placeholder="Enter Weight (Kg)"
  //               value={weight}
  //               onChange={(e) => setWeight(e.target.value)}
  //             />
  //           </Form.Group>
  //           <Form.Group>
  //             <Form.Control
  //               type="text"
  //               className="inp"
  //               placeholder="Enter Height (cm)"
  //               value={height}
  //               onChange={(e) => setHeight(e.target.value)}
  //             />
  //           </Form.Group>
  //           <Button type="submit" className="btn-calculate">
  //             Calculate BMI
  //           </Button>
  //           <Button variant="outline-light" className="btn-reset" onClick={resetValues}>
  //             Reset
  //           </Button>
  //         </Form>
  //       </Col>

  //       {/* Right Side: BMI Results */}
  //       <Col md={6} className="result-section">
  //         {bmi && (
  //           <div className="result-box">
  //             <h3>
  //               <FontAwesomeIcon icon={faPerson} /> Your BMI: <span className="bmi-value">{bmi}</span>
  //             </h3>
  //             <h4 className="category">{category}</h4>
  //             <div className="suggestions">
  //               <p>
  //                 <FontAwesomeIcon icon={faBowlFood} /> Diet: {dietPlan}
  //               </p>
  //               <p>
  //                 <FontAwesomeIcon icon={faPersonWalking} /> Exercises: {exercise}
  //               </p>
  //             </div>
  //           </div>
  //         )}
  //       </Col>
  //     </Row>
  //   </Container>
  // </div>
  );
}

export default Home;
