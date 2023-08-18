import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import favicon from "../../public/favicon.svg";
import menu from "../assets/icons/menu.svg";
import chevron from "../assets/icons/chevron-right.svg";
import company from "../assets/icons/company-dark.svg";
import conference from "../assets/icons/conference-dark.svg";
import internship from "../assets/icons/internship-dark.svg";
import education from "../assets/icons/education-dark.svg";
import certificate from "../assets/icons/certificate-dark.svg";
import analytics from "../assets/icons/analytics-dark.svg";

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

    return (
        <div>
            {/* navbar */}
            <nav className="fixed top-0 z-50 w-full bg-[#F9FAFB] border-b border-gray-100">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <a
                                aria-controls="logo-sidebar"
                                type="button"
                                onClick={toggleSidebar}
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                <img src={menu} className="h-6 w-6" />
                            </a>
                            <Link to="/" className="flex ml-2 md:mr-24">
                                <img
                                    src={favicon}
                                    className="h-14 mr-3"
                                    alt=""
                                />
                                <span className="self-center text-2xl pt-2 font-bold sm:text-3xl whitespace-nowrap">

                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* sidebar */}
            <aside
                id="logo-sidebar"
                className={`transition-transform left-0 top-0 -translate-x-full fixed top-0 left-0 z-40 w-56 h-screen pt-36 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } bg-[#F9FAFB] border-r border-gray-100 sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#F9FAFB]">
                    <ul className="space-y-3 font-medium">
                        <li>
                            <Link
                                to="/companies"
                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group ${activeClass(
                                    "/companies"
                                )}`}
                            >
                                <img
                                    src={company}
                                    className="ml-1 h-6 w-6"
                                    alt="company"
                                />
                                <span className="flex-1 ml-2 whitespace-nowrap">Companies</span>
                                <span className="inline-flex items-center justify-center px-1.5 ml-0 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">#</span>
                                <span>
                                    <img
                                        src={chevron}
                                        className="h-5 w-5"
                                        alt="chevron"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/conferences"

                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group ${activeClass(
                                    "/conferences"
                                )}`}
                            >
                                <img
                                    src={conference}
                                    className="ml-1 h-6 w-6"
                                    alt="conference"
                                />
                                <span className="flex-1 ml-2 whitespace-nowrap">Conferences</span>
                                <span>
                                    <img
                                        src={chevron}
                                        className="h-5 w-5"
                                        alt="chevron"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/internships"

                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group ${activeClass(
                                    "/internships"
                                )}`}
                            >
                                <img
                                    src={internship}
                                    className="ml-1 h-6 w-6"
                                    alt="internship"
                                />
                                <span className="flex-1 ml-2 whitespace-nowrap">Internships</span>
                                <span>
                                    <img
                                        src={chevron}
                                        className="h-5 w-5"
                                        alt="chevron"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/education"

                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group ${activeClass(
                                    "/education"
                                )}`}
                            >
                                <img
                                    src={education}
                                    className="ml-1 h-6 w-6"
                                    alt="education"
                                />
                                <span className="flex-1 ml-2 whitespace-nowrap">Education</span>
                                <span>
                                    <img
                                        src={chevron}
                                        className="h-5 w-5"
                                        alt="chevron"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/certificates"
                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group ${activeClass(
                                    "/certificates"
                                )}`}
                            >
                                <img
                                    src={certificate}
                                    className="ml-1 h-6 w-6"
                                    alt="certificate"
                                />
                                <span className="flex-1 ml-2 whitespace-nowrap">Certificates</span>
                                <span>
                                    <img
                                        src={chevron}
                                        className="h-5 w-5"
                                        alt="chevron"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <hr className="my-8"></hr>
                        </li>
                        <li>
                            <Link
                                to="/analytics"

                                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group ${activeClass(
                                    "/analytics"
                                )}`}
                            >
                                <img
                                    src={analytics}
                                    className="ml-1 h-6 w-6"
                                    alt="analytics"
                                />
                                <span className="flex-1 ml-2 whitespace-nowrap">Analytics</span>
                                <span>
                                    <img
                                        src={chevron}
                                        className="h-5 w-5"
                                        alt="chevron"
                                    />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;