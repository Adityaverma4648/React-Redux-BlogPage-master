import React from 'react'

const CreatePostModal = () => {
  return (
    <div className='w-screen h-screen bg-black/50 backdrop-lg'>
                <div className='w-1/2 h-3/4 flex justify-center items-center bg-white' >
                    <form action="/post/create" className='w-100 h-100 flex flex-col justify-center items-center'>
                         <div>
                            <label htmlFor=""></label>
                         </div>
                    </form>
                </div>
    </div>
  )
}

export default CreatePostModal