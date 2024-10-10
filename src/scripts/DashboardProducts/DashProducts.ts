interface Products {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

// Takes the list with all the products from the API and shuffles it to add dynamicity to the visualization
export const randomizeProductsDisplayed = (products: Products[]) => {
    var shuffle = require('shuffle-array');
    shuffle(products);
}

// Pick only the first words of the product, so it can display better on the user's screen
export const splitProductName = (productTitle: string) => {
    const titleArray = productTitle.split(" ");
    return titleArray[0] + " " + titleArray[1];
}