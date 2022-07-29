import { selector } from "recoil";
import postsState from "../atom/Posts";

const countPosts = selector({
  key: "countPosts",
  get: ({ get }) => {
    const posts = get(postsState);

    return posts.length;
  },
});

export default countPosts;
