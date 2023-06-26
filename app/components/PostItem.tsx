import Link from "next/link"
import { IPost } from "../models/Post"
import styles from '@/app/styles/post.module.scss'

interface PostItemProps {
  post: IPost
}

const PostItem = ({post}: PostItemProps) => { 
  return <div className={styles.post} key={post.id}>
    <Link href={{ pathname: '/post/[id]', query: { id: post.id } }} className={styles.post__title}>{post.title}</Link>
    <div className={styles.post__body}>{post.body}</div>
  </div>
}

export default PostItem
