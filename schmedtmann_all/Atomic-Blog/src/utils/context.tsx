import { faker } from "@faker-js/faker";
import { createContext, useContext, useState } from "react";


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

const PostContext = createContext<{
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

interface IPropsPostProvider {
  children: React.ReactNode;
}

export default function PostProvider({children}: IPropsPostProvider) {
  const [posts, setPosts] = useState<IPost[]>(postsForStart(30))
  const [searchQuery, setSearchQuery] = useState("");


  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: IPost) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider value={{
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
      onAddPost: handleAddPost
    }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if(context === undefined) throw new Error('PostContext was used outside of the PostProvider!')
  return context;
}