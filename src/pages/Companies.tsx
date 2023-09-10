import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import icons
import pin from '../assets/icons/pin.svg';
import search from '../assets/icons/search.svg';
import contact from '../assets/icons/contact-dark.svg';
import linkedin from '../assets/icons/linkedin.svg';
import career from '../assets/icons/career-dark.svg';
import loading from '../assets/icons/loading.svg';
import chevronUp from '../assets/icons/chevron-up-light.svg';
import chevronUpDark from '../assets/icons/chevron-up-dark.svg';
import chevronDown from '../assets/icons/chevron-down-light.svg';
import services from '../assets/icons/code.svg';

interface Company {
    "Company": string;
    "Website": string;
    "Industry": string[];
    "Services": string;
    "Contact": string;
    "Careers": string;
    "LinkedIn": string;
    "Career": string;
    "Employees": string;
    "Location": string;
}

function CompaniesTable({ company }: { company: Company }) {
    return (
        <tr className="bg-[#FFF] hover:bg-[#fff] border-b">
            {/* company */}
            <th scope="row" className="pl-6 py-5 text-lg text-black font-bold whitespace-nowrap">
                {company["Company"]}
                <br />
                {/* website */}
                <a href={company["Website"]} className="text-base text-[#aaa] font-normal hover:underline" target="_blank" rel="noopener noreferrer">
                    {company["Website"]}
                </a>
            </th>
            {/* industry */}
            <td className="sm:pl-0 pl-4">
                {company["Industry"] && company["Industry"].map((industry, index) => (
                    <a key={index} className="mr-1 px-3 py-2 text-sm text-black font-medium bg-[#eee] rounded-xl text-center items-center" target="_blank" rel="noopener noreferrer">
                        {/* industry data */}
                        {industry}
                    </a>
                ))}
            </td>
            {/* services */}
            <td className="sm:pl-5 pl-8">
                <a href={company["Services"]} className="px-3.5 py-2.5 mr-0 mb-2 bg-[#eee] hover:ring-1 hover:shadow-sm hover:ring-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    {/* services icon */}
                    <img src={services} className="h-7 w-7" alt="services" />
                </a>
            </td>
            {/* contact */}
            <td className="sm:pl-4 pl-8">
                <a href={company["Contact"]} className="px-3.5 py-2.5 mr-0 mb-2 bg-[#eee] hover:ring-1 hover:shadow-sm hover:ring-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    {/* contact icon */}
                    <img src={contact} className="h-7 w-7" alt="contact" />
                </a>
            </td>
            {/* careers */}
            <td className="sm:pl-4 pl-8">
                <a href={company["LinkedIn"]} className="px-3.5 py-2.5 mr-0 mb-2 bg-[#eee] hover:ring-1 hover:shadow-sm hover:ring-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    {/* careers */}
                    <img src={linkedin} className="h-7 w-7" alt="career" />
                </a>
            </td>
            {/* careers */}
            <td className="sm:pl-4 pl-8">
                <a href={company["Career"]} className="px-3.5 py-2.5 mr-0 mb-2 bg-[#eee] hover:ring-1 hover:shadow-sm hover:ring-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-200 rounded-xl inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    {/* career icon */}
                    <img src={career} className="h-7 w-7" alt="careers" />
                </a>
            </td>
            {/* employees */}
            <td className="sm:pl-4 pl-6">
                <a className="px-4 py-3 text-black text-md text-center font-md rounded-xl inline-flex items-center truncate" target="_blank" rel="noopener noreferrer">
                    {/* employees data */}
                    {company["Employees"]}
                </a>
            </td>
            {/* location */}
            <td className="sm:pl-0 pl-6">
                <p className="inline-flex items-center">
                    {/* location data */}
                    {company["Location"]}
                </p>
            </td>
        </tr>
    );
}

