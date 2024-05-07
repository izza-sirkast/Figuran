"use client"

import React, {useState, useEffect} from 'react'

type Props = {}

export default function GalleryShow({}: Props) {
    const [gallery, setGallery] = useState<ImageInADate[]>([])

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/image/grouped", {method:"GET"})
                if(res.ok){
                    setGallery(await res.json())
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchGallery()
    },[])


    const galleryOfTheDate = (galleryInDate : ImageInADate) => (
        <div className='mb-10' key={galleryInDate._id}>
            <p>{galleryInDate._id}</p>
            <div className='flex flex-wrap'>
                {galleryInDate.data.map(img => {
                    return (
                        <img key={img._id} src={img.imageBase64} className='h-36 mr-2 mb-2'>
                        </img>
                    )
                })}
            </div>
        </div>
    )

  return (
    <>
        {gallery.map((galleryInDate : ImageInADate) => {
            return (
                <div className='mb-10' key={galleryInDate._id}>
                    <p>{galleryInDate._id}</p>
                    <div className='flex flex-wrap'>
                        {galleryInDate.data.map(img => {
                            return (
                                <img key={img._id} src={img.imageBase64} className='h-36 mr-2 mb-2'>
                                </img>
                            )
                        })}
                    </div>
                </div>
            )
        })}
    </>
  )
}