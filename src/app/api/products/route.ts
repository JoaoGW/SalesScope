import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        //URL to fetch the information. No key is needed to this
        const response = await fetch("https://fakestoreapi.com/products");

        //Verifies the response status and confirm the connection with server
        if (!response.ok) {
            throw new Error("The request encountered an error while trying to fetch the Products data for you")
        }

        const data = await response.json();
        return NextResponse.json({  data }, { status: 200 });

    } catch (Error) {
        return NextResponse.json({ message: "An Error was encountered while fetching Products Data" }, { status: 500 });
    }
}