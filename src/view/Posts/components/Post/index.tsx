import React from "react";
import useDeletePost from "../../../../recoil/posts/selector/DeletePost";

interface Props {
  title: string;
  description: string;
  id: number;
}

function Post({ title, description, id }: Props) {
  const { deletePost } = useDeletePost();

  return (
    <div id="posts-card-container">
      <p>Titulo: {title}</p>
      <span>Descrição: {description}</span>

      <button type="button" onClick={() => deletePost(id)}>
        Deletar
      </button>
    </div>
  );
}

export default Post;
