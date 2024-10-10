import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface OverviewChartProps {
    width?: string;
    height?: string;
}

export function DonutChart({ width = '100%', height = '100%' }: OverviewChartProps) {
    const data = {
        labels: ['Broken Machine', 'Human Error', 'Personal Breaks'],
        datasets: [
            {
                data: [25, 8, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right' as const,
                labels: {
                    color: "white"
                }
            },
        },
    };

    return (
        <div style={{ width, height }}>
            <Doughnut className='ml-8' data={data} options={options} />
        </div>
    )
}