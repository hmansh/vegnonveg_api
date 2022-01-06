const dummyData = [
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6162/air-jordan-xxxvi-pf-whiteuniversity-red-black-61bc8a717613f.jpg',
        price: 9998,
        discountPerc: 4,
        company: 'NIKE',
        name: 'AIR JORDAN XXXVI PF \'PSYCHIC ENERGY',
        sizes: [5, 4, 7, 8, 12, 11].toString(),
        inWishlist: true,
        id: 1234
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6205/nike-waffle-trainer-2-phantommalachite-white-black-61c95aa20d5eb.jpg',
        price: 8195,
        discountPerc: 0,
        company: 'NIKE',
        name: 'NIKE WAFFLE TRAINER 2 PHANTOM/MALACHITE-WHITE-BLACK',
        sizes: [7, 8, 9, 11, 12].toString(),
        inWishlist: false,
        id: 1235
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6203/w-nike-waffle-one-burnt-sunrisemystic-hibiscus-61c95f7541117.jpg',
        price: 8295,
        discountPerc: 0,
        company: 'NIKE',
        name: 'W NIKE WAFFLE ONE BURNT SUNRISE/MYSTIC HIBISCUS',
        sizes: [5, 12, 11].toString(),
        inWishlist: true,
        id: 1236
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6208/blazer-mid-77-jumbo-whiteuniversity-blue-sail-black-61c95268805aa.jpg',
        price: 9295,
        discountPerc: 0,
        company: 'NIKE',
        name: 'BLAZER MID 77 JUMBO WHITE/UNIVERSITY BLUE-SAIL-BLACK',
        sizes: [5, 9, 12, 11].toString(),
        inWishlist: true,
        id: 1237
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6162/air-jordan-xxxvi-pf-whiteuniversity-red-black-61bc8a717613f.jpg',
        price: 9998,
        discountPerc: 4,
        company: 'NIKE',
        name: 'AIR JORDAN XXXVI PF \'PSYCHIC ENERGY',
        sizes: [8, 9, 10, 11].toString(),
        inWishlist: false,
        id: 1238
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/5440/zx-5k-boost-grey-sixgrey-threecore-black-619d0e983ffa3.jpg',
        price: 9998,
        discountPerc: 4,
        company: 'ADIDAS',
        name: 'ZX 5K BOOST GREY SIX/GREY THREE/CORE BLACK',
        sizes: [10].toString(),
        inWishlist: true,
        id: 1239
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6162/air-jordan-xxxvi-pf-whiteuniversity-red-black-61bc8a717613f.jpg',
        price: 15999,
        discountPerc: 4,
        company: 'NIKE',
        name: 'AIR JORDAN XXXVI PF \'PSYCHIC ENERGY',
        sizes: [].toString(),
        inWishlist: false,
        id: 1240
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6048/kyrie-infinity-ep-aluminumsailblack-618cb16578b89.jpg',
        price: 11495,
        discountPerc: 4,
        company: 'NIKE',
        name: 'KYRIE INFINITY EP ALUMINUM/SAIL/BLACK',
        sizes: [5, 4, 7, 8, 9, 12, 11].toString(),
        inWishlist: false,
        id: 1241
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/5469/xbox-forum-tech-boost-x-core-blackcore-blackcustomized-619c89eb7d653.jpg',
        price: 13999,
        discountPerc: 4,
        company: 'ADIDAS',
        name: 'XBOX FORUM TECH BOOST X CORE BLACK/CORE BLACK/CUSTOMIZED',
        sizes: [5, 4, 7, 8, 9, 11].toString(),
        inWishlist: false,
        id: 1242
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6079/air-force-1-07-skeleton-qs-court-purplecourt-purple-white-61b05193ebbfb.jpg',
        price: 11495,
        discountPerc: 4,
        company: 'NIKE',
        name: 'AIR FORCE 1 07 SKELETON QS COURT PURPLE/COURT PURPLE-WHITE',
        sizes: [5, 4, 7, 8].toString(),
        inWishlist: true,
        id: 1243
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6161/air-jordan-xxxvi-pf-blackhyper-violet-white-bright-mango-61bc89b3d5284.jpg',
        price: 16595,
        discountPerc: 4,
        company: 'NIKE',
        name: 'AIR JORDAN XXXVI PF FIRST LIGHT',
        sizes: [5, 4, 11].toString(),
        inWishlist: true,
        id: 1244
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/5971/nike-crater-impact-grey-fogcyber-teal-lt-smoke-grey-sail-61bb3b39b76be.jpg',
        price: 8295,
        discountPerc: 4,
        company: 'NIKE',
        name: 'CRATER IMPACT GREY FOG/CYBER TEAL-LT SMOKE GREY-SAIL',
        sizes: [5, 4, 7, 11].toString(),
        inWishlist: true,
        id: 1245
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6126/ivp-ultraboost-og-solar-greensignal-greensemi-solar-green-61b1d64d065e5.jpg',
        price: 19999,
        discountPerc: 4,
        company: 'ADIDAS',
        name: 'IVP ULTRABOOST OG SOLAR GREEN/SIGNAL GREEN/SEMI SOLAR GREEN',
        sizes: [5, 9, 12, 11].toString(),
        inWishlist: true,
        id: 1246
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6121/w-af1-shadow-photon-dustmalachite-black-61b083ec98946.jpg',
        price: 8995,
        discountPerc: 4,
        company: 'NIKE',
        name: 'W AIR FORCE 1 SHADOW PHOTON DUST/MALACHITE-BLACK',
        sizes: [5, 4, 7, 8, 9, 12, 11].toString(),
        inWishlist: false,
        id: 1247
    },
    {
        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6150/japan-s-whitemarigold-orange-61bb3aab2a1c1.jpg',
        price: 5499,
        discountPerc: 4,
        company: 'ASICS',
        name: 'JAPAN S WHITE/MARIGOLD ORANGE',
        sizes: [5, 4, 7, 8, 9, 12, 11].toString(),
        inWishlist: true,
        id: 1248
    },
];

