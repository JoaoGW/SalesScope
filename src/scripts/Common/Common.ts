// Verifies which route the user currently is and defines visual effects for it
export const verifyRoute = (path: string) => {
    let route = "";

    const pathArray = path.split("/");
    console.log(pathArray[2]);
    route = pathArray[2]; // I only want what comes after dashboard/ on the URL, since it describes my current section

    return route;
}

// Generates a random review information data for each customer
export const generateRandomReviewValue = () => {
    const value = Math.random() * (5 - 1) + 1;
    return parseFloat(value.toFixed(2));
}

// Generates a random last reviewed time number for the momentaneous review (only use on dashboard/HOME)
export const generateRandomNumber = () => {
    return Math.round(Math.random() * (59 - 1) + 1);
}