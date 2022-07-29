import { atom } from "recoil";

interface Post {
  title: string;
  description: string;
  id: number
}

const postsState = atom({
  key: "postsState",
  default: [] as Post[],
});

export default postsState;
