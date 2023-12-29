// eslint-disable-next-line react/prop-types
const PostContent = ({ post }) => {
  return (
    <>
      <h2>Post of users : {post?.length}</h2>
      <p>{post?.body}</p>
    </>
  );
};

export default PostContent;
