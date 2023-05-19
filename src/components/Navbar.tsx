import SunIcon from '@/components/icons/SunIcon'

const Navbar = () => {
  return (
    <header className='flex items-center mb-10 space-x-2'>
      <h1 className='flex-grow text-3xl font-bold text-white'>devfinder</h1>
     
        <span className="text-white uppercase">light</span>
        <button>
          <SunIcon width={25} className='fill-white'/>
        </button>
      
    </header>
  )
}
export default Navbar