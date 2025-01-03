
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
    },
    {
        id: 6,
        name: 'MODAL NEKAT',
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4pz7Yi8cdM-5_ayMa2i-tDi2xxzl5FfAUQ&s`,
        genre: 'Drama, Comedy',
        duration: '1 Jam 47 Menit',
        director: 'Imam Darto',
        rated: '9.3',
    },
    {
        id: 7,
        name: 'SOROP',
        image: `https://cdn0-production-images-kly.akamaized.net/XDtvJsycI-G_dIJjAVZtJuosbog=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5050941/original/056520600_1734186634-Sorop_0.jpg`,
        genre: 'Horror',
        duration: '1 Jam 43 Menit',
        director: 'Upi',
        rated: '8.3',
    },
    {
        id: 8,
        name: 'SONIC THE HEDGEHOG 3',
        image: `https://m.media-amazon.com/images/M/MV5BMjZjNjE5NDEtOWJjYS00Mjk2LWI1ZDYtOWI1ZWI3MzRjM2UzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`,
        genre: 'Action, Fantasy',
        duration: '1 Jam 50 Menit',
        director: 'Jeff Fowler',
        rated: '9.5',
    }
];