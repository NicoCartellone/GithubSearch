import SearchIcon from '@/components/icons/SearchIcon'

const Home = () => {
  return (
    <>
      <form className='flex flex-wrap items-center gap-2 p-2 bg-[#1F2A48] rounded-xl'>
        <span className='min-w-[20px]'>
          <SearchIcon className='fill-[#0078FB]'/>
        </span>
        <input 
          type="text" 
          placeholder='Search Github username...'
          className='flex-1 p-2 text-white bg-transparent rounded-lg focus:outline-none placeholder:text-white h-14 focus:ring-2 focus:ring-[#0079FE]'
        />
        <button className='px-4 py-4 font-bold text-white bg-[#0079FE] rounded-lg'>Search</button>
      </form>
      <article>
        todo el contenido de la pagina
      </article>
    </>
  )
}
export default Home