import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow-dark.svg';

function PageNotFound() {
    return (
        <div className="pl-4 pr-4 pt-12">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-xl">
                    {/* header */}
                    <div className="mb-4 sm:p-16 p-8 bg-[#222] sm:rounded-3xl rounded-xl text-left shadow-sm shadow-black">
                        {/* header title */}
                        <h1 className="sm:text-6xl text-5xl text-white font-bold">
                            404 - Page Not Found
                        </h1>
                        {/* header tags */}
                        <div className="flex text-white mt-2 mb-4">
                            <a className="rounded-full text-md font-bold text-center inline-flex items-center">
                                <span className="flex items-center text-normal">
                                    <span className="animate-pulse flex w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                                </span>
                                Inactive
                            </a>
                        </div>
                        {/* header description */}
                        <p className="w-full sm:w-3/4 text-lg mt-2 text-white">
                            It looks like the page you are looking for does not exist. Please try again by navigating within the sidebar, or returning to the home page by clicking the button below.
                        </p>
                        {/* home */}
                        <Link to="/">
                            <a className="mt-8 inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center bg-[#F9FAFB] text-black rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                Return to home page
                                <img src={arrow} className="h-6 w-6 ml-2" alt="arrow" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;