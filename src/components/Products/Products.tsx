import { Suspense, useEffect, useState } from "react"
import { LoadingSpinner } from "../LoadingSpinners/Spinners";

interface Products {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

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

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <div></div>
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