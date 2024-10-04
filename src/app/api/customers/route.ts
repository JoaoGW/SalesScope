import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        // URL to request the customers data to the Fake Store API
        const response = await fetch('https://fakestoreapi.com/users');

        // Test to see if the response given from the API is fine
        if(!response.ok){
            throw new Error("Failed to fetch customers information");
        }

        // Stores the customer information data that came from the API
        const data = await response.json();

        return NextResponse.json({ data }, { status: 200 })
    }catch(Error){
        return NextResponse.json({ message: "There was an error during the proccess of gathering information of Customers" }, { status: 500 });
    }
}