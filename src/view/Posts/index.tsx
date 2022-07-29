import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import postsState from "../../recoil/posts/atom/Posts";
import countPosts from "../../recoil/posts/selector/CountPosts";

import Form from "./components/Form";
import Post from "./components/Post";

function PostsContainer() {
  const [posts] = useRecoilState(postsState);
  const totalPosts = useRecoilValue(countPosts)

  return (
    <div id="posts-container" className="container-fluid">
      <header>
        <h3>Blog</h3>
        
      </header>

      <Form />

      <section className="posts-list">
        <h3>Posts</h3>
        <h5>Total de posts - {totalPosts}</h5>

        {posts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </section>
    </div>
  );
}
export default PostsContainer;
