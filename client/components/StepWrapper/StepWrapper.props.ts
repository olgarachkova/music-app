import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface StepWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    activeStep: number;
}