import PosterItem from './PosterItem';
const Poster = () => {
    return (
        <>
            <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                <section className="grid grid-cols-2 gap-x-10 gap-y-4">
                    <PosterItem
                        image="./poster1.avif"
                        category="TECHNOLOGY"
                        title="Architectural Engineering Wonders of the modern era for your Inspiration"
                        authorImage="/mario.avif"
                        authorName="Mario Sanchez"
                        date="October 21, 2022"
                        color="text-blue-600 uppercase"
                    />
                    <PosterItem
                        image="./poster2.avif"
                        category="LIFESTYLE"
                        title="5 Effective Brain Recharging Activities No One is Talking About"
                        authorImage="/joshua.avif"
                        authorName="Joshua Wood"
                        date="October 21, 2022"
                        color="text-purple-600 uppercase"
                    />
                    <PosterItem
                        image="./poster3.avif"
                        category="DESIGN"
                        categoryTwo="LIFESTYLE"
                        title="14 Architectural Design Ideas for a Spacious Interior"
                        authorImage="/mario.avif"
                        authorName="Mario Sanchez"
                        date="October 21, 2022"
                        color="text-blue-600 uppercase"
                        colorTwo="text-purple-600 uppercase"
                    />
                    <PosterItem
                        image="./poster4.avif"
                        category="LIFESTYLE"
                        categoryTwo="PERSONAL GROWTH"
                        title="Every Next Level of Your Life Will Demand a Different You"
                        authorImage="/mario.avif"
                        authorName="Mario Sanchez"
                        date="October 20, 2022"
                        color="text-purple-600 uppercase"
                        colorTwo="text-emerald-600 uppercase"
                    />
                    <PosterItem
                        image="./poster5.avif"
                        category="TRAVEL"
                        title="This Bread Pudding Will Give You All the Fall Feels"
                        authorImage="/erika.avif"
                        authorName="author name"
                        date="October 19, 2022"
                        color="text-orange-700 uppercase"
                    />
                    <PosterItem
                        image="./poster6.avif"
                        category="TRAVEL"
                        title="I Moved Across the Country and Never Looked Back"
                        authorImage="/joshua.avif"
                        authorName="Joshua Wood"
                        date="October 19, 2022"
                    />
                    <PosterItem
                        image="./poster7.avif"
                        categoryTwo="PERSONAL GROWTH"
                        title="3 Meaningful Ways to Practice Self-Care as an Introvert"
                        authorImage="/mario.avif"
                        authorName="Mario Sanchez"
                        date="October 18, 2022"
                        colorTwo="text-emerald-600 uppercase"
                    />
                    <PosterItem
                        image="./poster8.avif"
                        categoryTwo="PERSONAL GROWTH"
                        title="The Rise of Artificial Intelligence and the Future of Humans"
                        authorImage="/joshua.avif"
                        authorName="Joshua Wood"
                        date="October 18, 2022"
                        colorTwo="text-emerald-600 uppercase"
                    />
                    <PosterItem
                        image="./poster9.avif"
                        categoryTwo="PERSONAL GROWTH"
                        title="10 Simple Practices That Will Help You Get 1% Better Every Day"
                        authorImage="/erika.avif"
                        authorName="author name"
                        date="October 04, 2022"
                        colorTwo="text-emerald-600 uppercase"
                    />
                    <PosterItem
                        image="./poster8.avif"
                        category="DESIGN"
                        title="Every Artist has to see the Amazing Pictures on the Internet"
                        authorImage="/mario.avif"
                        authorName="Mario Sanchez"
                        date="October 02, 2022"
                        color="text-blue-600 uppercase"
                    />
                    <PosterItem
                        image="./poster1.avif"
                        category="technology"
                        title="How Technology Evolved Under the Bright Sun of Universe"
                        authorImage="/erika.avif"
                        authorName="author name"
                        date="September 30, 2022"
                        color="text-blue-600 uppercase"
                    />
                    <PosterItem
                        image="./poster11.avif"
                        category="travel"
                        title="Lessons Of Happiness I learned from a Mountain Village"
                        authorImage="/joshua.avif"
                        authorName="Joshua Wood"
                        date="September 25, 2022"
                        color="text-orange-700 uppercase"
                    />
                    <PosterItem
                        image="./poster13.avif"
                        category="lifestyle"
                        title="There’s Nothing New About Undermining Women’s Autonomy"
                        authorImage="/erika.avif"
                        authorName="Erika Oliver"
                        date="daSeptember 23, 2022te"
                        color="text-purple-600 uppercase"
                    />
                    <PosterItem
                        image="./poster14.avif"
                        category="technology"
                        title="Escape Fantasies of the Tech Billionaires"
                        authorImage="/erika.avif"
                        authorName="Erika Oliver"
                        date="September 21, 2022"
                        color="text-blue-600 uppercase"
                    />
                    <PosterItem
                        image="./poster11.avif"
                        category="technology"
                        title="Escape Fantasies of the Tech Billionaires"
                        authorImage="/erika.avif"
                        authorName="Erika Oliver"
                        date="September 21, 2022"
                        color="text-blue-600 uppercase"
                    />
                    <PosterItem
                        image="./poster12.avif"
                        category="technology"
                        title="Escape Fantasies of the Tech Billionaires"
                        authorImage="/erika.avif"
                        authorName="Erika Oliver"
                        date="September 21, 2022"
                        color="text-blue-600 uppercase"
                    />
                </section>
            </div>
        </>
    );
};

export default Poster;
