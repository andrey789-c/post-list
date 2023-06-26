import { useGetCommentsQuery } from "@/app/store/post/post.api";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from '@/app/styles/comment.module.scss'
import CommentList from "@/app/components/CommentList";
import Link from "next/link";

const PostPage: NextPage = () => {

  const {query} = useRouter()
  const {data, isLoading} = useGetCommentsQuery(Number(query.id))

  return <div>
    <h1 className="title">Comments</h1>
    <Link className={styles.back__arrow} href={'/'}>Back</Link>
    {isLoading && <div>Loading...</div>}
    {data && <CommentList comments={data}/>}
  </div>
}

export default PostPage