import { Link } from 'react-router-dom';
// import icons
import github from '../assets/icons/github-light.svg';
import readme from '../assets/icons/readme.svg';
import heart from '../assets/icons/heart.svg';
import user from '../assets/icons/user.svg';
import mail from '../assets/icons/mail.svg';
import arrowDark from '../assets/icons/arrow-dark.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

function Contribute() {
    return (
        <div className="pl-4 pr-4 pt-12 mb-32 sm:ml-56">
            <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto">
                <div className="mt-24 sm:px-4 px-0 mx-auto max-w-screen-xl">
                    {/* header */}
                    <div className="mb-4 sm:p-16 p-8 bg-[#222] sm:rounded-3xl rounded-xl text-left shadow-sm shadow-black">
                        {/* header title */}
                        <h1 className="sm:text-6xl text-5xl text-white font-bold">
                            Contribute
                        </h1>
                        {/* header tags */}
                        <div className="flex text-white mt-2">
                            <a className="rounded-full text-md text-center inline-flex items-center">
                                <span className="flex items-center text-normal">
                                    {/* header animation */}
                                    <span className="animate-pulse flex w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                                </span>
                                Accepting contributions
                            </a>
                            {/* header tags divider */}
                            <a className="rounded-full text-md text-center inline-flex items-center ml-3 mr-3">
                                <span className="flex items-center text-normal">
                                    |
                                </span>
                            </a>
                            <a className="text-white text-md text-center inline-flex items-center">
                                {/* contribute heart icon */}
                                <img src={heart} className="h-5 w-5" alt="contribute heart icon" />
                            </a>
                        </div>
                        {/* header tags */}
                        <div className="flex mt-4">
                            {/* github */}
                            <Link to="">
                                <a className="inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center bg-[#222] text-white rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                    <img src={github} className="h-6 w-6 mr-1" alt="github" />
                                    Issues
                                </a>
                            </Link>
                            {/* form */}
                            <a href="#form" className="ml-3 inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center bg-[#222] text-white rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                <img src={readme} className="h-6 w-6 mr-1" alt="readme" />
                                Form
                            </a>
                        </div>
                    </div>
                    {/* Contribute */}
                    <div className="mt-8 mb-4 sm:p-16 p-8 bg-[#F5F5F5] rounded-xl text-left">
                        <div className="text-lg sm:w-4/5 w-full mx-auto">
                            <p className="pt-4 pb-4 text-2xl font-bold">
                                Contributions
                            </p>
                            <p className="pt-4 pb-4">
                                Thank you for your interest in contributing!
                            </p>
                            <p className="pt-4 pb-4">
                                We value your input and encourage you to share your expertise by suggesting new additions, updates, and providing valuable feedback. This collaborative effort ensures that the directory remains a dynamic and up-to-date source of information, benefiting both professionals and beginners in the field.
                            </p>
                            <p className="pt-4 pb-4">
                                Contributions are available via two methods — by submitting a form, or <a href="" className="underline">opening an issue on the GitHub repository</a>. Both methods are equally valid, and will be reviewed and processed.
                            </p>
                            <div className="text-center mt-16">
                                <a className="inline-flex items-center justify-center px-8 py-4 text-lg text-center bg-[#222] text-white rounded">
                                    Submit a contribution
                                    <img src={arrowDown} className="h-6 w-6 ml-2" alt="arrow" />
                                </a>
                            </div>
                        </div>
                        {/* form div */}
                        <div className="max-w-screen-lg mx-auto mt-16 mb-4 sm:p-12 p-8 bg-[#222] rounded-xl">
                            {/* form section */}
                            <section id="form">
                                {/* form */}
                                <form action="https://api.web3forms.com/submit" method="POST">
                                    <input type="hidden" name="access_key" value="8177c7eb-f0ce-4a29-b48c-40b4d35a7945" />
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mt-4 group">
                                            {/* label name */}
                                            <label htmlFor="name" className="block mb-2 text-md text-white">
                                                Name / Alias
                                            </label>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md">
                                                    <img src={user} className="h-4 w-4" alt="user" />
                                                </span>
                                                {/* input name */}
                                                <input type="text" name="name" id="name" className="rounded-none rounded-r-lg bg-[#F9FAFB] border border-[#F9FAFB] text-black focus:ring-[#333] focus:ring-1 focus:border-[#333] block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="John Doe" />
                                            </div>

                                        </div>
                                        <div className="relative z-0 w-full mt-4 group">
                                            {/* label email */}
                                            <label htmlFor="email" className="block mb-2 text-md text-white">
                                                Email
                                            </label>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md">
                                                    <img src={mail} className="h-4 w-4" alt="mail" />
                                                </span>
                                                {/* input email */}
                                                <input type="email" name="email" id="email" className="rounded-none rounded-r-lg bg-[#F9FAFB] border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="john.doe@gmail.com" />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-300">Optional - if you want to be contacted back.</p>
                                        </div>
                                    </div>
                                    {/* label message */}
                                    <label htmlFor="message" className="block mt-4 mb-2 text-md font-medium text-white">
                                        Your message
                                    </label>
                                    {/* textarea message */}
                                    <textarea name="message" id="message" rows={3} className="block p-2.5 w-full text-sm text-gray-900 bg-[#F9FAFB] rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500" placeholder="Hi, I would like to submit a company 'Google' to be added." required></textarea>
                                    {/* submit */}
                                    <button type="submit" className="mt-8 inline-flex items-center justify-center px-5 py-3 sm:text-lg text-md font-medium text-center bg-gray-200 text-black rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                                        Submit
                                        <img src={arrowDark} className="h-6 w-6 ml-2" alt="arrow" />
                                    </button>
                                    {/* input hidden */}
                                    <input type="hidden" name="redirect" value=""></input>
                                    <input type="hidden" name="from_name" value=""></input>
                                    <input type="hidden" name="subject" value=""></input>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contribute;