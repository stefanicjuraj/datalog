// import icons
import { Link } from 'react-router-dom';
import pin from '../assets/icons/pin.svg';
import search from '../assets/icons/search.svg';

function Conferences() {
    return (
        <div className="pl-4 pr-4 pt-12">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="relative overflow-x-auto mb-40 rounded-lg">
                    <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-xl">
                        {/* header */}
                        <div className="mb-4 sm:p-16 p-8 bg-[#222] rounded-3xl text-left shadow-sm shadow-black">
                            {/* header title */}
                            <h1 className="sm:text-6xl text-5xl text-white font-bold">
                                Conferences
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
                                A curated datalog of IT (ICT) <span className="bg-[#333] px-1 py-0.3 rounded-lg">conferences</span>, {" "} <span className="bg-[#333] px-1 py-0.3 rounded-lg">conventions</span>, {" "} and <span className="bg-[#333] px-1 py-0.3 rounded-lg">seminars</span> occurring in Croatia.
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
                                <input type="email" id="searchInput" className="block w-full p-4 pl-10 text-base text-black border border-gray-300 rounded-2xl focus:ring-black focus:border-black" placeholder="Search by conference" />
                                <p id="searchResults" className="text-black absolute right-2 bottom-2 bg-[#eee] focus:ring-4 focus:outline-none rounded-xl text-base px-5 py-2">
                                    {/* search filtered data - results count */}
                                    results
                                </p>
                            </div>
                        </form>
                        <div className="flex items-center">
                            {/* contribute text prompt */}
                            <Link to="/contribute" className="sm:text-lg text-md sm:mt-0 mt-4 animation glow delay-1">
                                <h1 className="mr-3 sm:text-lg text-md text-[#AAA] hover:text-black whitespace-nowrap">
                                    Can't find your favorite conference?{' '}
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
                            <thead className="text-xl text-white animation glow delay-2">
                                <tr className="bg-[#222]">
                                    {/* conference */}
                                    <th className="sm:px-6 px-6 py-7 whitespace-nowrap cursor-pointer rounded-l-xl">
                                        <h1>Conference</h1>
                                    </th>
                                    {/* topics & departments */}
                                    <th className="sm:px-0 px-6 py-3 whitespace-nowrap">
                                        <h1>Topics & Departments</h1>
                                    </th>
                                    {/* host */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>Host</h1>
                                    </th>
                                    {/* location */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>Location</h1>
                                    </th>
                                    {/* date */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap">
                                        <h1>Date</h1>
                                    </th>
                                    {/* tickets */}
                                    <th className="sm:px-3 px-6 py-3 whitespace-nowrap rounded-r-xl">
                                        <h1>Tickets</h1>
                                    </th>
                                </tr>
                            </thead>
                            {/* table body */}
                            <tbody id="companyTableBody" className="animation glow delay-3">
                                <tr>
                                    <td colSpan={5} className="text-center py-16">
                                        <div className="flex items-center justify-center">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conferences;