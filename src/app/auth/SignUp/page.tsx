"use client";
import Link from "next/link";
import Image from "next/image";
import OAuthLogo from '../../../assets/Oauth_logo.png';
import SignInImg from '../../../assets/undraw_sign_up_n6im.svg';
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Login() {
  const { user } = useUser();
  const [isLaptop, setIsLaptop] = useState(false);

  // Realtime verifications to ensure that any requirements are being complied
  useEffect(() => {
    // Checking if is a Desktop Monitor Screen or a Laptop Screen
    setIsLaptop(window.matchMedia('(max-width: 1919px)').matches);

    // Redirects user whenever Auth0 provides the user logged in information
    if (user) {
      window.location.href = '/dashboard/Home';
    }
  }, [user]);

  return (
    <section className="flex flex-column justify-center items-center w-full h-screen px-40 py-32">
      <div className="flex flex-col justify-center bg-blued-purple p-24 w-1/2 rounded-l-xl h-full items-center">
        <p className="text-center text-5xl mb-6">Let's sign you Up!</p>
        <div className="flex flex-row justify-center mb-14">
          <Link className="text-xl underline" href="/auth/Login">Already have a account? Sign In</Link>
        </div>
        <div className="text-center">
          <div className="mb-14">
          <a className="text-lg bg-gray-blue px-20 py-4 rounded-lg" href="/api/auth/login?screen_hint=signup">Sign Up</a>
          </div>
          <div className="flex flex-col items-center">
            <p>Protected & Authenticated by OAuth</p>
            <Image
              src={OAuthLogo}
              width={100}
              height={100}
              alt="OAuth"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center grow bg-slate-300 p-3 w-1/2 rounded-r-xl h-full">
        <Image
          src={SignInImg}
          width={ isLaptop ? 400 : 600 }
          height={ isLaptop ? 400 : 600 }
          alt="Sign In Page"
        />
      </div>
    </section>
  );
}