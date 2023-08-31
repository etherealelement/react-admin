import { FC } from "react";
import cn from "classnames";
import { InputProps } from "./Input.props";
import {
	emailInput,
	eyeSpan,
	inputSearch,
	inputWrapper,
	passwordInput,
    searchSpan,
    textInput,
} from "./Input.style";
import eyeIcon from "../../../../public/images/icon-eye-open.svg";
import iconSearch from "../../../../public/images/icon-search.svg"
import Image from "next/image";

export const Input: FC<InputProps> = ({
	type,
	className,
	...props
}: InputProps): JSX.Element => {
	return (
		<>
			<div className={inputWrapper}>
				<input
					type={type}
					className={cn(emailInput, className, {
						[passwordInput]: type === "password",
                        [inputSearch]: type === "search",
                        [textInput]: type === "text",
					})}
					{...props}
				/>
				{type === "password" ? <span className={eyeSpan}>
					<Image src={eyeIcon} alt="eye-icon"></Image>
				</span>: null}
                {type === "search" ? <span className={searchSpan}>
					<Image src={iconSearch} alt="eye-icon"></Image>
				</span>: null}
			</div>
		</>
	);
};
