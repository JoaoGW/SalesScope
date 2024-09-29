"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { StyledFirebaseAuth } from "react-firebaseui";
import { auth, provider } from "../../../../firebase/clientApp";

const uiConfig = {
    signInSuccessUrl: "/dashboard/Home",
    signInOptions: [provider.providerId]
};

export default function Login() {
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
            const { email, senha } = data;
            await signInWithEmailAndPassword(auth, email, senha);
            console.log("logado");
        } catch (error) {
            let errorMessage = "Ocorreu um erro ao tentar fazer login. Tente novamente.";
            if (error instanceof Error && "code" in error) {
                switch ((error as any).code) {
                    case 'auth/wrong-password':
                        errorMessage = "A senha digitada está incorreta.";
                        break;
                    case 'auth/user-not-found':
                        errorMessage = "Não encontramos um usuário com este e-mail.";
                        break;
                    case 'auth/invalid-email':
                        errorMessage = "O e-mail fornecido não é válido.";
                        break;
                    default:
                        errorMessage = "Erro desconhecido. Tente novamente.";
                        break;
                }
            }
            console.error("Login failed:", error);
            alert(errorMessage);
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
                {auth && (
                    <div className="mt-4">
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                    </div>
                )}
            </div>
            <div className="bg-slate-200 p-3 w-1/2 rounded-r-xl h-full"></div>
        </section>
    );
}