import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, FIREBASE_PROJECT_ID } from "$env/static/private";
import pkg from 'firebase-admin';
import { get } from "svelte/store";

try{
    pkg.initializeApp({
        credential: pkg.credential.cert({
            projectId: FIREBASE_PROJECT_ID,
            clientEmail: FIREBASE_CLIENT_EMAIL,
            privateKey: FIREBASE_PRIVATE_KEY,// Ensure newlines are correctly formatted
        }),
    });
} catch (err: any) {
    if (!/already existst/u.test(err.message)) {
        console.error('Firebase Admin SDK initialization error:', err.stack);
    }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
