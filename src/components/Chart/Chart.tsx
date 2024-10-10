import { generateRandomChartExpenseValues, generateRandomChartProfitValues, generateRandomChartSalesValues } from '@/scripts/DashboardCharts/DashCharts';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function OverviewChart() {

    // Chart Data for the Home Dashboard Chart Overview
    const data = {
        labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
        datasets: [
            {
                label: "Sales",
                data: generateRandomChartSalesValues(),
                fill: false,
                borderColor: 'purple',
                tension: 0.1
            },
            {
                label: "Profit",
                data: generateRandomChartProfitValues(),
                fill: false,
                borderColor: 'blue',
                tension: 0.1
            },
            {
                label: "Expenses",
                data: generateRandomChartExpenseValues(),
                fill: false,
                borderColor: 'red',
                tension: 0.1
            }
        ]
    }

    // Chart Options for the Home Dashboard Chart Overview
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                },
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        }
    }

    return (
        <section className='flex justify-center items-center mx-auto w-11/12 h-11/12'>
            <Line data={data} options={options} />
        </section>
    )
}