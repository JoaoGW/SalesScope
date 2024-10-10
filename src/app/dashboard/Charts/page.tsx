"use client"
import DashboardHeader from "@/components/Dashboard Header/dashHeader";
import MenuLateral from "@/components/Menu/menuLateral";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ChartsDashboard() {
    // For the authenticated user
    const { user, error, isLoading } = useUser();

    return (
        <div>
            <MenuLateral />
            <main className="ml-36 pl-4 pr-10 py-10 h-screen">
                {user && (
                    <div>
                        <DashboardHeader />
                        <section></section>
                    </div>
                )}
            </main>
        </div>
    )
}