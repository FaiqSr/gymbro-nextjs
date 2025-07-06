import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ data: "https://plus.unsplash.com/premium_photo-1750343360238-b6861fc1f95b?q=80&w=418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" });
}

export async function PUT(request: NextRequest) {
  NextResponse.json({ data: "test" });
}
