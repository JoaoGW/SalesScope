"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Login() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      // Redirecionamento usando window.location
      window.location.href = '/dashboard/Home';
    }
  }, [user]);

  return (
    <section className="flex flex-row justify-center items-center w-full h-screen px-32 py-20">
      <div className="flex flex-row bg-blued-purple p-3 w-1/2 rounded-l-xl h-full">
        <p>Let's sign you in</p>
        <div className="flex flex-row">
          <p>Welcome to Sales Scope</p>
          <Link href="/SignUp">Sign Up</Link>
        </div>
      </div>
      <a href="/api/auth/login">Login</a>
      <div className="bg-slate-200 p-3 w-1/2 rounded-r-xl h-full"></div>
    </section>
  );
}  