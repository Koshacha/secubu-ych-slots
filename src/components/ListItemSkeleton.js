const ListItemSkeleton = () => {
    return (
        <article className="p-4 flex space-x-4">
            <div className="min-w-0 w-100 relative flex-auto sm:pr-20 lg:pr-0">
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <div className="skeleton-box flex-none w-1/2 mt-0.5 font-normal">{' '}</div>
                </dl>
                <div className="skeleton-box mt-3 mb-1 h-5 relative w-full rounded-full overflow-hidden"></div>
            </div>
        </article>
    );
};

export default ListItemSkeleton;