

const Modal = ({isShowForm,setIsShowForm,register,handleSubmit,submit,reset,setIsUserIdToEdit,isUserIdToEdit,errors}) => {

const HandleClickCloseModal=()=>{
  setIsShowForm((isShowForm)=>!isShowForm)
  reset({
    first_name:"",
    last_name:"",
    birthday:"",
    password:"",
    email:"",
    image_url:"",
  
  }

  )
setIsUserIdToEdit(null)
}

  return (
    
<section className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowForm?'opacity-100 visible':'opacity-0 invisible'}`}>

<form onSubmit={handleSubmit(submit)} className="bg-white p-4 grid gap-4 w-[300px] relative ">

<h3 className="text-2xl  font-bold">
{isUserIdToEdit?"Editar Usuario":"Nuevo usuario"}
</h3>
<div className="grid gap-1">
<label className="text-xs font-semibold" htmlFor="first_name">Nombre <span className="text-red-500">*</span></label>
<input className="border-[1px] rounded-sm bg-gray-100 p-1" id="first_name" type="text" {...register('first_name',{
  required:"este campo es requerido"
} )} />
</div>
<span className="text-red-500 text-center text-xs">{errors.first_name && errors.first_name.message}</span>
<div className="grid gap-1">

<label className="text-xs font-semibold" htmlFor="last_name">Apellido<span className="text-red-500">*</span></label>
<input className='border-[1px] rounded-sm bg-gray-100 p-1' id="last_name" type="text" {...register('last_name' ,{
  required:"este campo es requerido"
})} />
</div>
<span className="text-red-500 text-center text-xs">{errors.last_name && errors.last_name.message}</span>

<div className="grid gap-1">
<label className="text-xs font-semibold" htmlFor="email">correo<span className="text-red-500">*</span></label>
<input className='border-[1px] rounded-sm bg-gray-100 p-1' id="email" type="email" {...register('email',
{
  pattern:{
    value:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    message:"formato email no es valido"
}
})} />
</div>
<span className="text-red-500 text-center text-xs">{errors.email && errors.email.message}</span>
<div className="grid gap-1">
<label className="text-xs font-semibold" htmlFor="password">Contraseña<span className="text-red-500">*</span></label>
<input className='border-[1px] rounded-sm bg-gray-100 p-1' id="password" type="password" {...register('password',{
  maxLength:{
    value:6,
    message:"maximo 6 caracteres"
  },
  minLength:{
    value:4,
    message:"minimo 4 caracteres"
  }
}

)}/>
</div>
<span className="text-red-500 text-center text-xs">{errors.password && errors.password.message}</span>

<div className='grid  gap-1'>

<label className="text-xs font-semibold" htmlFor="birthday">cumpleaños</label>

<input className='border-[1px] rounded-sm bg-gray-100 p-1' id="birthday" type="date" {...register('birthday')} />
</div>

<div className='grid  gap-1'>

<label className="text-xs font-semibold" htmlFor="image_url">Url_image</label>

<input className='border-[1px] rounded-sm bg-gray-100 p-1'
id="image_url"
type="text" {...register('image_url',
{
  pattern:{
    value:/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    message:"formato URL_image no es valido"
}
}

)} />

<span className="text-red-500 text-center text-xs">{errors.image_url && errors.image_url.message}</span>
</div>

<i onClick={HandleClickCloseModal} className='bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer'></i>
<button className='bg-purple-p/90 text-white p-2 hover:bg-purple/90 transition-colors text-sm '>{isUserIdToEdit?"Actualizar Usuario":"agregar nuevo usuario"} </button>
 
</form>

</section>

  )
}

export default Modal