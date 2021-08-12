import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";
import Post from "../Post/Post";

const Posts = (arrayOfPosts) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  console.log("pouet", globalInformations);

  return (
    <>
      {globalInformations.posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};

export default Posts;