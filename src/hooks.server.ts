// src/hooks.server.ts
import { adminAuth } from '$lib/server/admin';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // grab the cookie
  const sessionCookie = event.cookies.get('__session');

  // if there is no cookie, clear locals and move on
  if (!sessionCookie) {
    event.locals.userID = null;
    return resolve(event);
  }

  try {
    // true = check if cookie is revoked
    const decoded = await adminAuth.verifySessionCookie(sessionCookie, /* checkRevoked= */ true);
    event.locals.userID = decoded.uid;
    console.log('found user ID:', decoded.uid);
  } catch (err) {
    console.error('⚠️ session verification failed:', err);
    event.locals.userID = null;
  }

  return resolve(event);
};
