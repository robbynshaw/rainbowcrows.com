import React from 'react'

import Layout from '../components/Layout'
import ContentContainer from '../components/ContentContainer'
import BlogRoll from '../components/BlogRoll'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ContentContainer>
          <BlogRoll />
        </ContentContainer>
      </Layout>
    )
  }
}
