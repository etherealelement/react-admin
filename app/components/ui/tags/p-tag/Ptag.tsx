import { FC } from 'react';
import {PtagProps} from "@/app/components/ui/tags/p-tag/Ptag.props";
import cn from "classnames";
import {text} from "@/app/components/ui/tags/p-tag/Ptag.style";
import {textBold} from "@/app/components/ui/tags/p-tag/Ptag.style";
import {textSemiBold} from "@/app/components/ui/tags/p-tag/Ptag.style";
import {textGhost} from "@/app/components/ui/tags/p-tag/Ptag.style";
export const Ptag: FC<PtagProps> = ({children, type, className, ...props}: PtagProps): JSX.Element => {
    return <p className={cn(text,className,{
        [textBold]: type === "bold",
        [textSemiBold]: type === "semi-bold",
        [textGhost]: type === "ghost",
    })} {...props}>{children}</p>;
};