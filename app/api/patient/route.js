
import mongoose from "mongoose";
import {connectionSrt} from "lib/db";
import { NextResponse } from "next/server"

export async function GET() {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(connectionSrt);
        }
        return NextResponse.json({ result: true });
    } catch (error) {
        console.error("Database connection error:", error);
        return NextResponse.json({ result: false, error: "Database connection failed" });
    }
}
