import React from "react"
import { css } from "@emotion/css";

const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const subContainerStyle = css`
    display: inline-block;
    marginTop: 2rem;
`;
const contentStyle = css`
    display: inline-block;
    margin-bottom: 0;
    margin-top: 1rem;
`;


const ProfileContents: React.FC = () => {
    return (
            <div className={containerStyle}>
                <h1 className={contentStyle}> Taich Nakano </h1>
                <h2 className={contentStyle}> Web developper</h2>
                <div className={subContainerStyle}>
                    <h3 className={contentStyle}>skills</h3>
                    <p>
                        Ruby on Rails / React / TypeScript / ReactNative /<br/>
                        AWS (EC2/RDS/S3/ECS/ECR etc..)
                    </p>
                </div>
            </div>
    );      
    
}

export default ProfileContents;