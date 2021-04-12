import strings from '../strings/stages';
import { find } from 'lodash';

const ListItem = ({item: { customer, progress, stage, ych_link, ych_name }, index}) => {
    const _stage = find(strings, {code: stage});

    return (
        <article className="py-4 px-4 md:px-0 flex space-x-4">
            <div className="flex items-center justify-center w-1/12 text-xl text-gray-700 leading-6 font-bold">
                <span>{`${index}`}</span>
            </div>
            <div className="min-w-0 relative flex-auto w-11/12">
                <h2 className="text-lg font-semibold text-black mb-0.5">
                    {customer}
                </h2>
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <div className="flex-none w-full mt-0.5 font-normal text-gray-600">
                        {ych_link === null ? (
                            <span className="inline text-black">{ych_name}</span>
                        ) : (
                            <a href={ych_link} className="inline-flex text-gray-500 items-center justify-center hover:text-indigo-500" rel="nofollow" target="_blank">
                                {ych_name}
                                <svg className="w-3 h-3 ml-1" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                                          className></path>
                                </svg>
                            </a>
                        )}
                    </div>
                    <div className={`absolute top-0 right-0 rounded-full bg-${_stage.bg} text-${_stage.color} px-3 py-0.5 sm:flex lg:hidden xl:flex items-center space-x-1`}>
                        {_stage.label}
                    </div>
                </dl>
                { progress > 0 && (
                <div className={`mt-3 mb-1 bg-gray-50 rounded-md shadow-ms`}>
                    <div className={`relative mt-2 bg-${_stage.bg} py-0 text-center rounded-md shadow-${_stage.bg}`} style={{width: `${progress}%`}}>
                        <div className={`text-${_stage.color} font-medium text-xs inline-block px-2 rounded-md`}>{`${progress}%`}</div>
                        {/*<div className="absolute right-0 top-0 bottom-0 w-5 overflow-hidden">*/}
                        {/*    <div className="ocean">*/}
                        {/*        <div className="wave"></div>*/}
                        {/*        <div className="wave"></div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                )}
            </div>
        </article>
    )
};

export default ListItem;