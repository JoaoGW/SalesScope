import { Suspense, useEffect, useState } from "react"
import { LoadingSpinner } from "../LoadingSpinners/Spinners"
import { CircleUser } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import StarRatings from 'react-star-ratings';

interface Customer {
    adress: Address,
    id: number,
    email: string,
    username: string,
    password: string,
    name: Name,
    phone: string,
    lastRating: number
}

interface Name {
    firstname: string,
    lastname: string
}

interface Address {
    city: string,
    street: string,
    number: number,
    zipcode: string
}

// Generates a random review information data for each customer
const generateRandomReviewValue = () => {
    const value = Math.random() * (5 - 1) + 1;
    return parseFloat(value.toFixed(2));
}

// Generates a random last reviewed time number for the momentaneous review (only use on dashboard/HOME)
const generateRandomNumber = () => {
    return Math.round(Math.random() * (59 - 1) + 1);
}

export function CustomersReviews() {
    // Store all the customers data from the API
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [isLaptop, setIsLaptop] = useState<boolean>(false);

    const customersData = async () => {
        try {
            const response = await fetch('/api/customers');
            const result = await response.json();
        
            // Log the original data
            console.log('Dados originais dos clientes:', result);
    
            // Verifica se 'data' existe e é um array
            if (Array.isArray(result.data)) {
                const modifiedCustomers = result.data.map((customer: Customer) => ({
                    ...customer,
                    lastRating: generateRandomReviewValue(),
                }));
    
                // Log the modified data
                console.log('Dados modificados dos clientes:', modifiedCustomers);
    
                setCustomers(modifiedCustomers);
            } else {
                console.error('Formato inesperado de dados:', result);
            }
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };        

    // Effects without parameters
    useEffect(() => {
        customersData();

        // Checking if is a Desktop Monitor Screen or a Laptop Screen
        setIsLaptop(window.matchMedia('(max-width: 1919px)').matches);
    }, []);

    return (
        <Suspense fallback={<LoadingSpinner/>}>
            <section className="flex flex-col w-11/12 items-center mx-auto">
                { isLaptop && customers.slice(0, 4).map((data) => (
                    <div key={data.id} className="flex flex-col mb-5 w-full border-b-2 pb-3" id="userReview">
                        <div className="flex flex-row justify-between" id="reviewHeader">
                            <div className="flex flex-row items-center mb-2">
                                <CircleUser className="mr-3" size={'45px'}/>
                                <div className="flex flex-col">
                                    <p>{data.name.firstname + data.name.lastname}</p>
                                    <p>{data.email}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end">
                                <StarRatings
                                    rating={generateRandomReviewValue()}
                                    starRatedColor="yellow"
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="3px"
                                />
                                <p>{generateRandomNumber()} min ago</p>
                            </div>
                        </div>
                        <p className="">"Lorem ipsum dolor sit amet, consectetur adipiscing"</p>
                    </div>
                )) }
                <button type="button" className="flex flex-row font-bold text-center">See All<ArrowDown className="ml-2"/></button>
            </section>
        </Suspense>
    )
}