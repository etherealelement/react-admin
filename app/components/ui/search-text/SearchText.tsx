import { FC } from "react";
import { SearchTextProps } from "./SearchText.props";
import { Text, flexWrapper } from "./SearchText.style";
import cn from "classnames";
import Image from "next/image";
import JobIcon from "../../../../public/images/icon-job-title.svg";
import LocationIcon from "../../../../public/images/icon-location.svg";
import IndustryIcon from "../../../../public/images/icon-industry.svg";
import LogoutIcon from "../../../../public/images/vector.svg"


export const SearchText: FC<SearchTextProps> = ({
	children,
	type,
    ...props
}: SearchTextProps) => {
	switch (type) {
		case "job":
			return (
				<div className={flexWrapper} {...props}>
					<span>
						<Image src={JobIcon} alt={"icon"}></Image>
					</span>
					<p className={Text}>{children}</p>
				</div>
			);
        case "location": 
        return (
            <div className={flexWrapper} {...props}>
                <span>
                    <Image src={LocationIcon} alt={"icon"}></Image>
                </span>
                <p className={Text}>{children}</p>
            </div>
        );
        
        case "industry" : 
        return (
            <div className={flexWrapper} {...props}>
                <span>
                    <Image src={IndustryIcon} alt={"icon"}></Image>
                </span>
                <p className={Text}>{children}</p>
            </div>
        );

        case "logout" :
            return (
                <div className={flexWrapper} {...props}>
                    <span>
                        <Image src={LogoutIcon} alt={"icon"}></Image>
                    </span>
                    <p className={Text}>{children}</p>
                </div>
            );
		default:
			throw new Error("Указано неверное свойство");
	}
};
