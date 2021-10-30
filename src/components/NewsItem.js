import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,url}=this.props;
        return (
            <>
            <div style={{boxShadow:"10px 10px 18px",width:"288px",borderRadius:"3px"}}>
            <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl===null?"https://images.livemint.com/img/2021/10/28/600x338/9d0bd70a-25f8-11ec-92c5-8a3c3517e00d_1634993630963_1635436343906.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">Read more</a>
            </div>
          </div>
          </div>
          </>
        )
    }
}

export default NewsItem