<template>
  <div>
    <!-- Swiper -->
    <div class="swiper mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="homeSlideItem of homeSlide" :key="homeSlideItem">
          <div class="home-slide">
            <!-- background -->
            <div class="big-background">
              <img :src="'/img/' + homeSlideItem.background" />
            </div>
            <!-- home slide about -->
            <div class="slide-about">
              <h2>{{homeSlideItem.title}}</h2>
              <p class>{{ homeSlideItem.about }}</p>
              <div class="genres">
                <a
                  href="#"
                  v-for="genreItem of homeSlideItem.genre"
                  :key="genreItem"
                >{{genreItem.janr}}</a>
              </div>
              <RouterLink to="/WatchView" class="btn view-btn mt-2 btn-primary">
                ko'rish
                <i class="fas fa-play"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="swiper-button-prev">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      homeSlide: [
        {
          background: "home-slide-3.png",
          title: "Arra odam",
          about:
            "Denji o'zi sevgan sevgilisiga g'amxo'rlik qilishni va u bilan tinch va chiroyli hayot kechirishni orzu qiladi. Ammo haqiqat juda qattiq va yakuza tufayli u erga qaytishi kerak, chunki u marhum otasining katta qarzlarini to'lash uchun yovuz mavjudotni o'ldirishga majbur bo'ladi. Honor iblis hayvoni bilan birga. Denji kamtarona pul evaziga hamma narsaga tayyor. Keyinchalik bola keraksiz bo'lib qoladi va yakuza bilan shartnoma tuzgan shayton tomonidan o'ldiriladi. Ammo Pochita egasini qutqara boshlaydi va yovuzlik bilan shartnoma tuzadi. Pochita Danji bilan birlashadi, fikrini o'zgartiradi va Chainsaw Man super kuchini beradi. Denji endi tanasini zanjirli arraga aylantira oladi va o‘zining yangi qobiliyatlaridan foydalanib, ko‘z ochib yumguncha dushmanlarini shafqatsizlarcha o‘ldiradi. Jamoat xavfsizligi radariga tushib qolgan Denji jin ovchisi sifatida ishga olinadi. Bundan buyon Denji o'zining qiyin raqiblaridan qo'rqmaydi va orzusini amalga oshirish uchun ulardan bir qadam oldinda boradi.",
          genre: [
            { janr: "Sarguzasht" },
            { janr: "Jangari" },
            { janr: "Iblislar" }
          ]
        },
        {
          background: "home-bg.webp",
          title: "Tabiat farzandi",
          about:
            "Xodaka Morashima erdan uzoqda joylashgan orolda yashagan va o'qigan. U katta bo'lgach, o'qishni davom ettirish uchun poytaxtga ketishga qaror qildi. Unda doimo yaxshi ta'lim olish, savodxonlik, rivojlanish istagi bor edi. Ammo bu juda ko'p pul talab qildi. Shunday qilib, u ish qidirishni boshladi. Bu bilan u qiyinchiliklarga duch keldi, hamma joyda uni rad etishdi. Va ob-havo yomon edi, kun bo'yi yomg'ir yog'di. U kemada hayotini saqlab qolgan tasodifiy sherigini esladi. Hodaka palubada sirpanib dengizga tushib ketishiga sal qoldi.",
          genre: [
            { janr: "Drama" },
            { janr: "Fantastika" },
            { janr: "kundalik hayot" }
          ]
        },
        {
          background: "home-bg-1.jpg",
          title: "Seni isming",
          about:
            "To'liq metrajli anime Yaponiya tog'larida, shovqinli shahardan uzoqda, tinch viloyatda yashovchi Mitsuha Miyamizu haqida hikoya qiladi. Qiz o'z vatanida hech qanday istiqbolni anglatmaydi va katta metropolga ketishni orzu qiladi. Taki Tachibana ismli yigit katta, gavjum Tokioda oddiy ofitsiant bo'lib ishlaydi. U shahar shovqinidan charchagan va uning xohishi - bu hudud shovqinidan uzoqda, sokin joyda yolg'izlik. Yoshlar qandaydir tasavvur qilib bo'lmaydigan tarzda ular o'rtasida qandaydir sirli, tushunarsiz bog'liqlik borligini anglay boshlaydilar.",
          genre: [
            { janr: "maktab" },
            { janr: "romantika" },
            { janr: "kundalik hayot" }
          ]
        }
      ]
    };
  },
  methods: {},
  mounted() {
    if (Swiper) {
      var swiper = new Swiper(".mySwiper2", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: true,
        setTimeout: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}
.swiper-button-prev i {
  color: #ffff;
  font-size: 20px;
}

.swiper-button-prev {
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  z-index: 1011;
}
.swiper-button-prev:hover {
  background: rgba(7, 3, 1, 0.1);
}
.swiper-button-next {
  z-index: 1011;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
}
.swiper-button-next:hover {
  background: rgba(7, 3, 1, 0.1);
}

.swiper-button-next i {
  color: #ffff;
  font-size: 20px;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  display: none;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  display: none;
}

.view-btn {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-btn i {
  font-size: 14px;
  line-height: 100%;
  margin: 0;
  padding: 0;
  margin-left: 10px;
}
.slide-about {
  position: absolute;
  z-index: 10;
  top: 50%;
  padding: 0 50px;
  transform: translateY(-50%);
  left: 0;
  background: local;
}
.slide-about h2 {
  color: #fff;
}
.slide-about .genres {
  display: flex;
  align-content: center;
}
.slide-about .genres a {
  display: inline-block;
  text-transform: uppercase;
  margin-right: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #2c58a0;
}
.slide-about p {
  max-width: 50%;
  color: #fff;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-slide {
  position: relative;
  width: 100%;
  height: 500px;
}
.big-background {
  width: 100%;
  height: 100%;
}
.big-background img {
  width: 100%;
  height: 100%;
  filter: brightness(60%);
}

@media (max-width: 885px) {
  .big-background {
    height: 300px;
  }
  .view-btn {
    width: 100px;
  }
  .slide-about {
    padding: 20px;
    padding-left: 50px;
  }
  .home-slide {
    height: 100%;
  }
  .swiper-slide {
    height: 100%;
  }
  .slide-about p {
    max-width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -moz-binding: url("assets/xml/ellipsis.xml#ellipsis");
  }
  .swiper-button-next i {
    font-size: 20px;
  }
  .swiper-button-prev i {
    font-size: 20px;
  }
}
@media (max-width: 785px) {
  .slide-about p {
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .slide-about .genres a {
    font-size: 12px;
  }
}
@media (max-width: 576px) {
  .mySwiper2 {
    margin-top: 50px;
  }
  .swiper-button-prev {
    width: 30px;
  }
  .swiper-button-next {
    width: 30px;
  }
  .swiper-button-next i[data-v-08e32229] {
    font-size: 12px;
  }
  .swiper-button-prev i[data-v-08e32229] {
    font-size: 12px;
  }
  .slide-about[data-v-08e32229] {
    padding: 20px;
  }
  .view-btn i[data-v-08e32229] {
    font-size: 12px;
  }
  .view-btn[data-v-08e32229] {
    line-height: 100%;
  }
  .slide-about p[data-v-08e32229] {
    max-width:300px;
    font-size: 12px;
    margin: 5px 0;
  }
  .slide-about .genres a[data-v-08e32229] {
    font-size: 12px;
    line-height: normal;
  }
  .slide-about h2[data-v-08e32229] {
    font-size: 18px;
  }
}
</style>