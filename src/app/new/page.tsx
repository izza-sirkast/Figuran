"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

export default function NewForm({}: Props) {
    const [title, setTitle] = useState("")
    const [imageBase64, setImageBase64] = useState("")
    
    const router = useRouter()

    function handleChangeImageInput(e : React.ChangeEvent<HTMLInputElement>){
        if(e.target && e.target.files && e.target.files[0]){
            const fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = () => {
                const imageB64 = fileReader.result?.toString()
                setImageBase64(imageB64 || "")
            }
        }else if(e.target && e.target.files && e.target.files[0] == undefined){
            setImageBase64("")
        }
    }

    async function submitImageForm(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()

        if(imageBase64 === ""){
            return alert("Please select image first ...")
        }

        if(title === ""){
            return alert("Please fill image title form ...")
        }

        if(confirm("Are you sure want to save this image?")){
            try {
                const uploadNewImage = await fetch("http://localhost:3000/api/image", {
                    method : "POST",
                    headers : {'Content-Type' : 'application/json'},
                    body : JSON.stringify({
                        title,
                        imageBase64
                    })
                })
                router.push('/')
            } catch (error) {
                return alert("Failed save new image, ERROR : "+error)
            }
        }
    }

  return (
    <form className='p-5'>
        <h1 className='text-2xl mb-3'>New Image</h1>

        <label htmlFor="title" className='block'>Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='border border-black rounded-md px-2' placeholder='Image title' id='title' />

        <label htmlFor="image" className='block mt-3'>Image</label>
        {imageBase64 && <img src={imageBase64} alt="uploaded image preview" className='h-52 mb-3' /> }
        <input type="file" onChange={handleChangeImageInput} accept='.jpg, .jpeg, .png' className='' id='image' />

        <button onClick={submitImageForm} className='block mt-9 border border-black rounded-md hover:bg-gray-100 px-2'>Submit</button>
    </form>
  )
}