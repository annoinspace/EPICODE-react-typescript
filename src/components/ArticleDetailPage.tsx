import React from "react"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { NewsArticle } from "../types"
import SingleArticleCard from "./SingleArticleCard"

export default function ArticleDetailPage() {
  const params = useParams()
  console.log("---params---", params)
  console.log("---articleid---", params.id)

  const [articleDetail, setArticleDetail] = useState<NewsArticle[]>([])

  //fetch the details for the specific article

  useEffect(() => {
    fetchSingleArticle()
  }, [])

  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      )
      console.log("---fetching single article----", response)
      if (response.ok) {
        let data = await response.json()
        console.log("---data from single article fetch---", data)
        setArticleDetail(data)
        console.log("---single article---", articleDetail)
      } else {
        console.log("error from the server")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {articleDetail && (
        <SingleArticleCard article={articleDetail} key={articleDetail.id} />
      )}
    </div>
  )
}
