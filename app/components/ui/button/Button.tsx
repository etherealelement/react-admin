import { FC } from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import { defaultButton, smallButton } from "./Styles";
import IconSubs from "../../../../public/images/icon-subs.svg"
import Image from "next/image";
import IconUser from "../../../../public/images/icon_user.svg";


export const Button: FC<ButtonProps> = ({
	appearance,
	children,
	size,
	className,
	...props
}: ButtonProps): JSX.Element => {
	


	return (
		<>
			<button
				className={cn(defaultButton, className, {
					[smallButton] : size === "small",
								
				})}
				{...props}
			>
				{size === "small" ? <span><Image src={IconSubs} alt="icon-user"></Image></span> : null}
				{size === "medium" ? <span><Image src={IconUser} alt="icon-subscribe"></Image></span> : null}
				{children}
			</button>
		</>
	);
};
