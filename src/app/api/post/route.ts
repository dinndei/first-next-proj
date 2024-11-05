import { NextRequest,NextResponse } from "next/server";

export function POST(req:NextRequest){
    return NextResponse.json({"status":200,"massage":"working great"});
}