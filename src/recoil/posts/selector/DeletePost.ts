import React from "react";
import { useRecoilState } from "recoil";
import postsState from "../atom/Posts";

function useDeletePost() {
  const [posts, setPosts] = useRecoilState(postsState);

  function deletePost(id: number) {
    const newPosts = posts.filter((post) => post.id !== id);

    setPosts(newPosts);
  }

  return {
    deletePost,
  };
}

export default useDeletePost;
