
import { NextResponse } from "next/server"

export async function GET(){
    return NextResponse.json("/api/details/1", { status: 301 })
}