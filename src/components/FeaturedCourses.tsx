'use client'
import Link from 'next/link'
import courseData from '../data/music_courses.json' 
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}


function FeaturedCourses() {
   const featuredCourses=  courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base text-teal-600  font-semibold tracking-wide uppercase' >FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl '>Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course:Course)=>(
                    
                       <div key={course.id} className="flex justify-center font-white-500">
                       <BackgroundGradient className='flex flex-col rounded-[22px] bg-slate-300 dark:bg-zinic-900 overflow-hidden h-full max-w-sm ' >
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-frow' >
                                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>{course.title }</p>

                                <p className='text-sm dark-neutral-400 flex-grow font-semibold text-slate-950 ' >{course.description }</p>
                                <Link href={`/courses/${course.slug}`}>
                                    Learn More
                                </Link>

                            </div>
                         </BackgroundGradient>
                       </div>
                    ))}
            </div>
        </div>
        <div className='mt-20 text-center '>

            <Link href={"/courses"} className="text-white bg-gradient-to-r from-cyan-300 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >
                View All Courses
            </Link>

        </div>
    </div>
  )
}

export default FeaturedCourses

// className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 '




{/* <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cyan to Blue</button> */}
