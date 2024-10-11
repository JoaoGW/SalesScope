import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ScatterController, PointElement, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ScatterController, PointElement, LinearScale);

interface OverviewChartProps {
    width?: string;
    height?: string;
}

export function ScatterChart({ width = '100%', height = '100%' }: OverviewChartProps) {
    const data = {
        datasets: [
            {
                label: 'Month 1',
                data: [
                    { x: 10, y: 1 },
                    { x: 0, y: 13 },
                    { x: 12, y: 7 },
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Month 2',
                data: [
                    { x: 1, y: 1 },
                    { x: 5, y: 7 },
                    { x: 9, y: 12 },
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
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
                type: 'linear' as const,
                position: 'bottom' as const,
                ticks: {
                    color: 'white'
                }
            },
            y: {
                min: 0,
                max: 20,
                ticks: {
                    color: 'white'
                }
            },
        },
    };

    return (
        <div style={{ width, height }}>
            <Scatter data={data} options={options} />
        </div>
    )
}