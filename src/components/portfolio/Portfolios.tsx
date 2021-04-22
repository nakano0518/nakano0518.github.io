import React from "react"
import { css } from "@emotion/css";
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import GraphQLImage from '../image/graphqlImage';
import Card from '../styled/Card';

const titleStyle = css`
    margin: 0;
`;

type Props = {
    id: string;
    abstract: string;
    createdAt: string;
    githubRepositoryUrl: string;
    imageUrl: string;
    supportEmail: string;
    tag: string;
    techType: string;
    title: string;
    url: string;
}

const Portfolios: React.FC<Props> = (props: Props) => {
    return (
        <Card>
            {/*<Img fixed={"src/images/"+props.imageUrl} />*/}
            <GraphQLImage imageUrl={props.imageUrl} />
            <p className={titleStyle}>{props.title}</p>
        </Card>
    );      
    
}

export default Portfolios;