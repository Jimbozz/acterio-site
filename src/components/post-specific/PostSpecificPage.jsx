import React from "react";
import Layout from "../../layout/Layout";
import PostSpecific from "./PostSpecific";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";

export default function PostSpecificPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1, { replace: true });
  };
  return (
    <Layout>
      <Button variant="link" onClick={handleClick}>
        <IoArrowBack /> Back
      </Button>
      <PostSpecific />
    </Layout>
  );
}
