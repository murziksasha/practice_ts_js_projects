import { faker } from "@faker-js/faker";
import { createContext } from "react";


export interface IPost {
  title: string;
  body: string;
}

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export function postsForStart(lengthNum: number) {
  return  Array.from({ length: lengthNum }, () => createRandomPost())
}

export const PostContext = createContext<{
  posts: IPost[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onAddPost: (post: IPost) => void;
}>({
  posts: [],
  onClearPosts: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  onAddPost: () => {}, 
});