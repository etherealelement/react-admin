import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface HtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
    children: ReactNode;
    type: "title" | "logo" | "subtitle";
}