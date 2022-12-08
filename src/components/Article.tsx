import React from "react"
import { Card, Button } from "react-bootstrap"
import { NewsArticle } from "../types"

interface NewsArticleProps {
  article: NewsArticle
}

export default function Article({ article }: NewsArticleProps) {
  return (
    <Card style={{ width: "18rem" }} className="mb-5">
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{article.title}</Card.Title>
        {/* <Card.Text>
          {article.summary}
        </Card.Text> */}
        <Button variant="info">Read More</Button>
      </Card.Body>
    </Card>
  )
}
