const PosterItem = ({
    image,
    category,
    categoryTwo,
    title,
    authorImage,
    authorName,
    date,
    color,
    colorTwo,
}) => {
    const colorDefault = 'text-black-900';

    return (
        <>
            <div className="cursor-pointer transition-all">
                <div className="hover:scale-105 duration-300">
                    <img
                        loading="lazy"
                        src={image}
                        alt="Thumbnail"
                        className="w-[460px] rounded h-[259px] transition-all"
                    />
                </div>
                <div className={category ? 'mt-2 flex gap-x-2' : 'mt-2'}>
                    {categoryTwo ? (
                        <>
                            <span className={color ? color : colorDefault}>
                                {category}
                            </span>
                            <span
                                className={colorTwo ? colorTwo : colorDefault}
                            >
                                {categoryTwo ? categoryTwo : null}
                            </span>
                        </>
                    ) : (
                        <span className={color ? color : colorDefault}>
                            {category}
                        </span>
                    )}
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                        {title}
                    </span>
                </h2>
                <div className="my-4 flex gap-x-2">
                    <img
                        src={authorImage}
                        alt="author photo"
                        className="rounded-full size-[20px]"
                    />
                    <div>{authorName}</div>
                    <div className="gap-2">•</div>
                    <div>{date}</div>
                </div>
            </div>
        </>
    );
};

export default PosterItem;
