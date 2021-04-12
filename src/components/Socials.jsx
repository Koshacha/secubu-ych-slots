import React from "react";

const Socials = ({ discordClick, discordRef }) => {
    return (
        <span className="inline-flex justify-center items-center mt-4 space-x-5">
            <a href="https://ych.commishes.com/user/secubu/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">YCH</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 490 490" aria-hidden="true">
                    <g>
                        <g>
                            <path
                                d="M180.439,342.679c-23.852-23.852-63.353-34.368-99.873-18.984c-32.344,14.59-53.481,46.978-53.833,82.69    c0,39.434-6.87,71.147-13.652,82.09L0,509.568l24.756,1.772c6.064,0.44,12.422,0.66,18.97,0.66    c48.193,0,106.978-12.1,138.721-41.25C213.639,441.682,217.25,379.489,180.439,342.679z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M244.262,279.135c-14.681-14.688-31.222-26.187-48.744-34.531c-15.172,15.654-29.929,31.505-44.266,47.3    c18.763,5.281,36.026,15.167,50.413,29.594c14.407,14.377,24.719,32.302,30.17,51.85c15.613-14.143,31.317-28.707,47.091-43.885    C270.917,311.158,259.325,293.785,244.262,279.135z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M505.32,6.677C494.085-4.544,475.613-9.803,385.789,60.07c-53.438,41.572-108.728,102.36-166.897,160.529l-1.185,1.185    l-0.046-0.027l-0.337,0.339c17.186,9.293,33.435,21.105,48.003,35.682c15.033,14.617,27.173,31.661,36.381,49.788l0.416-0.408    l-0.06-0.101l1.672-1.672c58.14-58.14,106.604-125.724,148.177-179.176C521.726,36.442,516.585,17.941,505.32,6.677z"/>
                        </g>
                    </g>
                </svg>
            </a>
            <a href="https://www.deviantart.com/secubu" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">DeviantArt</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 320 512" aria-hidden="true">
                    <path fill="currentColor"
                          d="M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z"
                          className=""></path>
                </svg>
            </a>
            <a href="https://twitter.com/secubu_art" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        className=""></path>
                </svg>
            </a>
            <span onClick={discordClick} className="shadow-sm active:shadow-inner text-gray-400 text-md cursor-pointer rounded-md shadow-xs p-1 px-2 hover:text-gray-500 flex justify-center items-center bg-gray-100">
                <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 48 48" aria-hidden="true">
                    <path
                        d="M40 12s-4.586-3.59-10-4l-.488.977C34.406 10.176 36.652 11.89 39 14c-4.047-2.066-8.04-4-15-4-6.96 0-10.953 1.934-15 4 2.348-2.11 5.02-4.016 9.488-5.023L18 8c-5.68.535-10 4-10 4s-5.121 7.426-6 22c5.16 5.953 13 6 13 6l1.64-2.184C13.856 36.848 10.716 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.855 4.848-8.64 5.816L33 40s7.84-.047 13-6c-.879-14.574-6-22-6-22zM17.5 30c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4zm13 0c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4z"
                        clip-rule="evenodd" className=""/>
                </svg>
                <div>
                    <span className="font-medium">secubu</span>
                    <span className="text-sm">#2532</span>
                </div>
            </span>
        </span>
    );
}

export default Socials;