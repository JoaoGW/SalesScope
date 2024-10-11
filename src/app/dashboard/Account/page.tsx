"use client"
import DashboardHeader from "@/components/Dashboard Header/dashHeader";
import MenuLateral from "@/components/Menu/menuLateral";
import Image from "next/image";
import { LoadingSpinner } from "@/components/LoadingSpinners/Spinners";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Mail, Github, Pen, Trash2, BadgeCheck } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";

export default function AccountDashboard() {
    // For the authenticated user
    const { user, error, isLoading } = useUser();

    // Possible outputs while page is not completely loaded and checked
    if (isLoading) { return <LoadingSpinner /> }
    if (error) { return <p>{error.message}</p> }

    // Checks how the user has authenticated so it shows the corresponding badge
    const checkProvider = () => {
        const provider = user?.sub?.split('|')!;
        if (provider[0] === 'auth0') {
            return <div className="flex flex-row items-center bg-red-700 p-3 pl-5 rounded-md w-4/6"><Mail className="mr-2" /><p className="text-lg">Auth via Email</p></div>
        } else if (provider[1] === 'google-oauth2') {
            return <div className="flex flex-row items-center bg-blue-500 p-3 pl-5 rounded-md w-4/6"><FaGoogle className="mr-2" /><p className="text-lg">Auth via Google</p></div>
        } else {
            return <div className="flex flex-row items-center bg-black p-3 pl-5 rounded-md w-4/6"><Github className="mr-2" /><p className="text-lg">Auth via GitHub</p></div>
        }
    }

    return (
        <div>
            <MenuLateral />
            <main className="ml-36 pl-4 pr-10 py-10 h-screen">
                {user &&
                    <div>
                        <DashboardHeader />
                        <section className="flex flex-col mt-8">
                            <div className="flex flex-row">
                                <div className="flex flex-row justify-between bg-slate-800 w-full mb-5 rounded-lg p-5">
                                    <div className="flex flex-row w-2/3">
                                        <Image
                                            src={user.picture!}
                                            width={200}
                                            height={200}
                                            alt="User Profile Image"
                                            className="border-4 border-purple rounded-full ml-3"
                                        />
                                        <div className="flex flex-col justify-center ml-8">
                                            <p className="text-2xl font-bold mb-2 truncate">{user.name}</p>
                                            <p className="text-lg mb-6">{user.email}</p>
                                            {checkProvider()}
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/3 p-5 items-center justify-center">
                                        {!user.email_verified ?
                                            <button type="button" className="flex flex-row bg-lime-700 px-10 py-2 rounded-3xl w-2/3 mb-2 font-bold"><Mail className="mr-2" />Verify Email</button>
                                            : <div className="flex flex-row bg-lime-700 px-5 py-2 rounded-3xl w-2/3 mb-2 font-bold"><BadgeCheck className="mr-2" />Email already verified</div>
                                        }
                                        <a className="flex flex-row bg-purple px-5 py-2 rounded-3xl w-2/3 mb-2 font-bold" href="/api/auth/logout"><Pen className="mr-2" />Edit Profile</a>
                                        <a className="flex flex-row bg-red-500 px-5 py-2 rounded-3xl w-2/3 font-bold mb-2" href="/api/auth/logout"><Trash2 className="mr-2" />Delete Account</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="bg-slate-800 rounded-lg mr-3 w-1/2 p-3">
                                    <div className="flex flex-row items-center">
                                        <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                        <p className="text-white pl-2">User current logged in from: </p>
                                    </div>
                                </div>
                                <div className="bg-slate-800 rounded-lg w-1/2 p-3">
                                    <div className="flex flex-row items-center">
                                        <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                        <p className="text-white pl-2">Personal Performance Statistics</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                }
            </main>
        </div>
    )
}