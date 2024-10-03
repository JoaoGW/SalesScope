import { Suspense, useEffect, useState } from "react"
import { LoadingSpinner } from "../LoadingSpinners/Spinners"
import { CircleUser } from 'lucide-react';
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

    const customersData = async () => {
        try {
            // Fetch the data that the internal api gathers from the remote API
            const response = await fetch('/api/customers');
            const data = await response.json();

            // Assigning random reviews from 1 to 5 to each customers
            const customersMod: Customer[] = data;
            const modifiedCustomers = customersMod.map(customer => ({
                ...customer,
                lastRating: generateRandomReviewValue()
            }))
            setCustomers(modifiedCustomers);
        } catch (error) {
            setError((error as Error).message);
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        customersData();
    }, []);

    return (
        <Suspense fallback={<LoadingSpinner/>}>
            <section className="flex flex-col w-5/6 items-center">
                { customers.slice(0, 7).map((data) => (
                    <div key={data.id} className="flex flex-col" id="userReview">
                        <div className="flex flex-row justify-between" id="reviewHeader">
                            <div className="flex flex-row">
                                <CircleUser/>
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
                                />
                                <p>{generateRandomNumber()} min ago</p>
                            </div>
                        </div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing  </p>
                    </div>
                )) }
            </section>
        </Suspense>
    )
}