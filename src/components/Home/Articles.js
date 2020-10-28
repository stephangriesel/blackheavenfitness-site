import React from 'react'
import Article from './Article'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getArticles = graphql`
{
    articlePost:allContentfulArticles {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            fluid {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default function AllArticles() {
  return (
    <StaticQuery query={getArticles} render={data => {
      return (
        <section>
          <section className="py-5">
            <div className="container">
              {/* <Title title="Articles" /> */}
              <div>
                {data.articlePost.edges.map(({ node: article }) => {
                  return <Article key={article.id} article={article} />
                })}
              </div>
            </div>
          </section>
        </section>
      )
    }} />
  );
}

