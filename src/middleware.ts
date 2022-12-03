import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const slug = req.nextUrl.pathname.split("/").pop();

  const slugFetch = await fetch(`${req.nextUrl.origin}/api/short-link/${slug}`);

  if (slugFetch.status !== 404) {
    const result = await slugFetch.json();

    if (result?.data) {
      return NextResponse.redirect(result.data.url);
    }
  }
}

// Not sure why the plus needs to be at the end. Should work without it.
export const config = {
  matcher: "/l/:slug+",
};
