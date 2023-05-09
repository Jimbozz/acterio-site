import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostCard({ title, id, body, tags }) {
  return (
    <Card>
      {/* <Card.Header>Post ID: {id}</Card.Header> */}
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="one-line">{body}</Card.Text>
        <Link
          to={`/posts/${id}`}
          className="stretched-link card-link"
          variant="primary">
          View post
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted d-flex gap-1 bg-transparent">
        {tags.map((item, index) => {
          return <Badge key={index}>{item}</Badge>;
        })}
      </Card.Footer>
    </Card>
  );
}
