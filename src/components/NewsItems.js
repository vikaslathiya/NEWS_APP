
import React from 'react'

const NewsItems = (props) => {

    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ right: '0%', zIndex: '1' }}>{source}</span>
                <img src={!imageUrl ? "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/11/20/1006195-partial-lunar-eclipse-reuters2.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-link">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItems
