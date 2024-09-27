"use client"
import Link from "next/link";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { startTransition } from "react";
import GoogleSignIn from "@/components/GoogleSignIn/googleSignIn";

export default function Login() {
    const login = z.object({
        email: z.string().email({ message: "Please insert a validade mail" }),
        senha: z.string().min(8, { message: "Password should have at least 8 characters" })
    });
    type LoginForm = z.infer<typeof login>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(login),
    });

    return (
        <section className="flex flex-row justify-center items-center w-full h-screen px-32 py-20">
            <div className="flex flex-row bg-blued-purple p-3 w-1/2 rounded-l-xl h-full">
                <p>Let's sign you in</p>
                <div className="flex flex-row">
                    <p>Welcome to Sales Scope</p>
                    <Link href={"./SignUp"}>Sign Up</Link>
                </div>
                <form onSubmit={handleSubmit((data) => {
                    startTransition(() => {
                        try{

                        }catch(exception){

                        }
                    })
                })}>
                    <div>
                        <label htmlFor="user">Username</label>
                        <input className="" type="text" id="user"/>
                    </div>
                    <div>
                        <label htmlFor="pass">Password</label>
                        <input className="" type="password" id="pass"/>
                    </div>
                </form>
                <div>
                    <GoogleSignIn/>
                </div>
            </div>
            <div className="bg-slate-200 p-3 w-1/2 rounded-r-xl h-full"></div>
        </section>
    );
}