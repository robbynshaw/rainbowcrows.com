import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const Container = styled.div`
  max-width: 700px;
  padding: 3em;
  margin: 0 auto;
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <BlogRoll />
        </Container>
      </Layout>
    )
  }
}
