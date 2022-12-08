import React from "react"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { NewsArticle } from "../types"
import SingleArticleCard from "./SingleArticleCard"

export default function ArticleDetailPage() {
  const params = useParams()
  console.log("---params---", params)
  console.log("---articleid---", params.id)

  const [articleDetail, setArticleDetail] = useState<NewsArticle | null>(null)

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
      } else {
        console.log("error from the server")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="m-5">
        {articleDetail && <h1 className="mr-5 ml-5">{articleDetail.title}</h1>}
      </div>
      <div>
        {articleDetail && (
          <SingleArticleCard singleArticleDetail={articleDetail} />
        )}
      </div>
    </>
  )
}
