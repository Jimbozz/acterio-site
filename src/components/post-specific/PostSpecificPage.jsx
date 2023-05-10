import Layout from "../../layout/Layout";
import PostSpecific from "./PostSpecific";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { IoArrowBack } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

export default function PostSpecificPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1, { replace: true });
  };

  return (
    <Layout>
      <Helmet>
        <title>{`Acterio-site | Post: ${id}`}</title>
      </Helmet>
      <Button
        className="link-primary d-flex align-items-center"
        variant="link"
        onClick={handleClick}>
        <IoArrowBack /> Back
      </Button>
      <PostSpecific />
    </Layout>
  );
}
