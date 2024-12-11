const concerts = [
    {
        month: "January",
        venue: "Madison Square Garden",
        artist: "Billy Joel",
        event: "Live At The Garden",
        products: [
            { id: 1, type: "CD", price: 25, image: "/images/billy-joel-cd.png" },
            { id: 2, type: "T-Shirt", price: 45, image: "/images/billy-joel-tshirt.png" },
            { id: 3, type: "Signed Poster", price: 100, image: "/images/billy-joel-poster.png" },
        ],
    },
    {
        month: "February",
        venue: "UBS Arena",
        artist: "Kanye West",
        event: "VULTURES LISTENING PARTY",
        products: [
            { id: 4, type: "CD", price: 20, image: "/images/vultures-kanye-cd.png" },
            { id: 5, type: "T-Shirt", price: 30, image: "/images/vultures-kanye-tshirt.png" },
            { id: 6, type: "Signed Poster", price: 120, image: "/images/vultures-kanye-poster.png" },
        ],
    },
    {
        month: "March",
        venue: "UBS Arena",
        artist: "Drake and 21 Savage",
        event: "It's All A Blur Tour",
        products: [
            { id: 7, type: "CD", price: 25, image: "/images/drake-cd.png" },
            { id: 8, type: "T-Shirt", price: 40, image: "/images/drake-tshirt.png" },
            { id: 9, type: "Signed Poster", price: 150, image: "/images/drake-poster.png" },
        ],
    },
    {
        month: "April",
        venue: "Madison Square Garden",
        artist: "Olivia Rodrigo",
        event: "GUTS World Tour",
        products: [
            { id: 10, type: "CD", price: 20, image: "/images/olivia-rodrigo-cd.png" },
            { id: 11, type: "T-Shirt", price: 40, image: "/images/olivia-rodrigo-tshirt.png" },
            { id: 12, type: "Signed Poster", price: 450, image: "/images/olivia-rodrigo-poster.png" },
        ],
    },
    {
        month: "May",
        venue: "MetLife Stadium",
        artist: "The Rolling Stones",
        event: "Hackney Diamonds Tour",
        products: [
            { id: 13, type: "CD", price: 14, image: "/images/rolling-stones-cd.png" },
            { id: 14, type: "T-Shirt", price: 50, image: "/images/rolling-stones-tshirt.png" },
            { id: 15, type: "Signed Poster", price: 270, image: "/images/rolling-stones-poster.png" },
        ],
    },
    {
        month: "June",
        venue: "Madison Square Garden",
        artist: "Justin Timberlake",
        event: "The Forget Tomorrow World Tour",
        products: [
            { id: 16, type: "CD", price: 14, image: "/images/justin-timberlake-cd.png" },
            { id: 17, type: "T-Shirt", price: 28, image: "/images/justin-timberlake-tshirt.png" },
            { id: 18, type: "Signed Poster", price: 100, image: "/images/justin-timberlake-poster.png" },
        ],
    },
    {
        month: "July",
        venue: "MetLife Stadium",
        artist: "Luke Combs",
        event: "Growin' Up And Gettin' Old Tour",
        products: [
            { id: 19, type: "CD", price: 14, image: "/images/luke-combs-cd.png" },
            { id: 20, type: "T-Shirt", price: 30, image: "/images/luke-combs-tshirt.png" },
            { id: 21, type: "Signed Poster", price: 200, image: "/images/luke-combs-poster.png" },
        ],
    },
    {
        month: "August",
        venue: "Madison Square Garden",
        artist: "Tate McRae",
        event: "Think Later Tour",
        products: [
            { id: 22, type: "CD", price: 20, image: "/images/tate-mcrae-cd.png" },
            { id: 23, type: "T-Shirt", price: 50, image: "/images/tate-mcrae-tshirt.png" },
            { id: 24, type: "Signed Poster", price: 350, image: "/images/tate-mcrae-poster.png" },
        ],
    },
    {
        month: "September",
        venue: "Madison Square Garden",
        artist: "Charli XCX, Troye Sivan",
        event: "Sweat",
        products: [
            { id: 25, type: "CD", price: 25, image: "/images/charli-troye-cd.png" },
            { id: 26, type: "T-Shirt", price: 50, image: "/images/charli-troye-tshirt.png" },
            { id: 27, type: "Signed Poster", price: 60, image: "/images/charli-troye-poster.png" },
        ],
    },
    {
        month: "October",
        venue: "MetLife Stadium",
        artist: "Travis Scott",
        event: "One Night Only in Utopia",
        products: [
            { id: 28, type: "CD", price: 20, image: "/images/travis-scott-cd.png" },
            { id: 29, type: "T-Shirt", price: 50, image: "/images/travis-scott-tshirt.png" },
            { id: 30, type: "Signed Poster", price: 70, image: "/images/travis-scott-poster.png" },
        ],
    },
    {
        month: "October/November",
        venue: "Madison Square Garden",
        artist: "Billie Eilish",
        event: "Hit Me Hard and Soft: The Tour",
        products: [
            { id: 31, type: "CD", price: 25, image: "/images/billie-eilish-cd.png" },
            { id: 32, type: "T-Shirt", price: 100, image: "/images/billie-eilish-tshirt.png" },
            { id: 33, type: "Signed Poster", price: 370, image: "/images/billie-eilish-poster.png" },
        ],
    },
    {
        month: "Upcoming Concert December",
        venue: "Madison Square Garden",
        artist: "Katy Perry, Twenty One Pilots",
        event: "IHeartRadio Jingle Ball",
        products: [
            { id: 34, type: "Exclusive Wheezer Tickets", price: 750, image: "/images/jingle-ball-tickets.png" },
            { id: 35, type: "T-Shirt", price: 25, image: "/images/jingle-ball-tshirt.png" },
            { id: 36, type: "Wheezer Backstage Passes", price: 1250, image: "/images/jingle-ball-poster.png" },
        ],
    },
];

export default concerts;
