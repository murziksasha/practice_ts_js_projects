

import { useEffect, useState } from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { Archive } from "../Archive";
import { Footer } from "../Footer";
import { IPost, PostContext, postsForStart} from "../../utils/context";



function App() {
  const [posts, setPosts] = useState<IPost[]>(postsForStart(30))
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);


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

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <PostContext.Provider value={{
        posts: searchedPosts,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
        onAddPost: handleAddPost
      }}>
        <Header/>
        <Main/>
        <Archive onAddPost={handleAddPost} />
        <Footer />
      </PostContext.Provider>
    </section>
  );
}

export default App;

