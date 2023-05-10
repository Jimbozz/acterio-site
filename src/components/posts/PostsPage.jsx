import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";
import PostsList from "./PostsList";

export default function PostsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Acterio-site | Posts</title>
      </Helmet>
      <h1 className="fw-bold fs-3 mb-4 pt-5">All blog posts</h1>
      <PostsList />
    </Layout>
  );
}
