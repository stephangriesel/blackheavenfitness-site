import React from 'react'
import Img from 'gatsby-image'

export default function Article({ article }) {
    return (
        <div>
            <div>
                <Img fluid={article.image.fluid} className="article-image" />
            </div>
            <div className="">
                <h1>{article.title}</h1>
                <p>{article.description.description}</p>
            </div>
        </div>);
}
