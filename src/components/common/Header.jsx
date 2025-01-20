import { HEADER_LIST } from '../../utils/Helper'

const Header = () => {

  return (
    <>
      <div className='flex justify-between items-center p-5 md:p-10 bg-pink-300'>
        <div>
          <a href="#" className='text-3xl font-bold'>Logo</a>
        </div>
        <div className="max-[767.98px]:flex gap-5 justify-center items-center flex-col fixed md:relative z-[15] max-[767.98px]:w-full h-full top-0 left-0 bg-black md:bg-transparent transition-transform duration-700 ease-in-out">
          <div className='grid md:flex text-center gap-5'>
            {HEADER_LIST.map((obj, index) => (
              <a key={index} href={obj.link} className='mx-4 text-xl font-bold text-white hover:text-green-500 md:hover:text-black transition-all duration-500 ease-in-out'>{obj.title}</a>
            ))}
          </div>
          <div className='md:hidden'>
            <button className='text-xl font-bold text-white bg-green-800 border-[3px] border-black rounded px-3 py-2 hover:bg-white hover:text-green-800 hover:border-green-600 transition-all duration-500 ease-in-out'>Learn More</button>
          </div>
        </div>
        <div className='hidden md:block'>
          <button className='text-xl font-bold text-white bg-green-800 border-[3px] border-black rounded px-3 py-2 hover:bg-white hover:text-green-800 hover:border-green-600 transition-all duration-500 ease-in-out'>Learn More</button>
        </div>
        <div className='relative z-[15] md:hidden'>
          <p className='text-white'>Toggle</p>
        </div>
      </div>
    </>
  )
}

export default Header