import {useMemo, useState } from 'react';
import styles from './Archive.module.scss';
import {postsForStart, usePosts } from '../../utils/context';

interface ArchiveProps {
  
}

export const Archive = ({}: ArchiveProps) => {
    // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
    const {onAddPost, posts: myPosts} = usePosts();
    const [posts] = useState(() => postsForStart(1000));

  const [showArchive, setShowArchive] = useState(false);

  
  const archiveOptions = useMemo(() =>{
    return {
    show: false,
    title: 'Post archive in addition to main posts'
  }}, []);



  return (
    <aside>
      <h1>{archiveOptions.title} = {myPosts.length} and {posts.length} archived posts</h1>
      <br />
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function createRandomPost(): any {
  throw new Error('Function not implemented.');
}
