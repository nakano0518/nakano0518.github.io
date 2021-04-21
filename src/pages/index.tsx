import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProfileSection from '../components/profile/profileSection';
export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <ProfileSection />
    </Layout>
  )
}