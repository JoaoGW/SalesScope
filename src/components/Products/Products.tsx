import { Suspense, useEffect, useState } from "react"
import { LoadingSpinner } from "../LoadingSpinners/Spinners";
import { Package } from 'lucide-react';
import Image from "next/image";

interface Products {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

// Takes the list with all the products from the API and shuffles it to add dynamicity to the visualization
const randomizeProductsDisplayed = (products: Products[]) => {
    var shuffle = require('shuffle-array');
    shuffle(products);
}

// Pick only the first words of the product, so it can display better on the user's screen
const splitProductName = (productTitle: string) => {
    const titleArray = productTitle.split(" ");
    return titleArray[0] + " " + titleArray[1];
}

// To demonstrate a limited amount of products. Use in small spaces that needs to show products
export function SmallAmountProducts() {
    // States for managing control of informations
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // Fetching Products Informations to the component, so it can control wheter will be displayed or not
    const productsData = async () => {
        try {
            // Gets data from this internal path location
            const response = await fetch('/api/products');

            // Testes the response status to check if everything is fine
            if (!response.ok) {
                throw new Error("Route failed to fetch data from internal server");
            }

            // Await the information from the fetch and stores the returned value in the Product State
            const data = await response.json();
            setProducts(data.data);
        } catch (error) {
            setError((error as Error).message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        productsData();
    }, []);

    //Randomize which products will be displayed
    randomizeProductsDisplayed(products);

    // Content rendering to be displayed
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <div className="flex flex-row justify-evenly">
                {products.slice(0,5).map((product) => (
                    <div className="flex flex-col flex-grow text-center items-center max-w-1/3 overflow-hidden mr-3" key={product.id}>
                        <Package size={'2.5em'}/>
                        <p>{splitProductName(product.title)}</p>
                    </div>
                ))}
                { error ? <p>{error}</p> : '' }
            </div>
        </Suspense>
    )
}

export function AllProducts() {
    // States for managing control of informations
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // Fetching Products Informations to the component, so it can control wheter will be displayed or not
    const productsData = async () => {
        try {
            // Gets data from this internal path location
            const response = await fetch('/api/products');

            // Testes the response status to check if everything is fine
            if (!response.ok) {
                throw new Error("Route failed to fetch data from internal server");
            }

            // Await the information from the fetch and stores the returned value in the Product State
            const data = await response.json();
            setProducts(data.data);
        } catch (error) {
            setError((error as Error).message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        productsData();
    }, []);

    return (
        <div>
            <Suspense fallback={<LoadingSpinner />}>
                <div></div>
            </Suspense>
        </div>
    )
}