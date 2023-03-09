import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      allAnime: [
        {
          img: "5premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
          video: "youName.mp4",
          dateTime: 2023,
          genre: "Kundalik Hayot, Maktab",
          language: "O'zbek",
          duration: "24 minut",
          kadr: "kadr-1.png",
          kadr: "kadr-2.png",
          kadr: "kadr-3.png",
          kadr: "kadr-4.png",
          kadr: "kadr-5.png",
          kadr: "kadr-6.png",
        },
        {
          img: "6premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "7premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "8premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "9premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "10premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "10premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "11premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "12premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "13premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "14premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
        {
          img: "15premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232,
          about:
            "Gol D. Rojer 'Qaroqchilar qiroli' sifatida tanilgan bo'lib, Grand Lineda suzib o'tgan eng kuchli va eng obro'li mavjudot. Rojerning Jahon hukumati tomonidan qo'lga olinishi va qatl etilishi butun dunyoda o'zgarishlarga olib keldi. Uning o'limidan oldingi so'nggi so'zlari dunyodagi eng katta xazina - One Piece mavjudligini ochib berdi. Aynan shu vahiy cheksiz boylik va shon-shuhratni va'da qiladigan One Piece-ni va ehtimol shon-shuhrat cho'qqisini va Pirat Qiroli unvonini topishni orzu qilgan qaroqchilarning Buyuk Asrini keltirib chiqardi.",
        },
      ],
      anime: {},
      allGenre: [{ genreText: "Sport" }, { genreText: "maktab" }],
      genre: {},
    };
  },
  mutations: {
    findAnime(state, id) {
      state.anime = state.allAnime[id];
    },
  },
});

export default store;
