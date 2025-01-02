export type TheaterData = {
    id: string;
    name: string;
    city: string;
    address: string;
    badge: string;
    // studio: StudioData[];
    dimension: DimensionData[];
  };

// export type StudioData = {
//     category: string[];
// }

export type DimensionData = {
    dimensionCategory: string;
    time: string[];
    price: string;
}

export const theaterData: TheaterData[] = [
    {
        id: '1',
        name: 'PAKUWON MALL JOGJA CGV',
        city: 'yogyakarta',
        address: 'Jl. Ring Road Utara, Kaliwaru, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281',
        badge: 'CGV',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: 'Regular 2D',
                time: [ '11:00', '13:45', '14:40', '15:40', '17:15', '18:15', '20:00', '21:00'],
                price: '50000',
            },
            {
                dimensionCategory: 'Gold Class 2D',
                time: [ '12:40', '15:40', '18:35', '17:10'],
                price: '50000',
            },
            {
                dimensionCategory: 'Velvet 2D',
                time: [ '12:15', '13:45', '14:50'],
                price: '50000',
            },
        ]
    },
    {
        id: '2',
        name: 'JWALK MALL CGV',
        city: 'yogyakarta',
        address: 'J-Walk Mall Jl. Babarsari No.2, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281',
        badge: 'CGV',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '13:45', '17:15', '20:00'],
                price: '50000',
            },
        ]
    },
    {
        id: '3',
        name: 'LIPPO PLAZA JOGJA CINEPOLIS',
        city: 'yogyakarta',
        address: 'Lippo Plaza Lt 1 dan 4, Jl. Laksda Adisucipto No.32-34, RT.13/RW.4, Demangan, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55221',
        badge: 'CINEPOLIS',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '12:10', '16:45', '19:45'],
                price: '50000',
            },
        ]
    },
    {
        id: '4',
        name: 'UPTOWN MALL BSB CITY XXI',
        city: 'semarang',
        address: 'X84G+92X, Pesantren, Kec. Mijen, Kota Semarang, Jawa Tengah',
        badge: 'XXI',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: 'Regular 2D',
                time: [ '11:00', '13:45', '14:40', '15:40', '17:15', '18:15', '20:00', '21:00'],
                price: '4000',
            },
            {
                dimensionCategory: 'Gold Class 2D',
                time: [ '12:40', '15:40', '18:35', '17:10'],
                price: '40000',
            },
            {
                dimensionCategory: 'Velvet 2D',
                time: [ '12:15', '13:45', '14:50'],
                price: '40000',
            },
        ]
    },
    {
        id: '5',
        name: 'DP MAL XXI',
        city: 'semarang',
        address: 'Jl. Pemuda No.142, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132',
        badge: 'XXI',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '13:45', '17:15', '20:00'],
                price: '50000',
            },
        ]
    },
    {
        id: '6',
        name: 'JAVA SUPERMALL SEMARANG CINEPOLIS',
        city: 'semarang',
        address: 'Jl. MT. Haryono No.992-994, Lamper Kidul, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50257',
        badge: 'CINEPOLIS',
        // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
        // studio: [
        //     {
        //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
        //     }
        // ],
        dimension: [
            {
                dimensionCategory: '2D',
                time: [ '12:10', '16:45', '19:45'],
                price: '50000',
            },
        ]
    },
    // {
    //     id: '7',
    //     name: 'Cinepolis Nexux',
    //     city: 'ahmedabad',
    //     address: '3rd floor, Infinity Mall, New Link Rd, Phase D, Shastri Nagar, Versova, Mumbai, Maharashtra 400036',
    //     badge: 'CGV',
    //     // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
    //     // studio: [
    //     //     {
    //     //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
    //     //     }
    //     // ],
    //     dimension: [
    //         {
    //             dimensionCategory: 'Regular 2D',
    //             time: [ '11:00', '13:45', '14:40', '15:40', '17:15', '18:15', '20:00', '21:00'],
    //             price: '265',
    //         },
    //         {
    //             dimensionCategory: 'Gold Class 2D',
    //             time: [ '12:40', '15:40', '18:35', '17:10'],
    //             price: '540',
    //         },
    //         {
    //             dimensionCategory: 'Velvet 2D',
    //             time: [ '12:15', '13:45', '14:50'],
    //             price: '540',
    //         },
    //     ]
    // },
    // {
    //     id: '8',
    //     name: 'Carnival Cinemas',
    //     city: 'ahmedabad',
    //     address: '3rd floor, Himalaya Mall Commercial Building Big Bazar, Drive In Rd, Nilmani Society, Memnagar, Ahmedabad, Gujarat 380054',
    //     badge: 'CINEPOLIS',
    //     // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
    //     // studio: [
    //     //     {
    //     //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
    //     //     }
    //     // ],
    //     dimension: [
    //         {
    //             dimensionCategory: '2D',
    //             time: [ '13:45', '17:15', '20:00'],
    //             price: '160',
    //         },
    //     ]
    // },
    // {
    //     id: '9',
    //     name: 'PVR Devarc Mall',
    //     city: 'ahmedabad',
    //     address: 'Devarc Mall, FP 181/1,3rd floor, Sarkhej - Gandhinagar Hwy, opposite Bigbazar, Ramdev Nagar, Ahmedabad, Gujarat 380015',
    //     badge: 'XXI',
    //     // studio: [{category: ['3D']}, {category: ['IMAX 4D']}],
    //     // studio: [
    //     //     {
    //     //         category: [ 'CGV', '2D', 'Regular 2D', 'Gold Class 2D', 'Velvet 2D']
    //     //     }
    //     // ],
    //     dimension: [
    //         {
    //             dimensionCategory: '2D',
    //             time: [ '12:10', '16:45', '19:45'],
    //             price: '270',
    //         },
    //     ]
    // },
];