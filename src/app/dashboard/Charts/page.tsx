"use client"
import { BarChart } from "@/components/ChartsTypes/BarChart";
import { DonutChart } from "@/components/ChartsTypes/DonutChart";
import { OverviewChart } from "@/components/ChartsTypes/LineChart";
import { ScatterChart } from "@/components/ChartsTypes/ScatterChart";
import DashboardHeader from "@/components/Dashboard Header/dashHeader";
import MenuLateral from "@/components/Menu/menuLateral";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ChartsDashboard() {
    // For the authenticated user
    const { user, error, isLoading } = useUser();

    return (
        <div>
            <MenuLateral />
            <main className="ml-36 pl-4 pr-10 py-10">
                {user && (
                    <div>
                        <DashboardHeader />
                        <section className="flex flex-row w-full mt-8">
                            {/** Basic Number Data Informations - Quadrant */}
                            <div className="flex flex-col w-8/12">
                                <div className="flex flex-row justify-around">
                                    <div className="flex flex-col bg-slate-800 w-1/3 mr-5 p-5 rounded-lg">
                                        <div className="flex flex-row">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white pl-2">Production Volume</p>
                                        </div>
                                        <p className="text-4xl font-bold mt-8 text-center">61.425</p>
                                    </div>
                                    <div className="flex flex-col bg-slate-800 w-1/3 mr-5 p-5 rounded-lg">
                                        <div className="flex flex-row">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white pl-2">Order Volume</p>
                                        </div>
                                        <p className="text-4xl font-bold mt-8 text-center">57.962</p>
                                    </div>
                                    <div className="flex flex-col bg-slate-800 w-1/3 p-5 rounded-lg">
                                        <div className="flex flex-row">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white pl-2">Sales Revenue</p>
                                        </div>
                                        <p className="text-4xl font-bold mt-8 text-center">$47M</p>
                                    </div>
                                </div>
                                {/** Chart for Overviews - Quadrant */}
                                <div className="bg-slate-800 w-full rounded-lg mt-5 h-[29vh]">
                                    <div className="mb-3 p-5 pt-8">
                                        <OverviewChart width="100%" height="100%" />
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="bg-slate-800 w-full rounded-lg mt-5 mr-3 h-[27vh] p-5">
                                        <div className="flex flex-row mb-2">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white pl-2">Downtime Causes</p>
                                        </div>
                                        <DonutChart width="80%" height="80%" />
                                    </div>
                                    <div className="bg-slate-800 w-full rounded-lg mt-5 h-[27vh] p-5">
                                        <div className="flex flex-row mb-2">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white pl-2">Focus Analysis</p>
                                        </div>
                                        <ScatterChart width="90%" height="90%" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-4/12 ml-5">
                                <div className="flex flex-col bg-slate-800 w-full rounded-lg p-8 h-[63.333%]">
                                    <div className="flex flex-col h-1/3 mb-5">
                                        <div className="flex flex-row mb-2 items-center">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white text-xl pl-2">Total Machines</p>
                                        </div>
                                        <p className="text-3xl font-bold pl-8">265</p>
                                    </div>
                                    <div className="flex flex-col h-1/3 mb-5">
                                        <div className="flex flex-row mb-2 items-center">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white text-xl pl-2">Production Costs</p>
                                        </div>
                                        <p className="text-3xl font-bold pl-8">$ 1.263.094</p>
                                    </div>
                                    <div className="flex flex-col h-1/3 mb-5">
                                        <div className="flex flex-row mb-2 items-center">
                                            <div className="rounded-full w-[20px] h-[20px] bg-gradient-to-r from-[#a0a9d9] from-0% via-[#7979ed] via-35% to-[#800080] to-100%"></div>
                                            <p className="text-white text-xl pl-2">Waste Produced</p>
                                        </div>
                                        <p className="text-3xl font-bold pl-8">943.28 Kg</p>
                                    </div>
                                </div>
                                <div className="bg-slate-800 w-full rounded-lg mt-5 h-[33%] p-3">
                                    <BarChart width='100%' height='100%' />
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </main>
        </div>
    );
}