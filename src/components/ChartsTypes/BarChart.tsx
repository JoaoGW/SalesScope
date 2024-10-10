import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarController, CategoryScale, LinearScale, BarElement);

interface OverviewChartProps {
    width?: string;
    height?: string;
}

export function BarChart({ width = '100%', height = '100%' }: OverviewChartProps) {
    const data = {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'cyan',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: "white"
                }
            },
        },
        scales: {
            x: {
                type: 'category' as const,
                ticks: {
                    color: 'white'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                }
            },
        },
    };

    return (
        <div style={{ width, height }}>
            <Bar data={data} options={options} />
        </div>
    )
}