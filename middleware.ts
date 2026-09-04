import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SEO_SLUG_REDIRECTS } from "@/lib/seo/slug-redirects";

const CANONICAL_HOST = "www.nigeriaexpert.com";

function canonicalRedirect(request: NextRequest): NextResponse | null {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const proto =
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(":", "");

  const needsHostFix = hostname === "nigeriaexpert.com";
  const needsHttps = proto !== "https";

  if (!needsHostFix && !needsHttps) return null;

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";

  return NextResponse.redirect(url, 301);
}

export function middleware(request: NextRequest) {
  const hostRedirect = canonicalRedirect(request);
  if (hostRedirect) return hostRedirect;

  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const redirectPath = SEO_SLUG_REDIRECTS[pathname];
  if (redirectPath) {
    const url = new URL(redirectPath + request.nextUrl.search, request.url);
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
