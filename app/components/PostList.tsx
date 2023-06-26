import { IPost } from "../models/Post"
import styles from '@/app/styles/post.module.scss'
import PostItem from "./PostItem"

interface ListProps {
  posts: IPost[]
}

const PostList = ({posts}: ListProps) => {
  return <div className={styles.list}>
    {posts.map((item) => <PostItem post={item}/>)}
  </div>
}

export default PostList