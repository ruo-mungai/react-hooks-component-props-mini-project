import React from "react";
import Article from "./Article";

function ArticleList({post}){
    const myPost= post.map((postlist)=>
    { 
        return (
             <Article key={postlist.id} title={postlist.title} date={postlist.date} preview={postlist.preview}/>
        )
    })
    return(
        <main>{myPost}</main>
    )
}

export default ArticleList;