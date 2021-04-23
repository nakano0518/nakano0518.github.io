import path from "path"
import { GatsbyNode } from "gatsby"


const query = `
{
  allPortfoliosJson {
    edges {
      node {
        id
        abstract
        createdAt
        description
        githubRepositoryUrl
        imageUrl
        subImageUrl
        supportEmail
        tag
        techType
        title
        url
      }
    }
  }
  allImageSharp {
    edges {
      node {
        fixed {
          src
        }
      }
    }
  }
} `

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => {
    const result: any = await graphql(query)
    console.log(result);
    if (result.errors || !result.data) {
        throw result.errors
    }

    const { edges } = result.data.allPortfoliosJson
    console.log(edges);
    edges.forEach((edge: any) => {
        console.log(edge)
        if(edge.node.subImageUrl.length === 0 && edge.node.imageUrl === "") return;
        const images: Array<string> = edge.node.subImageUrl
        images.unshift(edge.node.imageUrl)
        const staticImageUrls: Array<string> = [];
        images.forEach((image: string) => {
            const staticImage = result.data.allImageSharp.edges.find((e: any) => {
                return e.node.fixed.src.includes(image)
            })
            if(!staticImage) return;
            const staticImageUrl = staticImage.node.fixed.src
            staticImageUrls.push(staticImageUrl)
        })
        console.log(staticImageUrls);
        
        createPage({
            path: `/portfolios/${edge.node.id}/`,
            component: path.resolve("./src/templates/portfolio.tsx"),
            context: { 
                portfolio: edge.node, 
                staticImageUrls: staticImageUrls
            }
        })
    });
}    
