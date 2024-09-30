"use client"
import MenuLateral from "@/components/Menu/menuLateral";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function HomeDashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) { return <p>Loading...</p> }
  if (error) { return <p>An error occurred with your login attempt</p> }

  return (
    <div>
      <MenuLateral />
      <main className="ml-36">
        {user && ( // Corrigido para renderizar corretamente
          <div>
            <p>Conteúdo Principal da Home</p>
            <div>
              <p>User: {user?.name}</p>
              <p>Email: {user?.email}</p>
            </div>
            <a href="/api/auth/logout">Logout</a>
          </div>
        )}
      </main>
    </div>
  );
}