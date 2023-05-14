import React, { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");

  function calculateBMI() {
    if (height && weight) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBMI(bmiValue);
    }
  }

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen text-lg sm:text-black-400  text-gray-500 leading-7">
      <Header></Header>
      <div className="mx-auto max-w-4xl font-display items-center justify-center text-center text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
        <h1>BMI Calculator</h1>
      </div>
      <br></br>
      <div>
        <h6>Enter your height and weight to learn your body mass index</h6>
      </div>
      <br></br>
      
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </label>
      <br />
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </label>
      <br />

      <div className="bg-purple-600 cubed-x2 text-black justify-center text-center font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>

      <div>
        {bmi && <p className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal">Your BMI is: {bmi}</p>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BMICalculator;
