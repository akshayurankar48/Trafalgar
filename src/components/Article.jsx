import React from 'react'

const Article = ({blog}) => {
  return (
    <>
    <div className='w-[350px] h-[512px] shadow-xl '>
        <div>
            <img className='rounded-t-2xl' src={blog.image} alt="" />
        </div>
        <h1 className='pt-5 text-2xl font-bold mx-6'>{blog.heading}</h1>

        <p className='pt-3 mx-7 text-base text-gray-400 font-light'>{blog.desc}</p>

        <div className='flex justify-start items-center '>
        <h2 className='text-lg font-semibold text-blue-400 mt-5 px-4' >Read more</h2>
        <svg className='mt-5' width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.37501 5.30357L11.9822 5.30357L9.65179 7.63393C9.33037 7.95536 9.33037 8.4375 9.65179 8.75893C9.97322 9.08036 10.4554 9.08036 10.7768 8.75893L14.4732 5.0625C14.7947 4.74107 14.7947 4.25893 14.4732 3.9375L10.7768 0.241071C10.4554 -0.0803579 9.97322 -0.080358 9.65179 0.241071C9.33037 0.5625 9.33037 1.04464 9.65179 1.36607L11.9822 3.69643L1.37501 3.69643C0.973222 3.69643 0.571436 4.01786 0.571436 4.5C0.571436 4.98214 0.973222 5.30357 1.37501 5.30357Z" fill="#4089ED"/>
</svg>

        </div>
    </div>
    </>
  )
}

export default Article