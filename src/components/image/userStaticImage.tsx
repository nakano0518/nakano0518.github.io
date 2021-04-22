import React from "react"
//import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import { css } from "@emotion/css";
import { StaticImage } from "gatsby-plugin-image"

const imageContainer = css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const imageStyle = css`
    width: 100px;
    height: 100px;
    border-radius: 1000px;
    @media (min-width: 480px) {
        width: 200px;
        height: 200px;
    }
    @media (min-width: 960px) {
        width: 300px;
        height: 300px;
    }
`;


const UserImage: React.FC = () => {
    return (
        <div className={imageContainer}>
            <StaticImage 
                src="../../images/profile-image.jpg"
                className={imageStyle}
                alt="userImage" 
            />
        </div>
    );    
}

export default UserImage;