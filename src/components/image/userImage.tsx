import React from "react"
//import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import { css } from "@emotion/css";

const imageContainer = css`
    
`;

const imageStyle = css`
  width: 100px;
  height: 100px;
`;

interface Props {
  imageUrl?: string
}


const UserImage: React.FC<Props> = ({imageUrl}: Props) => {
    return (
        <div className={imageContainer}>
            <img 
                src={imageUrl? imageUrl:'/defaultUser'} 
                className={imageStyle}
                alt="userImage" 
            />
        </div>
    );    
}

export default UserImage;