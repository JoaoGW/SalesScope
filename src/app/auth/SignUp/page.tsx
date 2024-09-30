"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { startTransition } from "react";

export default function SignUp() {
    const signupSchema = z.object({
        email: z.string().email({ message: "Please insert a valid email" }),
        senha: z.string().min(8, { message: "Password should have at least 8 characters" }),
        username: z.string().min(3, { message: "Username should have at least 3 characters" }),
    });
    type SignUpForm = z.infer<typeof signupSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>({
        resolver: zodResolver(signupSchema),
    });

    return (
        <section className="flex flex-row justify-center items-center w-full h-screen px-32 py-20">
            <div className="flex flex-row bg-blued-purple p-3 w-1/2 rounded-l-xl h-full">
                <p>Let's get you signed up</p>
                <div className="flex flex-row">
                    <p>Already have an account?</p>
                    <Link href={"./Login"}>Login</Link>
                </div>
                <form onSubmit={handleSubmit((data) => {
                    startTransition(() => {
                        try {
                            // Handle sign-up logic here
                        } catch (exception) {
                            // Handle exceptions
                        }
                    });
                })}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input className="" type="text" id="username" {...register("username")} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="" type="email" id="email" {...register("email")} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="pass">Password</label>
                        <input className="" type="password" id="pass" {...register("senha")} />
                        {errors.senha && <p>{errors.senha.message}</p>}
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="bg-slate-200 p-3 w-1/2 rounded-r-xl h-full"></div>
        </section>
    );
}