<template>
  <div>
    <div class="container">
      <HomeTop />
      <Home />
      <Premium v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <AllAnimeSlide v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <OVA v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <Ongoin v-bind:cardFilling="card" v-bind:genreFilling="genre" />
      <LastNews v-bind:newsAbout="newsAbout" />
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
      card: this.$store.state.allAnime,
      genre: [{ genreText: "Sport" }, { genreText: "maktab" }]
    };
  }
};
</script>

<style scoped>
</style>
