import React from "react"
import { Card, Button } from "react-bootstrap"
import { NewsArticle } from "../types"
import { useNavigate } from "react-router-dom"

interface NewsArticleProps {
  article: NewsArticle
}

export default function Article({ article }: NewsArticleProps) {
  const navigate = useNavigate()
  return (
    <Card style={{ width: "18rem" }} className="mb-5">
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{article.title}</Card.Title>
        <Button
          variant="info"
          onClick={() => navigate("/articles/" + article.id)}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  )
}
