import React from 'react'
import Img from 'gatsby-image'

export default function Article({ article }) {
    return (
        <div className="article-wrapper">
            {/* <div className="article-img">
                <Img style={{ maxWidth: '30rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} fluid={article.image.fluid} className="article-image" />
            </div> */}
            <div className="">
                <h1>{article.title}</h1>
                <p>{article.description.description}</p>
            </div>
        </div>);
}
