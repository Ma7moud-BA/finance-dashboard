import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// in the newest version of clerk all routes are considered to be public so we have to protect the routes manually
const isProtectedRoute = createRouteMatcher(["/"]);
export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) auth().protect();
	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