function Companies() {
    const [jsonData, setJsonData] = useState<Company[]>([]);
    const [filteredData, setFilteredData] = useState<Company[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [isLoading, setIsLoading] = useState(true);

    // fetch data
    useEffect(() => {
        setIsLoading(true);
        fetch("")
            .then((response) => response.json())
            .then((jsonDataResponse) => {
                setJsonData(jsonDataResponse);
                setFilteredData(jsonDataResponse);
            })
            .catch((error) => console.error("Error fetching data: ", error))
            .finally(() => setIsLoading(false));
    }, []);

    // filter data by company name
    const filterData = (searchTerm: string) => {
        const filteredData = jsonData.filter((company) =>
            company["Company"].toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    // sort data
    const sortData = () => {
        const sortedData = [...filteredData].sort((a, b) => {
            const aValue = a["Company"].toLowerCase();
            const bValue = b["Company"].toLowerCase();
            return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        });
        setFilteredData(sortedData);
    };

    // sort data order
    useEffect(() => {
        sortData();
    }, [sortOrder]);

    // sort by company column
    const handleSort = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    // search input
    const tableRef = useRef<HTMLTableElement>(null);

    // handle search input change
    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const searchTerm = event.target.value.trim();
        setSearchTerm(searchTerm);
        filterData(searchTerm);

        // search results
        if (tableRef.current) {
            tableRef.current.innerHTML =
                filteredData.map((company) => (
                    <CompaniesTable
                        key={company["Company"]}
                        company={company}
                    />
                )).join("");
        }
    };

    // table no results message
    function NoResultsMessage() {
        return (
            <tr>
                <td colSpan={8} className="text-center py-16 text-black">
                    No results found.
                </td>
            </tr>
        );
    }

    return (
        <div className="pl-4 pr-4 pt-12">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="relative overflow-x-auto mb-40 rounded-lg">
                    <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-xl">
                        {/* header */}
                        <div className="mb-4 sm:p-16 p-8 bg-[#222] rounded-3xl text-left shadow-sm shadow-black">
                            {/* header title */}
                            <h1 className="sm:text-6xl text-5xl text-white font-bold">
                                Companies
                            </h1>
                            {/* header tags */}
                            <div className="mt-4 mb-4 text-white flex">
                                <p className="text-md font-bold text-center rounded-full inline-flex items-center">
                                    {/* animation */}
                                    <span className="text-normal flex items-center">
                                        <span className="w-2 h-2 mr-2 bg-white animate-pulse rounded-full flex flex-shrink-0"></span>
                                    </span>
                                    {/* header tag text */}
                                    In development
                                </p>
                                {/* header tags divider */}
                                <a className="ml-3 mr-3 text-md text-center rounded-full inline-flex items-center">
                                    <span className="text-normal flex items-center">|</span>
                                </a>
                                {/* header tag  */}
                                <h1 className="text-white text-md text-center inline-flex items-center">
                                    {/* pin location icon */}
                                    <img src={pin} className="h-5 w-5 mr-1" />
                                    Croatia
                                </h1>
                            </div>
                            {/* header description */}
                            <h1 className="w-full sm:w-3/4 text-lg mt-2 text-white">
                                A curated datalog of IT (ICT) <span className="bg-[#333] px-1 py-0.3 rounded-lg">companies</span>, <span className="bg-[#333] px-1 py-0.3 rounded-lg">agencies</span>,{" "} and <span className="bg-[#333] px-1 py-0.3 rounded-lg">consultancies</span> conducting business operations, providing services, or offering consultancy in Croatia.
                            </h1>
                        </div>
                    </div>
                    {/* search & contribute div */}
                    <div className="flex flex-col items-center max-w-screen-xl sm:px-4 px-0 mx-auto mt-8 mb-4 sm:flex-row sm:justify-between">
                        {/* search form */}
                        <form className="flex items-center animation glow delay-1">
                            <div className="relative sm:w-96 w-80">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    {/* search icon */}
                                    <img src={search} className="h-4 w-4" alt="Search Icon" />
                                </div>
                                {/* search input */}
                                <input value={searchTerm} onChange={handleSearchInputChange} type="email" id="searchInput" className="block w-full p-4 pl-10 text-base text-black border border-gray-300 rounded-2xl focus:ring-black focus:border-black" placeholder="Search by company" />
                                <p id="searchResults" className="text-black absolute right-2 bottom-2 bg-[#eee] focus:ring-4 focus:outline-none rounded-xl text-base px-5 py-2">
                                    {/* search filtered data - results count */}
                                    {filteredData.length} results
                                </p>
                            </div>
                        </form>
                        <div className="flex items-center">
                            {/* contribute text prompt */}
                            <Link to="/contribute" className="sm:text-lg text-md sm:mt-0 mt-4 animation glow delay-1">
                                <h1 className="mr-3 sm:text-lg text-md text-[#AAA] hover:text-black whitespace-nowrap">
                                    Can't find your favorite company?{' '}
                                    <span className="underline sm:text-lg text-md">
                                        Suggest it!
                                    </span>
                                </h1>
                            </Link>
                        </div>
                    </div>
                    {/* back to top button */}
                    <a href="#" id="back-to-top" className="w-10 h-10 mr-3 mb-3 text-black bg-gray-100 rounded-lg flex justify-center items-center fixed bottom-0 right-0 z-10">
                        <img src={chevronUpDark} className="h-6 w-6" alt="back to top" />
                    </a>
                    {/* table div */}
                    <div className="max-w-screen-xl mt-8 mb-40 sm:px-4 px-0 mx-auto relative overflow-x-auto">
                        {/* table */}
                        <table className="mt-0 text-left w-full mx-auto">
                            {/* table header */}
                            <thead className="text-lg text-white animation glow delay-2">
                                <tr className="bg-[#222]">
                                    {/* company */}
                                    <th onClick={handleSort} className="sm:px-6 px-6 py-7 whitespace-nowrap cursor-pointer rounded-l-xl">
                                        <h1 className="inline-flex">Company</h1>
                                        {sortOrder === "asc" ? <img src={chevronUp} className="h-5 w-5 ml-1 inline-flex" alt="Up Arrow" /> : <img src={chevronDown} className="h-5 w-5 ml-1 inline-flex" alt="sort arrow" />}
                                    </th>
                                    {/* industry & services */}
                                    <th className="sm:px-0 px-6 py-3 whitespace-nowrap">
                                        <h1>Industry & Department</h1>
                                    </th>
                                    {/* services */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>Services</h1>
                                    </th>
                                    {/* contact */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>Contact</h1>
                                    </th>
                                    {/* linkedin */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>LinkedIn</h1>
                                    </th>
                                    {/* careers */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>Careers</h1>
                                    </th>
                                    {/* employees */}
                                    <th className="sm:px-0 px-6 py-3 whitespace-nowrap">
                                        <h1>Employees</h1>
                                    </th>
                                    {/* location */}
                                    <th className="sm:px-0 px-6 py-3 whitespace-nowrap rounded-r-xl">
                                        <h1>Location</h1>
                                    </th>
                                </tr>
                            </thead>
                            {/* table body */}
                            <tbody id="companyTableBody" className="animation glow delay-3">
                                {/* loading */}
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={8} className="text-center py-16">
                                            <div className="flex items-center justify-center">
                                                {/*  loading spinner icon */}
                                                <img src={loading} className="h-10 w-10 animate-spin" alt="loading" />
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredData.length === 0 ? (
                                        <NoResultsMessage />
                                    ) : (
                                        filteredData.map((company) => (
                                            <CompaniesTable key={company["Company"]} company={company} />
                                        ))
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Companies;