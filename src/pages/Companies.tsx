import pin from '../assets/icons/pin.svg';

function Companies() {
    return (
        <div className="p-4 pt-12 sm:ml-56">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="relative overflow-x-auto mb-40 rounded-lg">
                    <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-2xl">
                        {/* header */}
                        <div className="mb-4 sm:p-16 p-8 bg-[#222] rounded-3xl text-left shadow-sm shadow-black">
                            {/* header title */}
                            <h1 className="sm:text-6xl text-5xl text-white font-bold">
                                Companies
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
                                A curated datalog of IT (ICT) <span className="bg-[#333] px-1 py-0.3 rounded-lg">companies</span>, <span className="bg-[#333] px-1 py-0.3 rounded-lg">agencies</span>,{" "} and <span className="bg-[#333] px-1 py-0.3 rounded-lg">consultancies</span> conducting business operations, providing services, or offering consultancy in Croatia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Companies;