import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
            // totalResults:parsedData.totalResults
        }
    }
    async componentDidMount(){
         let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07d70cc113b346e2a2b374f02e10e594&pageSize=20";
         let data=await fetch(url);
         let parsedData=await data.json();
         this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults});
         console.log({articles:parsedData.articles})
    }
    handlePreviosClick=async()=>{
        console.log("Previous button clicked");
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07d70cc113b346e2a2b374f02e10e594&page=${this.state.page-1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log({articles:parsedData.articles})
        this.setState({
            articles:parsedData.articles,
            page:this.state.page-1,
            totalResults:parsedData.totalResults
        })
    }
    handleNextClick=async()=>{
        if(this.state.page+1>this.state.totalResults/20)
        {
           
        }
        else{
        console.log("Next button clicked");
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07d70cc113b346e2a2b374f02e10e594&page=${this.state.page+1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log({articles:parsedData.articles})
        this.setState({
            articles:parsedData.articles,
            page:this.state.page+1,
            totalResults:parsedData.totalResults
        })
       }
    }
    render() {
        return (
            <div className="container m-auto ">
            <h2 style={{textAlign:"center"}}>News Monkey-Top headlines</h2>
            <div className="container my-4">
            <div className="row">
            {
                this.state.articles.map((element)=>{
                return <div className="col-md-4 my-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} url={element.url}/>
                </div>
            })}
             
            </div>
            <div className="container d-flex justify-content-between">
               <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePreviosClick} >&larr; Previous</button>
               <button type="button" className="btn btn-primary" onClick={this.handleNextClick} >Next &rarr;</button>
            </div>
            </div>
            </div>
        )
    }
}

export default News

// disabled={this.state.page<=1} 