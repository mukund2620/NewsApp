import React from 'react'
import newsitem from './newsitem.css'
import news from './news.css'

const Newsitem = (props) => {
    
        let { title, description, url, readMore, publishedAt, author, source} = props
        return (
            <a  href={readMore} target = "_blank">
            <div className='my-3'>
                <div className="card" >
                    <img src={url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... <span class="badge rounded-pill bg-success">{source}</span></h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author } on {new Date(publishedAt).toGMTString()}</small></p>
                        <button class="button-85" href={readMore} target = "_blank" role="button">Read More...</button>
                    </div>
                </div>
            </div>
        </a>
        )
}

export default Newsitem
