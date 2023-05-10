import Layout from "../../layout/Layout";
import PostSpecific from "./PostSpecific";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { IoArrowBack } from "react-icons/io5";

export default function PostSpecificPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1, { replace: true });
  };

  return (
    <Layout>
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
