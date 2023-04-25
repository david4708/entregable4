import React from 'react'

const UserCard = ({user,deleteUser,handleClickEdit}) => {
  return (
    <article className='h-full p-3 border-[2px]'>
    <div>
    
    <img className='w-[100px] aspect-[3/5] object-cover mx-auto rounded-md' src={user.image_url?user.image_url:"/images/noProfile.jpg"} alt="" />
    </div>
    <h3 className='text-[#0F0F2D] font-Helvetica Neue font-medium text-2xl'>{user.first_name} {user.last_name}</h3>
    <ul>
  
   <li>
   <h4 className='text-[#D3D3D3] font-light text-xs mt-3'>CORREO</h4>
   <span className='font-normal text-[16px]'>{user.email}</span>
   
   </li>

    <li>
    <h4 className='text-[#D3D3D3] font-light text-xs mt-2'>CUMPLEAÑOS</h4>
    <span className='font-normal text-[16px]'>
    <i className='cursor-pointer text-xl bx bx-gift'></i>
    {user.birthday}
    </span>
    </li>
    </ul>
    <div className='bottom-2  w-ful gap-3 flex place-content-end'>
    <button className='place-content-item-center py-auto' onClick={()=>deleteUser(user.id)}>

    <i className='bg-[#D85D5D] text-white text-x w-[25px] h-[25px] top-0 bx bxs-trash'></i>
    </button>

    <button className='right-0 place-content-item-center' onClick={()=>handleClickEdit(user)}>
    <i className='text-x w-[25px] h-[25px] border-solid border-black right-0 top-0 bx bx-pencil bg-gray-300/60'></i>
    </button>
    </div>
    
    </article>
  )
}

export default UserCard