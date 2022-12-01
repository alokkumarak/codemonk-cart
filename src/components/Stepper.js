import React from 'react'
import '../css/stepper.css'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const steps = [
  "SHOPPING CART",
  "ORDER DETAILS",
  "MAKE PAYMENT",
];

function Steppers() {
    return (
      <div className="stepper">
        <Box sx={{ width: "50%" }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    );
}

export default Steppers
