import { Link } from 'react-router-dom';
import conference from '../assets/icons/conference-light.svg';
import internship from '../assets/icons/internship-light.svg';
import education from '../assets/icons/education-light.svg';
import company from '../assets/icons/company-light.svg';
import certificate from '../assets/icons/certificate-light.svg';
import analytics from '../assets/icons/analytics-light.svg';
import arrow from '../assets/icons/arrow-dark.svg';
import arrowCorner from '../assets/icons/arrow-corner.svg';
import pin from '../assets/icons/pin.svg';

function Home() {
    return (
        <div className="pl-4 pr-4 pt-12">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-xl">
                    {/* header */}
                    <div className="mb-4 sm:p-16 p-8 bg-[#222] rounded-3xl text-left shadow-sm shadow-black animation glow delay-1">
                        {/* header title */}
                        <h1 className="sm:text-6xl text-5xl text-white font-bold">
                            IT Datalog
                        </h1>
                        {/* header tags */}
                        <div className="flex text-white mt-4 mb-4">
                            <p className="rounded-full text-md font-bold text-center inline-flex items-center">
                                <span className="flex items-center text-normal">
                                    <span className="animate-pulse flex w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                                </span>
                                In development
                            </p>
                            {/* header tags divider */}
                            <p className="rounded-full text-md text-center inline-flex items-center ml-3 mr-3">
                                <span className="flex items-center text-normal">
                                    |
                                </span>
                            </p>
                            <h1 className="text-white text-md text-center inline-flex items-center">
                                <img src={pin} className="h-5 w-5 mr-1" alt="location icon" />
                                Croatia
                            </h1>
                        </div>
                        {/* header description */}
                        <h1 className="w-full sm:w-3/4 text-lg mt-2 text-white">
                            A curated data catalog of IT (ICT) {" "}
                            <span className="bg-[#333] px-1 py-0.3 rounded-lg">companies</span>, {" "}
                            <span className="bg-[#333] px-1 py-0.3 rounded-lg">conferences</span>, {" "}
                            <span className="bg-[#333] px-1 py-0.3 rounded-lg">internships</span>, {" "}
                            <span className="bg-[#333] px-1 py-0.3 rounded-lg">education</span>, {" "}
                            <span className="bg-[#333] px-1 py-0.3 rounded-lg">certificates</span>, {" "} and {" "}
                            <span className="bg-[#333] px-1 py-0.3 rounded-lg">analytics</span>
                            {" "}available in Croatia, within the industry departments of Information Technology, Software Development, Web Development, IT Services, and IT Consulting.
                        </h1>
                        {/* read more */}
                        <Link to="/about">
                            <h1 className="mt-8 inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center bg-[#F9FAFB] text-black rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                Read more
                                <img src={arrow} className="h-6 w-6 ml-2" alt="read more icon" />
                            </h1>
                        </Link>
                        {/* contribute */}
                        <Link to="/contribute">
                            <h1 className="ml-3 mt-4 inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center text-white rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                Contribute
                            </h1>
                        </Link>
                    </div>
                    {/* cards */}
                    <div className="mt-24 mb-24 max-w-screen-xl space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                        {/* companies */}
                        <Link to="/companies">
                            <div className="mb-8 px-8 py-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-inner hover:shadow-gray-300 animation glow delay-2">
                                <div className="flex justify-center items-center mt-4 mb-4 w-10 h-10 rounded-full bg-gray-800 lg:h-12 lg:w-12">
                                    <img src={company} className="h-6 w-6" alt="companies icon" />
                                </div>
                                <h1 className="mb-4 text-xl font-bold">
                                    <span className="text-2xl">550+ {" "}</span>
                                    Companies
                                </h1>
                                <h1 className="mb-2">
                                    View companies conducting business operations, providing services, or offering consultancy in Croatia.
                                </h1>
                                <div className="flex flex-row-reverse">
                                    <div className="px-1 py-1"><img src={arrowCorner} className="h-7 w-7" alt="arrow" /></div>
                                </div>
                            </div>
                        </Link>
                        {/* conferences */}
                        <Link to="/conferences">
                            <div className="mb-8 px-8 py-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-inner hover:shadow-gray-300 animation glow delay-3">
                                <div className="flex justify-center items-center mt-4 mb-4 w-10 h-10 rounded-full bg-gray-800 lg:h-12 lg:w-12">
                                    <img src={conference} className="h-6 w-6" alt="conferences icon" />
                                </div>
                                <h1 className="mb-4 text-xl font-bold">
                                    <span className="text-2xl">10+ {" "}</span>
                                    Conferences
                                </h1>
                                <h1 className="mb-2">
                                    Attend conferences and presentations with industry knowledge professionals and enthusiasts.
                                </h1>
                                <div className="flex flex-row-reverse">
                                    <div className="px-1 py-1"><img src={arrowCorner} className="h-7 w-7" alt="arrow icon" /></div>
                                </div>
                            </div>
                        </Link>
                        {/* internships */}
                        <Link to="/internships">
                            <div className="mb-8 px-8 py-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-inner hover:shadow-gray-300 animation glow delay-4">
                                <div className="flex justify-center items-center mt-4 mb-4 w-10 h-10 rounded-full bg-gray-800 lg:h-12 lg:w-12">
                                    <img src={internship} className="h-6 w-6" alt="internships icon" />
                                </div>
                                <h1 className="mb-4 text-xl font-bold"><span className="text-2xl">10+</span>   Internships</h1>
                                <h1 className="mb-2">
                                    Start your career and enhance your professional knowledge by applying to offered internship programs.
                                </h1>
                                <div className="flex flex-row-reverse">
                                    <div className="px-1 py-1"><img src={arrowCorner} className="h-7 w-7" alt="arrow" /></div>
                                </div>
                            </div>
                        </Link>
                        {/* education */}
                        <Link to="/education">
                            <div className="mb-8 px-8 py-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-inner hover:shadow-gray-300 animation glow delay-5">
                                <div className="flex justify-center items-center mt-4 mb-4 w-10 h-10 rounded-full bg-gray-800 lg:h-12 lg:w-12">
                                    <img src={education} className="h-6 w-6" alt="education icon" />
                                </div>
                                <h1 className="mb-4 text-xl font-bold"><span className="text-2xl">40+</span>  Education courses</h1>
                                <h1 className="mb-2">
                                    Enrol into provided courses, lectures, and classes to learn more about IT and software development.
                                </h1>
                                <div className="flex flex-row-reverse">
                                    <div className="px-1 py-1"><img src={arrowCorner} className="h-7 w-7" alt="arrow icon" /></div>
                                </div>
                            </div>
                        </Link>
                        {/* certificates */}
                        <Link to="/certificates">
                            <div className="mb-8 px-8 py-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-inner hover:shadow-gray-300 animation glow delay-6">
                                <div className="flex justify-center items-center mt-4 mb-4 w-10 h-10 rounded-full bg-gray-800 lg:h-12 lg:w-12">
                                    <img src={certificate} className="h-6 w-6" alt="certificates icon" />
                                </div>
                                <h1 className="mb-4 text-xl font-bold"><span className="text-2xl">10+</span>  Certificates</h1>
                                <h1 className="mb-2">
                                    Search for the certifications to master and demonstrate your professional knowledge and skills.
                                </h1>
                                <div className="flex flex-row-reverse">
                                    <div className="px-1 py-1"><img src={arrowCorner} className="h-7 w-7" alt="arrow icon" /></div>
                                </div>
                            </div>
                        </Link>
                        {/* analytics */}
                        <Link to="/analytics">
                            <div className="mb-8 px-8 py-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-inner hover:shadow-gray-300 animation glow delay-7">
                                <div className="flex justify-center items-center mt-4 mb-4 w-10 h-10 rounded-full bg-gray-800 lg:h-12 lg:w-12">
                                    <img src={analytics} className="h-6 w-6" alt="analytics icon" />
                                </div>
                                <h1 className="mb-4 text-xl font-bold"><span className="text-2xl">10+</span> Analytics & Insights </h1>
                                <h1 className="mb-2">
                                    Observe and gain insight into the industry trends, statistics, and data to amplify your decision-making.
                                </h1>
                                <div className="flex flex-row-reverse">
                                    <div className="px-1 py-1"><img src={arrowCorner} className="h-7 w-7" alt="arrow icon" /></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;