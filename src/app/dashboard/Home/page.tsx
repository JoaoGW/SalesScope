"use client";
import DashboardHeader from "@/components/Dashboard Header/dashHeader";
import MenuLateral from "@/components/Menu/menuLateral";
import { LoadingSpinner } from "@/components/LoadingSpinners/Spinners";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Ellipsis } from 'lucide-react';
import { SmallAmountProducts } from "@/components/Products/Products";
import { OverviewChart } from "@/components/ChartsTypes/LineChart";
import { CustomersReviews } from "@/components/Customers/Customers";
import { getCurrentDate } from "@/scripts/Common/Common";
import { useEffect, useState } from "react";

// Define the type for the date state
interface DateInfo {
  day: number;
  month: string;
  year: number;
}

export default function HomeDashboard() {
  // For the authenticated user
  const { user, error, isLoading } = useUser();

  // To display date information
  const [date, setDate] = useState<DateInfo | null>(null);

  useEffect(() => {
    setDate(getCurrentDate());
  }, []);

  // Information to display when/while fetching all the necessary data to this page
  if (isLoading) { return <LoadingSpinner /> }
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
                {/** Chart for Overviews - Quadrant */}
                <div className="bg-slate-800 w-full p-5 rounded-lg h-1/2 mb-8" id="overviews">
                  <div className="flex flex-row justify-between mb-3">
                    <p className="text-xl font-bold">Overviews - {date?.month} {date?.year}</p>
                    <button type="button"><Ellipsis size={'30px'} /></button>
                  </div>
                  <div className="h-full mb-3 pb-8">
                    {/** Pass width and height dynamically */}
                    <OverviewChart width="100%" height="100%" />
                  </div>
                </div>
                {/** Chart for Products - Quadrant */}
                <div className="bg-slate-800 w-full p-5 rounded-lg h-1/4" id="products">
                  <div className="flex flex-row justify-between mb-3">
                    <p className="text-xl font-bold">Products</p>
                    <button type="button"><Ellipsis size={'30px'} /></button>
                  </div>
                  <div className="h-3/4 m-3 mt-6">
                    <SmallAmountProducts />
                  </div>
                </div>
              </div>
              {/** Chart for Reviews - Quadrant */}
              <div className="bg-slate-800 p-5 rounded-lg h-4/5" id="reviews">
                <div className="flex flex-row justify-between mb-3">
                  <p className="text-xl font-bold">Reviews</p>
                  <button type="button"><Ellipsis size={'30px'} /></button>
                </div>
                <div className="h-3/4 mb-3">
                  <CustomersReviews />
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}