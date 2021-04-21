import React from "react"
//import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import { css } from "@emotion/css";
import UserStaticImage from '../image/userStaticImage';
import ProfileContents from './contents/profileContents';

// const imageContainer = css`
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// `;

// const imageStyle = css`
//     width: 100px;
//     height: 100px;
//     @media (min-width: 480px) {
//         width: 200px;
//         height: 200px;
//     }
//     @media (min-width: 960px) {
//         width: 300px;
//         height: 300px;
//     }
// `;

// interface Props {
//   imageUrl?: string
// }


const ProfileSection: React.FC = () => {
    return (
        <>
            <UserStaticImage />
            <ProfileContents />
            
        </>
    );    
}

export default ProfileSection;