const NavabarItemLeft = () => {
    const navbarItem = [
        {
            text: 'Home',
        },
        {
            link: '/',
            text: 'About',
        },
        {
            link: '/',
            text: 'Contact',
        },
    ];
    return (
        <>
            <nav className="flex gap-6">
                {navbarItem.map((item, index) => (
                    <a
                        className="text-sm font-medium text-gray-600 hover:text-blue-500"
                        key={index}
                        href={item.link ? item.link : '#'}
                    >
                        {item.text}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default NavabarItemLeft;
