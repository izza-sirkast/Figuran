import connect from "@/db";
import Image from "@/models/Image";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        await connect()
        const images = await Image.find()
        return new NextResponse(JSON.stringify(images))
    } catch (error) {
        return new NextResponse('Error', {status:401})
    }
}

export async function POST(request : NextRequest){
    try {
        const { title, imageBase64 } = await request.json()
        await connect()
        await Image.create({title, imageBase64})
        return new NextResponse(JSON.stringify("Succesfully post new image"))
    } catch (error) {
        return new NextResponse('Error', {status:401})
    }
}