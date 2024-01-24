import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1 className="text-red-600">Blog page</h1>
      <h3>Dynamic value: {id}</h3>
    </div>
  );
};

export default Blog;
