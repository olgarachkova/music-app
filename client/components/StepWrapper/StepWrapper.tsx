import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { StepWrapperProps } from "./StepWrapper.props";

const steps = ['info', 'upload cover', 'upload track'];

export const StepWrapper = ({ activeStep, children }: StepWrapperProps): JSX.Element => {
  return (
    <Container>
      <Stepper>
        {steps.map((step, index) =>
          <Step
            key={'step' + index}
            completed={activeStep > index}
          >
            <StepLabel>{step}</StepLabel>
          </Step>)}
      </Stepper>
      <Grid container justifyContent='center'>
        <Card>{children}</Card>
      </Grid>
    </Container>
  )
}