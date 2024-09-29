"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default function Login() {

    useEffect(() => {
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          // since Firebase v9 and above service are imported when needed instad of being a namespace
          new firebaseui.auth.AuthUI(getAuth(app));
    
        ui.start("#firebaseui-auth-container", {
          signInSuccessUrl: "/dashboard/Home",
          signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            {
              provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              clientId:
                "1006672558365-p6jpr3b7r76kng93j6mrirh9pua5k2at.apps.googleusercontent.com",
            },
            {
              provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            },
            // leave for ANOTHER video
            // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
          ],
          // required to enable one-tap sign-up credential helper
          credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        });
      }, []);

    const loginSchema = z.object({
        email: z.string().email({ message: "Please insert a valid email" }),
        senha: z.string().min(8, { message: "Password should have at least 8 characters" }),
    });

    type LoginForm = z.infer<typeof loginSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const handleLogin = async (data: LoginForm) => {
        try {
            
        } catch (error) {
            let errorMessage = "Ocorreu um erro ao tentar fazer login. Tente novamente.";
            if (error instanceof Error && "code" in error) {
                switch ((error as any).code) {
                    case "auth/wrong-password":
                        errorMessage = "A senha digitada está incorreta.";
                        break;
                    case "auth/user-not-found":
                        errorMessage = "Não encontramos um usuário com este e-mail.";
                        break;
                    case "auth/invalid-email":
                        errorMessage = "O e-mail fornecido não é válido.";
                        break;
                    default:
                        errorMessage = "Erro desconhecido. Tente novamente.";
                        break;
                }
            }
            console.error("Login failed:", error);
        }
    };

    return (
        <section className="flex flex-row justify-center items-center w-full h-screen px-32 py-20">
            <div className="flex flex-row bg-blued-purple p-3 w-1/2 rounded-l-xl h-full">
                <p>Let's sign you in</p>
                <div className="flex flex-row">
                    <p>Welcome to Sales Scope</p>
                    <Link href={"./SignUp"}>Sign Up</Link>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} className="" type="text" id="email" />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="senha">Password</label>
                        <input {...register("senha")} className="" type="password" id="senha" />
                        {errors.senha && <p>{errors.senha.message}</p>}
                    </div>
                    <button type="submit">Login</button>
                </form>
                <StyledFirebaseAuth/>
            </div>
            <div className="bg-slate-200 p-3 w-1/2 rounded-r-xl h-full"></div>
        </section>
    );
}