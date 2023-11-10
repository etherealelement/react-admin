import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";



export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    size: "default" | "small" | "medium";
    appearance?: string;
}