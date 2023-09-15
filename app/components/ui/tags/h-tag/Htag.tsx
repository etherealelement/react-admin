import { FC } from 'react';
import { HtagProps } from './Htag.props';
import { StyleLogo, StyleSubtitle } from './Htag.style';
import { StyleTitle } from './Htag.style';

export const Htag: FC<HtagProps> = ({children, type}: HtagProps) => {
    switch (type) {
        case "logo": 
            return <h1 className={StyleLogo}>{children}</h1>
        case "title": 
            return <h1 className={StyleTitle}>{children}</h1>    
        case "subtitle": 
            return <h3 className={StyleSubtitle}>{children}</h3>

        default:
            break;
    }
};