"use client"

import React, {useState, useEffect} from 'react'

type Props = {}

export default function GalleryShow({}: Props) {
    const [gallery, setGallery] = useState<Image[]>([])

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/image", {method:"GET"})
                if(res.ok){
                    setGallery(await res.json())
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchGallery()
    },[])


    console.log(gallery)
  return (
    <>
        {gallery.map(image => {
            return (
                <img key={image._id} src={image.imageBase64} alt={image.title} className='mb-6 h-44'/>
            )
        })}
    </>
  )
}