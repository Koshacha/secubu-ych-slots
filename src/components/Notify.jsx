import React from "react";

const Notify = ({ show }) => {

    return (
        <div
            className={`transition transform fixed bottom-0 text-center inset-x-0 pb-2 sm:pb-5 ${ show === true ? 'opacity-100 scale-100' : 'opacity-0 scale-0' } translate-y-0 ease-out duration-500 z-30`}>
            <div className="w-auto inline-block mx-auto px-4 sm:px-4">
                <div className="p-2 px-4 rounded-lg bg-red-400 shadow-lg sm:p-3">
                    <div className="text-center">
                        <p className="text-white font-semibold">Copied!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notify;