import { useEffect } from "react"
import { useForm } from "react-hook-form"
import styles from '@/app/styles/input.module.scss'

interface InputProps {
  setSearch: (search: string) => void
}

const Form = ({setSearch,}: InputProps) => {

  const {watch, register} = useForm()

  useEffect(() => {
    watch((value) => setSearch(value.search));
  }, [watch]);

  return <input className={styles.input} {...register('search')} type="text" placeholder="Search..."/>
}

export default Form