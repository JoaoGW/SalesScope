import NextAuth from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";
import { JWT } from "../../lib/firekeys";

// Inicialize o Firebase Admin SDK (no servidor)
initializeApp({
    credential: cert(require("../../../lib/firebaseAdmin.json")),
});

export default NextAuth({
    providers: [], // Você pode usar o Firebase para autenticar com outros provedores.
    adapter: FirestoreAdapter(getFirestore()),
    secret: JWT
});