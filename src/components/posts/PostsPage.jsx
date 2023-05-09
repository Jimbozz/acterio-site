import React from "react";
import Layout from "../../layout/Layout";
import PostsList from "./PostsList";

function PostsPage() {
  return (
    <Layout>
      <h1 className="fw-bold">All blog posts</h1>
      <PostsList />
    </Layout>
  );
}

export default PostsPage;