const dummyUsers = [{
        details: {
            first_name: "Himanshu",
            last_name: ".",
            phone_number: "+91-9677936655",
            email_id: "himanshucasillas@gmail.com",
            phone_verified: false,
            email_verified: false,  
        },
        address: {
            country: "India",
            state: "Bihar",
            first_name: "Himanshu",
            last_name: "Rana",
            company_name: "vnv.com",
            mobile_number: "+91-9677936655",
            address_1: "SMQ 14/9, Sunaina Kashyap Apartments, Danapur, Patna",
            address_1: "Khagaul",
            city: "Patna",
            pincode: 801102,
            default: true,
        },
        orders: [
            {
                order_date: "12/12/2021",
                order_time: "12:01:01",
                order_address: {
                    country: "India",
                    state: "Bihar",
                    first_name: "Himanshu",
                    last_name: "Rana",
                    company_name: "vnv.com",
                    mobile_number: "+91-9677936655",
                    address_1: "SMQ 14/9, Sunaina Kashyap Apartments, Danapur, Patna",
                    address_1: "Khagaul",
                    city: "Patna",
                    pincode: 801102,
                },
                payment_method: "online",
                payment_status: "success",
                order_items: [
                    {
                        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6162/air-jordan-xxxvi-pf-whiteuniversity-red-black-61bc8a717613f.jpg',
                        price: 9998,
                        discountPerc: 4,
                        company: 'NIKE',
                        name: 'AIR JORDAN XXXVI PF \'PSYCHIC ENERGY',
                        sizes: [5, 4, 7, 8, 12, 11].toString(),
                        inWishlist: true,
                        id: 1234
                    },
                    {
                        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6205/nike-waffle-trainer-2-phantommalachite-white-black-61c95aa20d5eb.jpg',
                        price: 8195,
                        discountPerc: 0,
                        company: 'NIKE',
                        name: 'NIKE WAFFLE TRAINER 2 PHANTOM/MALACHITE-WHITE-BLACK',
                        sizes: [7, 8, 9, 11, 12].toString(),
                        inWishlist: false,
                        id: 1235
                    }
                ]}, {
                    order_date: "01/11/2020",
                    order_time: "14:01:01",
                    order_address: {
                        country: "India",
                        state: "New Delhi",
                        first_name: "Sarvika",
                        last_name: "Aggarwal",
                        company_name: "wvnv.com",
                        mobile_number: "+91-9677936655",
                        address_1: "SMQ 14/9, Sunaina Kashyap Apartments, Delhi,",
                        address_1: "Khagaul",
                        city: "New Delhi",
                        pincode: 110121,
                    },
                    payment_method: "online",
                    payment_status: "success",
                    order_items: [
                    {
                        imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6203/w-nike-waffle-one-burnt-sunrisemystic-hibiscus-61c95f7541117.jpg',
                        price: 8295,
                        discountPerc: 0,
                        company: 'NIKE',
                        name: 'W NIKE WAFFLE ONE BURNT SUNRISE/MYSTIC HIBISCUS',
                        sizes: [5, 12, 11].toString(),
                        inWishlist: true,
                        id: 1236
                    }
                ]}
        ],
        wishlist_items: [
            {
                imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/5440/zx-5k-boost-grey-sixgrey-threecore-black-619d0e983ffa3.jpg',
                price: 9998,
                discountPerc: 4,
                company: 'ADIDAS',
                name: 'ZX 5K BOOST GREY SIX/GREY THREE/CORE BLACK',
                sizes: [10].toString(),
                inWishlist: true,
                id: 1239
            },
            {
                imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6162/air-jordan-xxxvi-pf-whiteuniversity-red-black-61bc8a717613f.jpg',
                price: 15999,
                discountPerc: 4,
                company: 'NIKE',
                name: 'AIR JORDAN XXXVI PF \'PSYCHIC ENERGY',
                sizes: [].toString(),
                inWishlist: false,
                id: 1240
            },
            {
                imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6048/kyrie-infinity-ep-aluminumsailblack-618cb16578b89.jpg',
                price: 11495,
                discountPerc: 4,
                company: 'NIKE',
                name: 'KYRIE INFINITY EP ALUMINUM/SAIL/BLACK',
                sizes: [5, 4, 7, 8, 9, 12, 11].toString(),
                inWishlist: false,
                id: 1241
            },
            {
                imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/5469/xbox-forum-tech-boost-x-core-blackcore-blackcustomized-619c89eb7d653.jpg',
                price: 13999,
                discountPerc: 4,
                company: 'ADIDAS',
                name: 'XBOX FORUM TECH BOOST X CORE BLACK/CORE BLACK/CUSTOMIZED',
                sizes: [5, 4, 7, 8, 9, 11].toString(),
                inWishlist: false,
                id: 1242
            },
            {
                imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6079/air-force-1-07-skeleton-qs-court-purplecourt-purple-white-61b05193ebbfb.jpg',
                price: 11495,
                discountPerc: 4,
                company: 'NIKE',
                name: 'AIR FORCE 1 07 SKELETON QS COURT PURPLE/COURT PURPLE-WHITE',
                sizes: [5, 4, 7, 8].toString(),
                inWishlist: true,
                id: 1243
            }
        ],
        cart_items: [
            {
                imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6121/w-af1-shadow-photon-dustmalachite-black-61b083ec98946.jpg',
                price: 8995,
                discountPerc: 4,
                company: 'NIKE',
                name: 'W AIR FORCE 1 SHADOW PHOTON DUST/MALACHITE-BLACK',
                sizes: [5, 4, 7, 8, 9, 12, 11].toString(),
                inWishlist: false,
                id: 1247
            },
            {
                imgUrl: 'https://d18o2ueeh72ibb.cloudfront.net/resized/700X573/6150/japan-s-whitemarigold-orange-61bb3aab2a1c1.jpg',
                price: 5499,
                discountPerc: 4,
                company: 'ASICS',
                name: 'JAPAN S WHITE/MARIGOLD ORANGE',
                sizes: [5, 4, 7, 8, 9, 12, 11].toString(),
                inWishlist: true,
                id: 1248
            }
        ]
    }
]