"use client"
import DashboardHeader from "@/components/Dashboard Header/dashHeader";
import MenuLateral from "@/components/Menu/menuLateral";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function HomeDashboard() {
  // For the authenticated user
  const { user, error, isLoading } = useUser();

  // Information to display when/while fetching all the necessary data to this page
  if (isLoading) { return <p>Loading...</p> }
  if (error) { return <p>An error occurred with your login attempt</p> }

  return (
    <div>
      <MenuLateral />
      <main className="ml-36 p-10">
        {user && (
          <DashboardHeader/>
        )}
      </main>
    </div>
  );
}