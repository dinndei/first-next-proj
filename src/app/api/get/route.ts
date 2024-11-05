import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const posts:postApi[]=Array.from({length:30}).map((_,index)=>{
        return{
            id:index+1,
            title:`title ${index}`,
            body:`body ${index}`
        }
    })
    return NextResponse.json({"status":200,"massage":"working great","posts":posts});
}