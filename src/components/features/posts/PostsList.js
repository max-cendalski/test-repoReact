import './posts.css'
import { useSelector } from "react-redux";
import { selectAllPosts } from './postsSlice';
import AddPostForm from './AddPostForm';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderPosts = orderedPosts.map(post=> (
    <article className='post' key={post.id}>
      <h3>{post.title}</h3>
      <h4>{post.content.substring(0, 100)}</h4>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
  )

  return (
    <>
      <section id="posts-container">
      <AddPostForm />
        <h2>Posts</h2>
        {renderPosts}
      </section>
    </>
  )
}

export default PostsList
