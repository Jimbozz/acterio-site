import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants/api";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Loading from "../common/Loading";
import AlertError from "../common/AlertError";

export default function PostSpecific() {
  let { id } = useParams();
  const url = API_URL + `/${id}`;
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setPost(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [url]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <AlertError>
        There was an error. Please reload the page or contact support.
      </AlertError>
    );
  }

  const { title, body, tags, reactions, userId } = post;

  return (
    <Container className="content-width py-5">
      <h1 className="fw-bold">{title}</h1>
      <div className="d-flex gap-1">
        {tags?.map((item, index) => {
          return <Badge key={index}>{item}</Badge>;
        })}
      </div>
      <div className="d-flex gap-2 mt-2">
        <small>Reactions: {reactions}</small>
        <small>Post ID: {id}</small>
        <small>User ID: {userId}</small>
      </div>
      <p className="mt-5">{body}</p>
    </Container>
  );
}
