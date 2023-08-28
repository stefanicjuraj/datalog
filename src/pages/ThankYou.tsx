import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow-dark.svg';

function ThankYou() {
    return (
        <div className="p-4 pt-12 sm:ml-56 animation">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="relative overflow-x-auto mb-40 rounded-lg">
                    <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-2xl">
                        {/* header */}
                        <div className="mb-4 sm:p-16 p-8 bg-[#222] sm:rounded-3xl rounded-xl text-left shadow-sm shadow-black animation glow delay-1">
                            {/* header title */}
                            <h1 className="sm:text-6xl text-5xl text-white font-bold">
                                Submitted!
                            </h1>
                            {/* header description */}
                            <p className="mt-4 w-full sm:w-3/4 text-lg text-white">
                                Thank you for your contribution!
                            </p>
                            <p className="mt-2 w-full sm:w-3/4 text-lg text-white">
                                Your contribution is processed, and we look forward to integrating your input.
                            </p>
                            {/* contribute */}
                            <Link to="/contribute">
                                <a className="mt-8 mr-3 px-5 py-3 sm:text-lg text-md font-medium inline-flex items-center justify-center text-center bg-[#F9FAFB] text-black rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                    Submit another contribution
                                    <img src={arrow} className="h-6 w-6 ml-2" />
                                </a>
                            </Link>
                            {/* home */}
                            <Link to="/">
                                <a className="mt-4 px-5 py-3 sm:text-lg text-md font-medium inline-flex items-center justify-center text-center bg-[#222] text-[#F9FAFB] rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                    Home
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;