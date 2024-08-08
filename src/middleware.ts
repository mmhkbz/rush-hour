import {NextRequest, NextResponse} from 'next/server'
import {COOKIE_KEYS} from './configs'

export function middleware(req: NextRequest) {
  const [access_token, refresh_token] = [
    req.cookies.get(COOKIE_KEYS.ACCESS_TOKEN),
    req.cookies.get(COOKIE_KEYS.REFRESH_TOKEN),
  ]

  if (!access_token && !refresh_token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/workspace/:path*'],
}
