import React from "react"
import { Card, Button } from "react-bootstrap"
import { NewsArticle } from "../types"
import Moment from "react-moment"
import { useNavigate } from "react-router-dom"

interface SingleNewsArticleProps {
  singleArticleDetail: NewsArticle
}

export default function SingleArticleCard({
  singleArticleDetail
}: SingleNewsArticleProps) {
  const navigate = useNavigate()
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "55rem" }}>
        <Card.Text className="d-flex justify-content-around mt-3">
          <div>
            <span>Published on: </span>
            <Moment format="DD/MM/YYYY">
              {singleArticleDetail.publishedAt}
            </Moment>
          </div>

          <div>
            <span>Updated on: </span>
            <Moment format="DD/MM/YYYY">{singleArticleDetail.updatedAt}</Moment>
          </div>
        </Card.Text>
        <Card.Img variant="top" src={singleArticleDetail.imageUrl} />
        <Card.Body>
          <Card.Text>{singleArticleDetail.summary}</Card.Text>
        </Card.Body>
        <Card.Body></Card.Body>

        <Card.Body className="d-flex justify-content-around">
          <>
            <Button variant="info" onClick={() => navigate("/")}>
              Back To Home
            </Button>
          </>
        </Card.Body>
      </Card>
    </div>
  )
}
