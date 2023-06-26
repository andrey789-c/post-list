import { IComment } from "../models/Comment"
import styles from '@/app/styles/comment.module.scss'
import CommentItem from "./CommentItem"

interface ListProps {
  comments: IComment[]
}

const CommentList = ({comments}: ListProps) => {
  return <div className={styles.comment__list}>
    {comments?.map((item) => <CommentItem comment={item}/>)}
  </div>
}

export default CommentList