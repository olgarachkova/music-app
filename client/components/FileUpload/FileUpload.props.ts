import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface FileUploadProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setFile: Function;
    accept: string;
    children: ReactNode;
}