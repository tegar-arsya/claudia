export type NewsPostsData = {
    id: number;
    category: string;
    title: string;
    description: string[];
    image: string;
    dates: string;
    source: string;
};

export const newsData: NewsPostsData[] = [
    {
        id: 1,
        category: 'spotlight',
        title: "Deadpool & Wolverine Breaks Trailer View Records",
        description: ["Deadpool & Wolverine adalah film superhero Amerika yang akan datang berdasarkan karakter Marvel Comics Deadpool dan Wolverine. Film ini diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures, menjadikannya film pertama dalam waralaba Deadpool yang diproduksi setelah akuisisi 20th Century Fox oleh Disney. Film ini akan menjadi film ke-34 di Marvel Cinematic Universe (MCU). Film ini disutradarai oleh Shawn Levy dari skenario yang ditulis oleh Ryan Reynolds, Rhett Reese, Paul Wernick, Zeb Wells, dan Levy. Film ini dibintangi oleh Reynolds sebagai Wade Wilson / Deadpool dan Hugh Jackman sebagai James 'Logan' Howlett / Wolverine, bersama dengan Emma Corrin, Matthew Macfadyen, Morena Baccarin, dan Jennifer Garner. Dalam film ini, Wilson bergabung dengan Time Variance Authority (TVA) dalam sebuah misi yang membawanya bertemu dengan Wolverine.", "Film ini mengikuti kesuksesan Deadpool (2016) dan Deadpool 2 (2018), dengan Reynolds bernegosiasi untuk bergabung dengan MCU setelah akuisisi Disney. Levy bergabung sebagai sutradara pada Maret 2022, dan pembuatan film dimulai pada Mei 2023 di London, Inggris. Film ini akan menjadi film MCU pertama yang mendapat rating R, mengikuti keberhasilan dua film Deadpool sebelumnya. Trailer Super Bowl pertamanya memecahkan rekor dengan 365 juta views dalam 24 jam pertama.", "Deadpool & Wolverine dijadwalkan rilis di Amerika Serikat pada 26 Juli 2024 sebagai bagian dari Phase Five MCU. Film ini sangat dinantikan karena menandai kembalinya Jackman sebagai Wolverine untuk pertama kalinya sejak Logan (2017), dan debut resmi karakter Fox X-Men di MCU."],
        image: `https://cdn.marvel.com/content/1x/16x9_1_1.jpg`,
        dates: '2024-02-11',
        source: `https://youtu.be/cen0rBKLuYE?si=0H47it8GOifvbVyj`,
    },
    {
        id: 2,
        category: 'spotlight',
        title: "Kingdom of the Planet of the Apes Reveals Final Trailer",
        description: ["Kingdom of the Planet of the Apes akan mengambil tempat beberapa generasi setelah kejadian di War for the Planet of the Apes (2017), di mana kecerdasan kera telah berkembang sementara manusia telah kembali ke keadaan primitif. Film ini mengikuti kisah Noa, seekor kera muda yang mempertanyakan segala yang dia ketahui tentang masa lalu dan dunianya saat dia melakukan perjalanan dengan seorang manusia muda bernama Mae untuk menemukan kebenaran tentang keberadaan mereka.", "Film ini disutradarai oleh Wes Ball dan dibintangi oleh Owen Teague sebagai Noa, Freya Allan sebagai Mae, dan Kevin Durand sebagai Proximus Caesar. Dengan anggaran produksi sekitar $200 juta, film ini menggunakan teknologi CGI canggih untuk menciptakan karakter kera yang lebih realistis dari sebelumnya.", "Kingdom of the Planet of the Apes akan dirilis pada 10 Mei 2024 oleh 20th Century Studios. Film ini diharapkan dapat memulai trilogi baru dalam franchise Planet of the Apes yang sukses, yang telah menghasilkan lebih dari $1,7 miliar secara global."],
        image: `https://comicbookmovie.com/images/articles/banners/kingdom-of-the-planet-of-the-apes-final-trailer-reveals-exciting-new-footage-plot-details-ab210730.jpg`,
        dates: '2024-02-08',
        source: `https://www.20thcenturystudios.com/movies/kingdom-of-the-planet-of-the-apes`,
    },
    {
        id: 3,
        category: 'news',
        title: "Furiosa: A Mad Max Saga Unveils Extended Look",
        description: ["Furiosa: A Mad Max Saga adalah film aksi post-apocalyptic yang akan datang yang disutradarai oleh George Miller. Film ini merupakan prekuel dari Mad Max: Fury Road (2015) dan mengisahkan asal-usul karakter Imperator Furiosa. Anya Taylor-Joy membintangi film ini sebagai versi muda dari karakter yang sebelumnya diperankan oleh Charlize Theron.", "Film ini mengikuti perjalanan Furiosa muda yang diculik dari Green Place of Many Mothers dan jatuh ke tangan pasukan motor besar yang dipimpin oleh Warlord Dementus (Chris Hemsworth). Menjelajahi Wasteland, dia berjuang untuk menemukan jalan pulang sambil bertahan hidup dari berbagai ancaman.", "Dengan anggaran produksi $233 juta, Furiosa menjadi film termahal yang pernah dibuat di Australia. Film ini dijadwalkan rilis pada 24 Mei 2024. Miller menjanjikan aksi spektakuler yang melampaui Fury Road, dengan lebih banyak adegan kejar-kejaran mobil dan pertempuran di padang pasir yang telah menjadi ciri khas franchise Mad Max."],
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5BsWQc1WEuyPx9yCG0NkIlyaMUgCyk61WA&s`,
        dates: '2024-02-11',
        source: `https://www.warnerbros.com/movies/furiosa`,
    },
    {
        id: 4,
        category: 'news',
        title: "Venom 3 Completes Filming, Tom Hardy Shares First Look",
        description: ["Tom Hardy kembali sebagai Eddie Brock/Venom dalam film ketiga dari franchise sukses Sony's Spider-Man Universe. Film yang belum diberi judul resmi ini telah menyelesaikan proses syuting utama, dengan Hardy membagikan beberapa foto behind-the-scenes di media sosial.", "Kelly Marcel, yang menulis dua film Venom sebelumnya, kini menjadi sutradara untuk sekuel ini, menggantikan Andy Serkis. Juno Temple dan Chiwetel Ejiofor bergabung dengan cast dalam peran yang masih dirahasiakan. Plot spesifik masih dijaga kerahasiaannya, tetapi dikabarkan akan menampilkan lebih banyak symbiote dan kemungkinan crossover dengan karakter Marvel lainnya.", "Film ini dijadwalkan rilis pada 8 November 2024. Dua film sebelumnya telah menghasilkan lebih dari $1,36 miliar secara global, menjadikan Venom salah satu franchise superhero paling sukses dari Sony Pictures."],
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmqsLSOFZdn2-EUsfisvls89-wrsula_WmQ&s`,
        dates: '2024-02-10',
        source: `https://www.sonypictures.com`,
    },
    {
        id: 5,
        category: 'news',
        title: "Joker: Folie à Deux Teaser Reveals Musical Elements",
        description: ["Sekuel dari film sukses Joker (2019) yang memenangkan Oscar ini mengambil pendekatan berbeda dengan menggabungkan unsur musikal ke dalam narasi gelap karakternya. Todd Phillips kembali sebagai sutradara, dengan Joaquin Phoenix mengulangi perannya sebagai Arthur Fleck/Joker dan Lady Gaga bergabung sebagai Harley Quinn.", "Film ini mengambil setting di Arkham Asylum dan menggambarkan hubungan rumit antara Joker dan psikiater yang kemudian menjadi partner in crime-nya, Harley Quinn. 'Folie à deux' mengacu pada gangguan mental yang dialami bersama oleh dua orang yang berhubungan dekat.", "Dengan anggaran $200 juta, film ini akan menampilkan beberapa lagu populer yang di-arrange ulang dalam konteks cerita gelap film ini. Joker: Folie à Deux akan dirilis pada 4 Oktober 2024."],
        image: `https://assets-prd.ignimgs.com/2024/09/04/joker-folie-a-deux-ver5-xlg-button-1725457597442.jpg`,
        dates: '2024-02-14',
        source: `https://www.warnerbros.com/movies/joker-folie-a-deux`,
    },
    {
        id: 6,
        category: 'video',
        title: "Marvel's Thunderbolts Begins Production, First Set Photos Emerge",
        description: ["Marvel Studios telah memulai produksi Thunderbolts, film yang akan menampilkan tim antihero dan penjahat yang direformasi. Film ini dibintangi oleh Florence Pugh sebagai Yelena Belova, Sebastian Stan sebagai Winter Soldier, David Harbour sebagai Red Guardian, Harrison Ford sebagai Thaddeus Ross, dan Julia Louis-Dreyfus sebagai Valentina Allegra de Fontaine.", "Jake Schreier menyutradarai film ini dari skenario yang ditulis oleh Eric Pearson. Plot mengikuti sekelompok karakter kompleks yang dipaksa bekerja sama dalam misi berbahaya untuk pemerintah. Film ini diharapkan mengeksplorasi area abu-abu moralitas dalam MCU.", "Thunderbolts dijadwalkan rilis pada 2 Mei 2025 sebagai bagian dari Phase Five MCU. Film ini akan menandai pergeseran tone untuk MCU, dengan fokus pada karakter yang lebih gelap dan morally ambiguous."],
        image: `https://cdn.marvel.com/content/1x/thunderbolts_card.jpg`,
        dates: '2024-02-15',
        source: `https://www.marvel.com/movies/thunderbolts`,
    },
    {
        id: 7,
        category: 'video',
        title: "Fantastic Four Cast Finally Revealed for 2025 Release",
        description: ["Marvel Studios akhirnya mengungkapkan pemeran utama untuk film Fantastic Four yang sangat dinantikan. Pedro Pascal akan memerankan Reed Richards/Mister Fantastic, Vanessa Kirby sebagai Sue Storm/Invisible Woman, Joseph Quinn sebagai Johnny Storm/Human Torch, dan Ebon Moss-Bachrach sebagai Ben Grimm/The Thing.", "Matt Shakman (WandaVision) menyutradarai film ini dari skenario yang ditulis oleh Josh Friedman. Film ini akan mengambil setting di tahun 1960-an dan menggambarkan asal-usul tim superhero pertama Marvel Comics ini dalam MCU.", "Film ini dijanjikan akan menggabungkan unsur petualangan sains, drama keluarga, dan aksi superhero. Fantastic Four dijadwalkan rilis pada 14 Mei 2025, menjadi film pembuka Phase Six MCU."],
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdZLaHuVHxZXf65jYA3DL5F4GY1NEZYroOQ&s`,
        dates: '2024-02-14',
        source: `https://www.marvel.com/movies/fantastic-four`,
    },
    {
        id: 8,
        category: 'spotlight',
        title: "Avatar 3 Enters Final Stages of Post-Production",
        description: ["James Cameron mengonfirmasi bahwa Avatar 3 memasuki tahap akhir post-production, dengan efek visual yang lebih canggih dari film-film sebelumnya. Film ini akan memperkenalkan 'Ash People', suku Na'vi yang tinggal di daerah vulkanik Pandora dan digambarkan sebagai antagonis dalam cerita.", "Sam Worthington, Zoe Saldana, Sigourney Weaver, dan Stephen Lang kembali dalam peran mereka. Film ini akan mengeksplorasi lebih banyak wilayah Pandora, termasuk gurun dan pegunungan berapi, sambil memperdalam konflik antara manusia dan Na'vi.", "Dengan anggaran produksi yang diperkirakan mencapai $350 juta, Avatar 3 dijadwalkan rilis pada 19 Desember 2025. Film ini merupakan bagian dari rencana Cameron untuk total lima film Avatar."],
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aMOxEYQewTLU8Ra1a6QpvTpDmuCwOsh4ig&s`,
        dates: '2024-02-12',
        source: `https://www.20thcenturystudios.com`,
    }
];