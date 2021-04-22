import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProfileSection from '../components/profile/profileSection';
import Portfolios from '../components/portfolio/Portfolios';
import Container from '../components/styled/Container';

const IndexPage: React.FC = ({data}: any) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <ProfileSection />
        <Container>
          {data.allPortfoliosJson.edges.map((edge: any) => <Portfolios {...edge.node} />)}
        </Container>
      </Layout>
    </>
  )
}


export const query = graphql`
  query {
    allPortfoliosJson {
      edges {
        node {
          id
          abstract
          createdAt
          githubRepositoryUrl
          imageUrl
          supportEmail
          tag
          techType
          title
          url
        }
      }
    }
  }`

export default IndexPage;