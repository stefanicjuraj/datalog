import { Link } from 'react-router-dom';
// import icons
import github from '../assets/icons/github.svg';
import like from '../assets/icons/like.svg';
import readme from '../assets/icons/readme.svg';
import info from '../assets/icons/info.svg';
import vercel from '../assets/icons/vercel.svg';

function About() {
    return (
        <div className="pl-4 pr-4 pt-12 mb-32 sm:ml-56">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-xl">
                    {/* header */}
                    <div className="mb-4 sm:p-16 p-8 bg-[#222] sm:rounded-3xl rounded-xl text-left shadow-sm shadow-black">
                        {/* header title */}
                        <h1 className="sm:text-6xl text-5xl text-white font-bold">
                            About
                        </h1>
                        {/* header tags */}
                        <div className="flex text-white mt-2">
                            <a className="rounded-full text-md text-center inline-flex items-center">
                                <span className="flex items-center text-normal">
                                    <span className="animate-pulse flex w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                                </span>
                                Active
                            </a>
                            {/* header tags divider */}
                            <a className="rounded-full text-md text-center inline-flex items-center ml-3 mr-3">
                                <span className="flex items-center text-normal">
                                    |
                                </span>
                            </a>
                            <a className="text-white text-md text-center inline-flex items-center">
                                Deployed on
                                <img src={vercel} className="h-5 w-5 ml-1 mr-1" />
                            </a>
                        </div>
                        {/* header tags */}
                        <div className="flex mt-4">
                            {/* github */}
                            <Link to="">
                                <a className="inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center bg-[#222] text-white rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                    <img src={github} className="h-6 w-6 mr-1" />
                                    GitHub
                                </a>
                            </Link>
                            {/* readme */}
                            <Link to="">
                                <a className="ml-3 inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center bg-[#222] text-white rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                    <img src={readme} className="h-6 w-6 mr-1" />
                                    ReadMe
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* about */}
                    <div className="mt-8 mb-4 sm:p-16 p-8 bg-[#F9FAFB] rounded-xl text-left">
                        <div className="text-lg sm:w-4/5 w-full mx-auto">
                            <p className="pb-4">
                                -- ----- is a comprehensive data list of IT (ICT) companies, conferences, internships, education, certificates, and analytics available in Croatia, within the industry departments of Information Technology, Software Development, Web Development, IT Services, and IT Consulting.
                            </p>
                            {/* disclaimer */}
                            <div id="disclaimer" className="mt-4 mb-4 sm:w-4/5 w-full p-8 shadow-sm shadow-black rounded-3xl bg-[#222]" role="alert">
                                <div className="flex items-center">
                                    <img src={info} className="h-5 w-5 mr-1" />
                                    <h3 className="text-lg font-medium text-white">Disclaimer</h3>
                                </div>
                                <div className="mt-4 mb-4 p-1 text-sm text-white">
                                    -- ----- does not claim to provide a complete data list of all IT companies in existence. Rather, it serves as a curated selection based on a combination of filtering criteria by industry department, location, data and information availability.
                                </div>
                                <div className="flex">
                                    <button type="button" data-dismiss-target="#disclaimer" aria-label="Close" className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                        <img src={like} className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <p className="pt-4 pb-4">
                                While the majority of listed entities in the directory are founded or based in Croatia, there are instances where certain entities conduct their business, offer services and consultancy, have offices or employ individuals within Croatia while not being headquartered there.
                            </p>
                            <p className="pt-4 pb-4 text-2xl font-bold">
                                Regular updates
                            </p>
                            <p className="pt-4 pb-4">
                                To ensure accuracy and relevancy, regular updates are conducted on a monthly basis. This involves the addition of newly established entities while removing inactive or defunct entities from the directory. By maintaining this approach, the focus is to offer a reliable and up-to-date resource for seeking information about IT in Croatia.

                            </p>
                            <p className="pt-4 pb-4 text-2xl font-bold">
                                Contributions
                            </p>
                            <p className="pt-4 pb-4">
                                Contributions from the community are encouraged and more than welcome to further enhance the directory's value and comprehensiveness, allowing users to suggest additions, updates or feedback. Collaboration with the community ensures the directory remains a reliable and robust resource in the IT industry in Croatia.
                            </p>
                            {/* contribute */}
                            <Link to="/contribute">
                                <a href="#" className="mt-4 mb-4 inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center text-black rounded-lg focus:ring-1 focus:ring-white border-black border hover:underline hover:shadow-sm hover:shadow-white">
                                    Contribute
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;