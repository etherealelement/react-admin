import { FC } from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import { KmStyle, TagStyle } from './Tag.style';

export const Tag: FC<TagProps> = ({children, type, ...props}: TagProps): JSX.Element => {
    return <span className={cn({
        [TagStyle]: type === "total",
        [KmStyle]: type === "km"
    })} {...props}>{children}</span>;
};