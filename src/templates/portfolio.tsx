// src/templates/post.js
import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout/layout";
import Tag from '../components/styled/Tag';
import SkillTag from '../components/styled/SkillTag';
import IconContainer from '../components/styled/IconContainer';
import Container from '../components/styled/Container';
import { css } from "@emotion/css";

const titleStyle = css`
    margin: 2rem 0 0 0;
    font-size: 1.2rem;
    font-weight: bold;
`;
const descriptionContainerStyle = css`
    margin-top: 0;
`;
const imageStyle = css`
    margin-top: 2rem;
`


export default function Portfolio({ pageContext }: any) {
    const { 
        abstract, createdAt, description, githubRepositoryUrl,
        supportEmail, tag, techType, title, url
    } = pageContext.portfolio;
    const staticImageUrls = pageContext.staticImageUrls
    

    return (
        <Layout>
            <img src={staticImageUrls[0]} alt="top-image" />
            <p>{createdAt}</p>
            <Tag>{tag}</Tag>
            <h1>{title}</h1>
            <p>{abstract}</p>
            {techType.map((t: string) =>{
                return <SkillTag>{t}</SkillTag>
            })}
            <p>Support: {supportEmail}</p>
            <Link to={url}>
                <IconContainer>demo</IconContainer>
            </Link>
            <Link to={githubRepositoryUrl}>
                <IconContainer>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                </IconContainer>
            </Link>
            <h2 className={titleStyle}>description</h2>
            <hr/>
            <p className={descriptionContainerStyle}>{description}</p>
            <hr/>
            {staticImageUrls.map((staticImageUrl: string, index: number) => {
                if(index === 0) return;
                return (
                    <>
                        <img className={imageStyle} src={staticImageUrl} alt="subImage" /><br/>
                    </>
                );
            })}
        </Layout>
    )
}