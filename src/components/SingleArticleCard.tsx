import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { NewsArticle } from "../types"

interface SingleNewsArticleProps {
  article: NewsArticle
}

export default function SingleArticleCard({ article }: SingleNewsArticleProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.summary}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}
