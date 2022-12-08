import React from "react"
import { useEffect, useState } from "react"
import { NewsArticle } from "../types"
import Article from "./Article"

// in this page we will fetch the articles from the api to display on the main page

export default function MainPage() {
  const [newsArticles, SetNewsArticles] = useState<NewsArticle[]>([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      )
      console.log("---fetching----", response)
      if (response.ok) {
        let data = await response.json()
        console.log("---data from fetch---", data)
        SetNewsArticles(data)
      } else {
        console.log("error from the server")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap m-5">
        {newsArticles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </>
  )
}
