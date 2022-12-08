import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { NewsArticle } from "../types"

interface SingleNewsArticleProps {
  articledetail: NewsArticle
  // id: number
  // title: string
  // url: string
  // imageUrl: string
  // newsSite: string
  // summary: string
  // publishedAt: Date
  // updatedAt: Date
  // featured: boolean
  // launches: any[]
  // events: any[]
}

export default function SingleArticleCard({
  articledetail
}: SingleNewsArticleProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={articledetail.imageUrl} />
      <Card.Body>
        <Card.Title>{articledetail.title}</Card.Title>
        <Card.Text>{articledetail.summary}</Card.Text>
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
