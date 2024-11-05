import { NextRequest,NextResponse } from "next/server";

export function DELETE(req:NextRequest){
    return NextResponse.json({"status":200,"massage":"working great"});
}