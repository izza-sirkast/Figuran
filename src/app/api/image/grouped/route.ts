import connect from "@/db";
import Image from "@/models/Image";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connect()
        const groupedImages = await Image.aggregate([
            {
                $group : {
                    _id : { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 },
                    data: { $push: "$$ROOT" }
                }
            }
        ])
        return new NextResponse(JSON.stringify(groupedImages))
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {status:401})
        
    }
}