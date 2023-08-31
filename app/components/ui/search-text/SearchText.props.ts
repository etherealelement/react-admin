import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SearchTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    type: "job" | "location" | "industry" | "logout"
}