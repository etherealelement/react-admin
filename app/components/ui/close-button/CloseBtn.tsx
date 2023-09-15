import { FC } from "react";
import { CloseBtnStyle } from "./CloseBtn.style";

export const CloseBtn: FC = ({ ...props }) => {
	return (
		<button {...props} className={CloseBtnStyle}>
			<svg
				width="8"
				height="8"
				viewBox="0 0 8 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.99998 1.00002L1 7M0.999975 1L6.99995 6.99998"
					stroke="#151515"
					strokeWidth="1.8"
					strokeLinecap="round"
				/>
			</svg>
		</button>
	);
};
