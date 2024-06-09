import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isIgnoredRoute = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
])

export default clerkMiddleware((auth, req) => {
    if (isIgnoredRoute(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};