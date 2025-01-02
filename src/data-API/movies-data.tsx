
export type MoviesData = {
    id: number;
    name: string;
    image: string;
    genre: string;
    duration: string;
    director: string;
    rated: string;
  };

export const movies: MoviesData[] = [
    {
        id: 1,
        name: 'PANGGONAN WINGIT 2',
        image: `https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/72/2024/11/26/Snapinstaapp_468156559_1112251537029071_2389872462628355284_n_1080-2697037548.jpg`,
        genre: 'Horror',
        duration: '1 Jam 43 Menit',
        director: 'Guntur Soeharjanto',
        rated: '9.2',
    },
    {
        id: 2,
        name: '2ND MIRACLE IN CELL NO.7',
        image: `https://akcdn.detik.net.id/community/media/visual/2024/12/03/film-2nd-miracle-in-cell-no7_34.jpeg?w=550&q=90`,
        genre: 'Family, Drama',
        duration: '2 Hour 27 Menit',
        director: 'Herwin Novianto',
        rated: '9.7',
    },
    {
        id: 3,
        name: 'MUFASA: THE LION KING',
        image: `https://lumiere-a.akamaihd.net/v1/images/wonderwall_dom_payoff_poster_indonesia_70x100_c_b29db809.jpeg`,
        genre: 'Animation, Adventure',
        duration: '1 Jam 58 Menit',
        director: 'Barry Jenkins',
        rated: '9.5',
    },
    {
        id: 4,
        name: 'MOANA 2',
        image: `https://akcdn.detik.net.id/community/media/visual/2024/11/13/film-moana-2_34.jpeg?w=550&q=90`,
        genre: 'Animation',
        duration: '1 Jam 40 Menit',
        director: 'David G.Derrick Jr., Jason Hand, Dana Ledoux Miller',
        rated: '9.6',
    },
    {
        id: 5,
        name: 'THE PROSECUTOR',
        image: `https://asset.tix.id/wp-content/uploads/2024/12/24PROR.jpg`,
        genre: 'Action, Thriller',
        duration: '1 Jam 57 Menit',
        director: 'Donnie Yen',
        rated: '9.6',
    }
];