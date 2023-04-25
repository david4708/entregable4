import React from 'react'


const Header = ({setIsShowForm}) => {


const handleClickShowModal=()=>{
setIsShowForm((isShowForm)=>!isShowForm)
    
}

  return (
    <header className=''>
    <h1 className='text-4xl font-bold font-Helvetica Neue pl-10  pt-10 py-0'>Usuarios</h1>
    <button onClick={handleClickShowModal} className='bg-purple-p/90 text-white p-2 mr-5 hover:bg-purple/90 transition-colors text-sm absolute right-0 mt-3'> <i className='bx bx-plus'></i> Crear nuevo usuario</button>
    </header>
  )
}

export default Header