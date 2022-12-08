import React from "react"
import { Card } from "react-bootstrap"
import { NewsArticle } from "../types"

interface SingleNewsArticleProps {
  singleArticleDetail: NewsArticle
}

export default function SingleArticleCard({
  singleArticleDetail
}: SingleNewsArticleProps) {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "55rem" }}>
        <>
          {/* <div>First Published {singleArticleDetail.publishedAt}</div> */}
          {/* <div>First Published: {singleArticleDetail.publishedAt}</div> */}
        </>
        <Card.Img variant="top" src={singleArticleDetail.imageUrl} />
        <Card.Body>
          <Card.Text>{singleArticleDetail.summary}</Card.Text>
        </Card.Body>

        <Card.Body className="d-flex justify-content-around">
          <>
            <div>Card Link</div>
            <div>Another Link</div>
          </>
        </Card.Body>
      </Card>
    </div>
  )
}
