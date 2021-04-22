import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from "@emotion/css";

const imageStyle = css`
    width: 300px;
    height: 200px;
    margin: 0;
    border-radius: 5px;
`;

type Props = {
    imageUrl: string;
}

// Define a component that takes the image file path as a argument
const GraphQLImage: React.FC<Props> = ({imageUrl}: Props) => (

// Use StaticQuery tags so that GraphQL can be used even for non-page components
  <StaticQuery
    query={graphql`
        query MyQuery {
          allImageSharp {
            edges {
              node {
                fixed {
                  src
                }
              }
            }
          }
        }
    `}

    // All image information is assigned to data
    render={(data: any) => {
        // Get information for gatsby-image that matches the specified image file path (component argument)
        const image = data.allImageSharp.edges.find((edge: any) => {
            return edge.node.fixed.src.includes(imageUrl)
        })
        if (!image) return
        const url = image?.node?.fixed?.src ?? ''
        return (
            <div>
                <img className={imageStyle} src={url} alt="portfolio-image" />
            </div>
        )
    }}
  />
)

export default GraphQLImage;