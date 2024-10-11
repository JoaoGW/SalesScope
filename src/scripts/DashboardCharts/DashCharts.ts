// Generates the values for the Sales
export const generateRandomChartSalesValues = () => {
    // Store all the values for the Sales
    const salesValues: number[] = [];

    // Generate random values for each week
    for (let i = 0; i < 4; i++) {
        salesValues.push(Math.floor(Math.random() * 300 - 90) + 90);
    }

    return salesValues;
}

// Generate the values for the Profit
export const generateRandomChartProfitValues = () => {
    // Store all the Profit Values
    const profitValues: number[] = [];

    // Generates random values to demonstrate the profit in each period
    for(let i = 0; i < 4; i++){
        const random = Math.random() * (900 - 270) + 270;
        profitValues.push(parseFloat(random.toFixed(2)));
    }

    return profitValues;
}

// Generate the values for the Expenses
export const generateRandomChartExpenseValues = () => {
    // Store all the expense values
    const expenseValues: number[] = [];

    // Generate the random values to demonstrate the expenses in each period
    for(let i = 0; i < 4; i++){
        const random = Math.random() * (600 - 300) + 300;
        expenseValues.push(parseFloat(random.toFixed(2)));
    }

    return expenseValues;
}