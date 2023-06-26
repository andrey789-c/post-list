import { IComment } from "../models/Comment"
import styles from '@/app/styles/comment.module.scss'

interface ICommentProps {
  comment: IComment
}

const CommentItem = ({comment}: ICommentProps) => {
  return <div className={styles.comment}>
      <div className={styles.comment__name}>{comment.name}</div>
      <div className={styles.comment__description}>{comment.body}</div>
      <div className={styles.comment__email}>{comment.email}</div>
  </div>
}

export default CommentItem