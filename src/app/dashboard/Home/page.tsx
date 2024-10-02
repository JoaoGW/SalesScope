"use client"
import DashboardHeader from "@/components/Dashboard Header/dashHeader";
import MenuLateral from "@/components/Menu/menuLateral";
import { LoadingSpinner } from "@/components/LoadingSpinners/Spinners";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Ellipsis } from 'lucide-react';
import { SmallAmountProducts } from "@/components/Products/Products";

export default function HomeDashboard() {
  // For the authenticated user
  const { user, error, isLoading } = useUser();

  // Information to display when/while fetching all the necessary data to this page
  if (isLoading) { return <LoadingSpinner/> }
  if (error) { return <p>An error occurred with your login attempt</p> }

  return (
    <div>
      <MenuLateral />
      <main className="ml-36 pl-4 pr-10 py-10 h-screen">
        {user && (
          <div>
            <DashboardHeader />
            <section className="grid grid-cols-2 gap-5 mt-8 w-full h-screen">
              <div className="grid-rows-2">
                { /** Chartt for Overviews - Quadrant */ }
                <div className="bg-slate-800 w-full p-5 rounded-lg h-1/2 mb-8" id="overviews">
                  <div className="flex flex-row justify-between mb-3">
                    <p className="text-xl font-bold">Overviews</p>
                    <button type="button"><Ellipsis size={'30px'} /></button>
                  </div>
                </div>
                { /** Chartt for Products - Quadrant */ }
                <div className="bg-slate-800 w-full p-5 rounded-lg h-1/4" id="products">
                  <div className="flex flex-row justify-between mb-3">
                    <p className="text-xl font-bold">Products</p>
                    <button type="button"><Ellipsis size={'30px'} /></button>
                  </div>
                  <div className="h-3/4 mb-3">
                    <SmallAmountProducts/>
                  </div>
                </div>
              </div>
              { /** Chartt for Reviews - Quadrant */ }
              <div className="bg-slate-800 p-5 rounded-lg h-4/5" id="reviews">
                <div className="flex flex-row justify-between mb-3">
                  <p className="text-xl font-bold">Reviews</p>
                  <button type="button"><Ellipsis size={'30px'} /></button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}