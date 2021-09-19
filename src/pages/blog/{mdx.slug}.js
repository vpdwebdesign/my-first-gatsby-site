import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const image_alt = data.mdx.frontmatter.hero_image_alt;
  const image_credit_text = data.mdx.frontmatter.hero_image_credit_text;
  const image_credit_link = data.mdx.frontmatter.hero_image_credit_link;

  return (
    <Layout noNav="false" pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage 
        image={image}
        alt={image_alt}
      />
      <p>
        Photo credit:{" "}<a href={image_credit_link} target="_blank">{image_credit_text}</a>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default BlogPost;
