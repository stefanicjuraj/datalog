import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import favicon from "../../public/favicon-light.svg";
import menu from "../assets/icons/menu-light.svg";
import chevron from "../assets/icons/chevron-right.svg";
import company from "../assets/icons/company-dark.svg";
import conference from "../assets/icons/conference-dark.svg";
import internship from "../assets/icons/internship-dark.svg";
import education from "../assets/icons/education-dark.svg";
import certificate from "../assets/icons/certificate-dark.svg";
import analytics from "../assets/icons/analytics-dark.svg";
import contribute from "../assets/icons/heart-dark.svg";
// import github from "../assets/icons/github-dark.svg";
// import linkedin from "../assets/icons/linkedin-dark.svg";

const Sidebar: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activePath, setActivePath] = useState("/");
    const location = useLocation();

    // toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
    };

    // close sidebar
    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    // close sidebar on click outside
    useEffect(() => {
        const links = document.querySelectorAll("#logo-sidebar a");
        links.forEach((link) => {
            link.addEventListener("click", closeSidebar);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", closeSidebar);
            });
        };
    }, []);

    // active path
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    // active class
    const activeClass = (path: string) => {
        return activePath === path ? 'bg-gray-200' : "";
    };

    // format date
    const formatDate = (isoDate: string | number | Date) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
        });
    };

    // fetch latest commit date from github
    const latestCommit = async () => {
        const githubRepo = "stefanicjuraj/IT-Datalog";
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/commits`);
        const data = await response.json();
        const latestCommitDate = formatDate(data[0].commit.author.date);
        return latestCommitDate;
    };

    const [date, setDate] = useState("");

    // update the date
    const updateDate = async () => {
        const latestCommitDate = await latestCommit();
        setDate(latestCommitDate);
    };

    useEffect(() => {
        updateDate();
    }, []);

    return (
        <div>
            {/* navbar */}
            <nav className="fixed top-0 z-50 w-full bg-[#222] shadow-sm shadow-black">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            {/* navbar toggle menu */}
                            <a aria-controls="logo-sidebar" type="button" onClick={toggleSidebar} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-[#333] cursor-pointer">
                                <img src={menu} className="h-6 w-6" alt="menu" />
                            </a>
                            {/* favicon */}
                            <Link to="/" className="flex ml-2 md:mr-24">
                                <img src={favicon} className="h-14 w-14 mr-3" alt="favicon" />
                                <span className="self-center text-2xl pt-2 font-bold sm:text-3xl whitespace-nowrap">
                                </span>
                            </Link>
                        </div>
                        {/* last updated */}
                        <div className="flex items-center mr-3">
                            {/* <img src={github} className="mr-3 h-7 w-7" alt="github" /> */}
                            <div>
                                <p className="text-md text-white">Last updated:</p>
                                <p className="text-md text-white">{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* sidebar */}
            <aside id="logo-sidebar" className={`transition-transform left-0 top-0 fixed top-0 left-0 z-40 w-56 h-screen pt-36 transition-transform ${sidebarOpen ? "md:-translate-x-0" : "md:-translate-x-full"} bg-[#F9FAFB] border-r border-[#EEE] ${sidebarOpen ? "-translate-x-0" : "-translate-x-full"}`} aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#F9FAFB]">
                    <ul className="space-y-3 font-medium">
                        <li>
                            {/* companies */}
                            <Link to="/companies" className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${activeClass("/companies")}`}>
                                <img src={company} className="ml-1 h-6 w-6" alt="company icon" />
                                <span className="flex-1 ml-2 whitespace-nowrap">
                                    Companies
                                </span>
                                <span className="inline-flex items-center justify-center px-1.5 ml-0 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
                                    #
                                </span>
                                <img src={chevron} className="h-5 w-5" alt="chevron" />
                            </Link>
                        </li>
                        <li>
                            {/* conferences */}
                            <Link to="/conferences" className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${activeClass("/conferences")}`}>
                                <img src={conference} className="ml-1 h-6 w-6" alt="conferences icon" />
                                <span className="flex-1 ml-2 whitespace-nowrap">
                                    Conferences
                                </span>
                                <img src={chevron} className="h-5 w-5" alt="chevron" />
                            </Link>
                        </li>
                        <li>
                            {/* internships */}
                            <Link
                                to="/internships" className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${activeClass("/internships")}`}>
                                <img src={internship} className="ml-1 h-6 w-6" alt="internships icon" />
                                <span className="flex-1 ml-2 whitespace-nowrap">
                                    Internships
                                </span>
                                <img src={chevron} className="h-5 w-5" alt="chevron" />
                            </Link>
                        </li>
                        <li>
                            {/* education */}
                            <Link to="/education" className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${activeClass("/education")}`}>
                                <img src={education} className="ml-1 h-6 w-6" alt="education icon" />
                                <span className="flex-1 ml-2 whitespace-nowrap">
                                    Education
                                </span>
                                <img src={chevron} className="h-5 w-5" alt="chevron" />
                            </Link>
                        </li>
                        <li>
                            {/* certificates */}
                            <Link to="/certificates" className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${activeClass("/certificates")}`} >
                                <img src={certificate} className="ml-1 h-6 w-6" alt="certificates icon" />
                                <span className="flex-1 ml-2 whitespace-nowrap">
                                    Certificates
                                </span>
                                <img src={chevron} className="h-5 w-5" alt="chevron" />
                            </Link>
                        </li>
                        <li>
                            <hr className="my-8"></hr>
                        </li>
                        <li>
                            {/* analytics */}
                            <Link to="/data" className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${activeClass("/analytics")}`} >
                                <img src={analytics} className="ml-1 h-6 w-6" alt="analytics icon" />
                                <span className="flex-1 ml-2 whitespace-nowrap">
                                    Data Overview
                                </span>
                                <img src={chevron} className="h-5 w-5" alt="chevron" />
                            </Link>
                        </li>
                        <li>
                            {/* contribute */}
                            <Link to="/contribute" className={`flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${activeClass("/contribute")}`} >
                                <img src={contribute} className="ml-1 h-6 w-6" alt="contribute icon" />
                                <span className="flex-1 ml-2 whitespace-nowrap">
                                    Contribute
                                </span>
                                <img src={chevron} className="h-5 w-5" alt="chevron" />
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* sidebar footer */}
                <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex bg-[#F9FAFB] z-20">
                    {/* github */}
                    {/* <a href="#" className="inline-flex justify-center p-2 text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"> */}
                    {/* github icon */}
                    {/* <img src={github} className="ml-1 h-6 w-6" alt="github" /> */}
                    {/* </a> */}
                    {/* linkedin */}
                    {/* <a href="#" className="inline-flex justify-center p-2 text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"> */}
                    {/* linkedin icon */}
                    {/* <img src={linkedin} className="ml-1 h-6 w-6" alt="linkedin" /> */}
                    {/* </a> */}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;