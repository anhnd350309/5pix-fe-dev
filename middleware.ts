// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { getToken } from 'next-auth/jwt'

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
//   console.log('token', token)
//   if (req.nextUrl.pathname.startsWith('/admin')) {
//     if (!token) {
//       return NextResponse.redirect(new URL('/auth/login', req.url))
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// }