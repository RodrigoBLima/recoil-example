import React from "react";
import { useRecoilState } from "recoil";
import postsState from "../../../../recoil/posts/atom/Posts";

export default function Form() {
  const [posts, setPosts] = useRecoilState(postsState);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleCreatePost() {
    const post = {
      title,
      description,
      id: Math.ceil(Math.random() * (9999 - 1))
    };

    const newPosts = [...posts, post];
    setPosts(newPosts);
    handleClearForm();
  }

  function handleClearForm() {
    setTitle("");
    setDescription("");
  }

  return (
    <section id="posts-form-container">
      <input
        type="text"
        placeholder="Digite o titulo"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <textarea
        name="post-textarea"
        id=""
        cols={30}
        rows={3}
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />

      <button type="button" onClick={() => handleCreatePost()}>
        Criar novo post
      </button>
    </section>
  );
}
