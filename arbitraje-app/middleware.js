import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// MetroGuia es un sitio público: el middleware SOLO corre sobre /arbitraje y /login
// (ver matcher abajo). Todo lo demás ni pasa por aquí.
export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/arbitraje", request.url));
  }

  if (pathname.startsWith("/arbitraje") && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.href);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/arbitraje", "/arbitraje/:path*", "/login"],
};
