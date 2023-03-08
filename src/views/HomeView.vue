<template>
  <div>
    <div class="container">
      <HomeTop />
      <Home />
      <Premium v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <AllAnimeSlide v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <OVA v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <Ongoin v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <LastNews v-bind:newsAbout="newsAbout"/>
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Premium from "../components/Premium.vue";
import HomeTop from "../components/Home-top.vue";
import AllAnimeSlide from "../components/AllAnimeSlide.vue";
import OVA from "../components/OVA.vue";
import Ongoin from "../components/Ongoin.vue";
import Home from "../components/Home.vue";
import LastNews from "../components/LastNews.vue";
export default {
  components: {
    Footer,
    Premium,
    HomeTop,
    AllAnimeSlide,
    OVA,
    Ongoin,
    Home,
    LastNews
  },
  data() {
    return {
      newsAbout: {
        text:
          "Naruto 4: Zulmat podshohligining tarafdorlari Bir paytlar dunyoni vayron qilgan iblis ozod etildi! Endi faqat bir kishi ayanchli natijani oldini oladi - Shion ismli qiz. U ikkita kuchga ega - jinlarni muhrlash va fol ochish. Albatta, iblis kuchlari qizni ovlashni boshlaydi va Naruto, Sakura, Li va Neji jamoasi Shionni himoya qilishi va unga jinni muhrlashiga yordam berishi kerak. Biroq, Shion Narutoning o'limini bashorat qiladi. Va u endi nima qiladi? Albatta, har doimgidek, taqdirga qarshi boradi!"
      },
      card: [
        {
          img: "5premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "6premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "7premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "8premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "9premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "10premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "11premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "12premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "13premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "14premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        },
        {
          img: "15premium-card.png",
          title: "Мэйджор. Мяч дружбы / 2008 ",
          type: "anime serial",
          viewer: 323232
        }
      ],
      genre: [{ genreText: "Sport" }, { genreText: "maktab" }]
    };
  }
};
</script>

<style scoped>
</style>
