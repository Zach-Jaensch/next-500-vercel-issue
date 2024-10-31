import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.url.endsWith("rewrite")) {
    request.nextUrl.pathname = "/throws";
    return NextResponse.rewrite(request.nextUrl);
  }
  return NextResponse.next();
}
