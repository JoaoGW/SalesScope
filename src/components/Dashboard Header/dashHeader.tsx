import Select, { StylesConfig, SingleValueProps, GroupBase } from "react-select";
import { Search } from "lucide-react";

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

    const SingleValue = ({ data }: SingleValueProps<any>) => (
        <div className="flex items-center">
            <Search className="mr-2" size={16} color="black"/>
            <span>{data.label}</span>
        </div>
    );

    return (
        <section className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-bold">Sales Scope Dashboard</h1>
            <div className="flex flex-row justify-end w-1/2 items-center">
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
                    components={{ SingleValue }}
                    placeholder="Search"
                    isSearchable
                />
                <a className="bg-gray px-10 py-2 rounded-3xl" href="/api/auth/logout">Logout</a>
            </div>
        </section>
    );
}