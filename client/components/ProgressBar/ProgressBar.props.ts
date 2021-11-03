import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProgressBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    barLength: number;
    currentValue: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isTime?: boolean;
}