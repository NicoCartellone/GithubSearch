import SearchIcon from '@/components/icons/SearchIcon'

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({ getUser }: Props) => {
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = e.currentTarget.username.value
    if(!username) return
    await getUser(username)
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className='flex flex-wrap items-center gap-2 p-4 dark:bg-[#1F2A48] rounded-xl mb-6 bg-[#F5F9FF] shadow-md dark:shadow-none'
    >
    <span className='min-w-[20px]'>
      <SearchIcon className='fill-[#0078FB]'/>
    </span>
    <input
      name='username' 
      type="text" 
      placeholder='Search Github username...'
      className='flex-1 p-2 dark:text-white bg-transparent rounded-lg focus:outline-none dark:placeholder:text-white h-14 focus:ring-2 focus:ring-[#0079FE]  placeholder:text-[#babfc5]'
    />
    <button className='px-4 py-4 font-bold text-white bg-[#0079FE] rounded-lg btn-full-sm'>Search</button>
  </form>
  )
}
export default FormSearchUser