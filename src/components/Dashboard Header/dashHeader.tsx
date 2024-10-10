import Select, { StylesConfig, SingleValueProps, GroupBase } from "react-select";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { verifyRoute } from "@/scripts/Common/Common";
import { useEffect, useState } from "react";

export default function DashboardHeader() {
    // Options for the search bar to find useful content
    const Options = [
        { value: "Home", label: "Dashboard Home Page" },
        { value: "Charts", label: "Detailed Charts" },
        { value: "Notifications", label: "My Notifications" },
        { value: "Contact", label: "Get in Touch with Customer" },
        { value: "Account", label: "My Profile Information" },
        { value: "Help", label: "I Need Help!" }
    ];

    // Define custom styles with explicit types
    const customStyles: StylesConfig<any, false, GroupBase<any>> = {
        control: (provided) => ({
            ...provided,
            borderRadius: '1.5rem',
            borderColor: 'lavender',
            boxShadow: 'none',
            '&:hover': {
                borderColor: 'lavender',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'black',
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        dropdownIndicator: () => ({
            display: 'none'
        }),
    };

    // Check the URL and set the current page on title
    const path = usePathname();
    const [actualRoute, setActualRoute] = useState("");
    useEffect(() => {
        setActualRoute(verifyRoute(path));
    }, [])

    return (
        <section className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-bold">Sales Scope Dashboard - {actualRoute}</h1>
            <div className="flex flex-row justify-end w-1/2 items-center">
                <Search className="mr-3" size={'1.85em'}/>
                <Select
                    options={Options}
                    styles={customStyles}
                    className="primary50 mr-5 w-1/2 text-black"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'lavender',
                            primary: 'black',
                        },
                    })}
                    placeholder="Search"
                    isSearchable
                />
                <a className="bg-gray px-10 py-2 rounded-3xl" href="/api/auth/logout">Logout</a>
            </div>
        </section>
    );
}