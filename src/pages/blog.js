import * as React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout"

const BlogPage = ({data}) => {
  const postTitlesArray = data.allFile.nodes;
  const postTitles = postTitlesArray.map(title => {
    return <li key={title.name}>{title.name}</li>
  });

  return (
    <Layout noNav="false" pageTitle="My Blog Posts">
      <p>My blog posts will go here.</p>
      <ul>{postTitles}</ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage;
