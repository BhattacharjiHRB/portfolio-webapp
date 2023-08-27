
import Html5 from '../icons/html'
import Javascript from '../icons/javascript'
import IconBxlMongodb from '../icons/mongodb'
import Nextjs from '../icons/nextjs'
import Prisma from '../icons/prisma'
import IconReact from '../icons/react'
import Tailwindcss from '../icons/tailwind'
import IconTypescript from '../icons/typescript'



export default function Skill(){
    return(
        <section id='skill' className='w-full h-50 flex flex-col justify-center items-center p-20 line-clamp-3'>
            
        <h1 className='p-10 mb-5 text-cyan-500'>Skills</h1>
        <div  className=' grid grid-cols-4 max-md:grid-clos-2 max-sm:grid-cols-1 gap-7'>
          {/* React Card */}
          <div className='p-5 shadow-xl shadow-blue-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-blue-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <IconReact />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
            {/* NextJs Card */}
          <div className='p-5 shadow-xl shadow-zinc-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-zinc-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <Nextjs />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
            {/* TailwindCss Card */}
          <div className='p-5 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-sky-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <Tailwindcss />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>TailwindCss</h3>
              </div>
            </div>
          </div>

          <div className='p-5 shadow-xl shadow-yellow-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-yellow-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <Javascript />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
            {/* HTML Card */}
          <div className='p-5 shadow-xl shadow-orange-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-orange-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <Html5 />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-5 shadow-xl shadow-indigo-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-indigo-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <Prisma />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>Prisma</h3>
              </div>
            </div>
          </div>

          <div className='p-5 shadow-xl shadow-green-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-green-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <IconBxlMongodb />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className='p-5 shadow-xl shadow-blue-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-blue-400'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
               <IconTypescript />
              </div>
              <div className='flex flex-xol items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
        </div>

  </section>
    )
}