import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Generates the values for the Sales
const generateRandomChartSalesValues = () => {
    // Store all the values for the Sales
    const salesValues: number[] = [];

    // Generate random values for each week
    for (let i = 0; i < 4; i++) {
        salesValues.push(Math.floor(Math.random() * 300 - 90) + 90);
    }

    return salesValues;
}

// Generate the values for the Profit
const generateRandomChartProfitValues = () => {
    // Store all the Profit Values
    const profitValues: number[] = [];

    // Generates random values to demonstrate the profit in each period
    for(let i = 0; i < 4; i++){
        const random = Math.random() * (900 - 270) + 90;
        profitValues.push(parseFloat(random.toFixed(2)));
    }

    return profitValues;
}

// Generate the values for the Expenses
const generateRandomChartExpenseValues = () => {
    // Store all the expense values
    const expenseValues: number[] = [];

    // Generate the random values to demonstrate the expenses in each period
    for(let i = 0; i < 4; i++){
        const random = Math.random() * (600 - 300) + 300;
        expenseValues.push(parseFloat(random.toFixed(2)));
    }

    return expenseValues;
}

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