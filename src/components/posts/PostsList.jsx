import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/api";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PostCard from "./PostCard";
import Loading from "../common/Loading";
import AlertError from "../common/AlertError";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = API_URL;

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    getPosts();
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

  return (
    <>
      <Row xs={1} sm={3} className="g-4">
        {posts.map((post) => {
          const { id, title, body, tags } = post;
          return (
            <Col key={id}>
              <PostCard
                key={id}
                id={id}
                title={title}
                body={body}
                tags={tags}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
