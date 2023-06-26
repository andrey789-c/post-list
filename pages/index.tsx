import { IPost } from "@/app/models/Post";
import { useLazyGetPostsQuery } from "@/app/store/post/post.api";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from '@/app/styles/page.module.scss'
import PostList from "@/app/components/PostList";
import { useForm } from "react-hook-form";
import Form from "@/app/components/Input";

const Home: NextPage = () => {

  const [page, setPage] = useState(1)
  const [fetchPosts, {data, isLoading}] = useLazyGetPostsQuery({refetchOnFocus: true, refetchOnReconnect: true})
  const [posts, setPosts] = useState<IPost[]>([])
  const [countPage, setCountPages] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if(data) {
      setPosts(data?.apiResponse)
      const pages = data?.totalCount / 10 > 10 ? 10 : data?.totalCount / 10
      setCountPages(pages)
    }
  }, [data])

  useEffect(() => {
    fetchPosts(page)
  }, [page])

  return <div className={styles.container}>
    <h1 className={"title"}>Posts</h1>
    <Form setSearch={setSearch}/>
    {isLoading && <div>Loading...</div>}
    {posts && <PostList posts={posts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).length > 0 ? posts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())) : posts}/>}
    
    <ReactPaginate 
      className={styles.pages}
      pageLinkClassName={styles.pages__item}
      nextLinkClassName={styles.pages__item}
      previousLinkClassName={styles.pages__item}
      breakClassName={styles.pages__break}
      activeLinkClassName={styles.pages__active}
      disabledLinkClassName={styles.pages__disable}
      pageCount={countPage}
      onPageChange={(page) => setPage(page.selected + 1)}/>
  </div>
}

export default Home