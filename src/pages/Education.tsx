import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import icons
import pin from '../assets/icons/pin.svg';
import search from '../assets/icons/search.svg';
import chevronUp from '../assets/icons/chevron-up-light.svg';
import chevronDown from '../assets/icons/chevron-down-light.svg';
import loading from '../assets/icons/loading.svg';
import apply from '../assets/icons/apply.svg';

interface Education {
    "Course": string;
    "Website": string;
    "Topic": string[];
    "Organizer": string;
    "Enroll": string;
}

function EducationTable({ education }: { education: Education }) {
    return (
        <tr className="bg-[#FFF] hover:bg-[#fff] border-b">
            {/* education course */}
            <th scope="row" className="pl-6 py-8 text-xl text-black font-bold whitespace-nowrap">
                {education["Course"]}
            </th>
            {/* topic */}
            <td className="sm:pl-0 pl-6">
                {education["Topic"] && education["Topic"].map((topic, index) => (
                    <a key={index} className="mr-1 px-3 py-2 text-sm text-black font-medium bg-[#eee] rounded-xl text-center items-center" target="_blank" rel="noopener noreferrer">
                        {/* topic data */}
                        {topic}
                    </a>
                ))}
            </td>
            {/* organizer */}
            <td className="sm:pl-2 pl-5">
                <a href={education["Website"]} className="px-4 py-3 mr-0 mb-2 text-black text-md text-left bg-white hover:ring-1 hover:shadow-sm hover:ring-[#eee] focus:ring-2 focus:outline-none focus:ring-gray-200 font-bold rounded-xl inline-flex items-center underline" target="_blank" rel="noopener noreferrer">
                    {/* organizer icon */}
                    {education["Organizer"]}
                </a>
            </td>
            {/* enroll */}
            <td className="sm:pl-2 pl-5">
                <a href={education["Enroll"]} className="px-4 py-3 mr-0 mb-2 text-gray-500 text-md text-center bg-[#eee] hover:ring-1 hover:shadow-sm hover:ring-[#eee] focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-xl inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    {/* ticket data */}
                    <img src={apply} className="h-7 w-7" alt="ticket icon" />
                </a>
            </td>
        </tr>
    );
}

function Education() {
    const [jsonData, setJsonData] = useState<Education[]>([]);
    const [filteredData, setFilteredData] = useState<Education[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [isLoading, setIsLoading] = useState(true);

    // fetch data
    useEffect(() => {
        setIsLoading(true);
        fetch("../data/education.json")
            .then((response) => response.json())
            .then((jsonDataResponse) => {
                setJsonData(jsonDataResponse);
                setFilteredData(jsonDataResponse);
            })
            .catch((error) => console.error("Error fetching data: ", error))
            .finally(() => setIsLoading(false));
    }, []);

    // filter data by education course name
    const filterData = (searchTerm: string) => {
        const filteredData = jsonData.filter((education) =>
            education["Course"].toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    // sort data
    const sortData = () => {
        const sortedData = [...filteredData].sort((a, b) => {
            const aValue = a["Course"].toLowerCase();
            const bValue = b["Course"].toLowerCase();
            return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        });
        setFilteredData(sortedData);
    };

    // sort data order
    useEffect(() => {
        sortData();
    }, [sortOrder]);

    // sort by education column
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
                filteredData.map((education) => (
                    <EducationTable
                        key={education["Course"]}
                        education={education}
                    />
                )).join("");
        }
    };

    // table no results message
    function NoResultsMessage() {
        return (
            <tr>
                <td colSpan={4} className="text-center py-16 text-black">
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
                                Education
                            </h1>
                            {/* header tags */}
                            <div className="mt-4 mb-4 text-white flex">
                                <a className="text-md font-bold text-center rounded-full inline-flex items-center">
                                    {/* animation */}
                                    <span className="text-normal flex items-center">
                                        <span className="w-2 h-2 mr-2 bg-white animate-pulse rounded-full flex flex-shrink-0"></span>
                                    </span>
                                    {/* header tag text */}
                                    In development
                                </a>
                                {/* header tags divider */}
                                <a className="ml-3 mr-3 text-md text-center rounded-full inline-flex items-center">
                                    <span className="text-normal flex items-center">|</span>
                                </a>
                                {/* header tag  */}
                                <a className="text-white text-md text-center inline-flex items-center">
                                    {/* pin location icon */}
                                    <img src={pin} className="h-5 w-5 mr-1" />
                                    Croatia
                                </a>
                            </div>
                            {/* header description */}
                            <p className="w-full sm:w-3/4 text-lg mt-2 text-white">
                                A curated datalog of IT (ICT) <span className="bg-[#333] px-1 py-0.3 rounded-lg">education courses</span> {" "} and <span className="bg-[#333] px-1 py-0.3 rounded-lg">classes</span>{" "} accessible in Croatia.
                            </p>
                        </div>
                    </div>
                    {/* search & contribute div */}
                    <div className="flex flex-col items-center max-w-screen-xl sm:px-4 px-0 mx-auto mt-8 mb-4 sm:flex-row sm:justify-between">
                        {/* search form */}
                        <form className="flex items-center animation glow delay-1">
                            <div className="relative sm:w-96 w-80">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    {/* search icon */}
                                    <img src={search} className="h-4 w-4" alt="search icon" />
                                </div>
                                {/* search input */}
                                <input value={searchTerm} onChange={handleSearchInputChange} type="text" id="searchInput" className="block w-full p-4 pl-10 text-base text-black border border-gray-300 rounded-2xl focus:ring-black focus:border-black" placeholder="Search by education" />
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
                                    Can't find your favorite education?{' '}
                                    <span className="underline sm:text-lg text-md">
                                        Suggest it!
                                    </span>
                                </h1>
                            </Link>
                        </div>
                    </div>
                    {/* table div */}
                    <div className="max-w-screen-xl mt-8 mb-40 sm:px-4 px-0 mx-auto relative overflow-x-auto">
                        {/* table */}
                        <table className="mt-0 text-left w-full mx-auto">
                            {/* table header */}
                            <thead className="text-lg text-white animation glow delay-2">
                                <tr className="bg-[#222]">
                                    {/* course */}
                                    <th onClick={handleSort} className="sm:px-6 px-6 py-7 whitespace-nowrap cursor-pointer rounded-l-xl">
                                        <h1 className="inline-flex">Course</h1>
                                        {sortOrder === "asc" ? <img src={chevronUp} className="h-5 w-5 ml-1 inline-flex" alt="sort arrow up" /> : <img src={chevronDown} className="h-5 w-5 ml-1 inline-flex" alt="sort arrow down" />}
                                    </th>
                                    {/* topics & departments */}
                                    <th className="sm:px-0 px-6 py-3 whitespace-nowrap">
                                        <h1>Topics & Departments</h1>
                                    </th>
                                    {/* facilitator */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>Organizer</h1>
                                    </th>
                                    {/* apply */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap rounded-r-xl">
                                        <h1>Enroll</h1>
                                    </th>
                                </tr>
                            </thead>
                            {/* table body */}
                            <tbody id="companyTableBody" className="animation glow delay-3">
                                {/* loading */}
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-16">
                                            <div className="flex items-center justify-center">
                                                {/*  loading spinner icon */}
                                                <img src={loading} className="h-10 w-10 animate-spin" alt="loading icon" />
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredData.length === 0 ? (
                                        <NoResultsMessage />
                                    ) : (
                                        filteredData.map((education) => (
                                            <EducationTable key={education["Course"]} education={education} />
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

export default Education;