<template>
  <div>
    <router-link
      to="/AllAnime"
      class="note d-flex align-items-center justify-content-between note-primary my-3"
    >
      <strong class="m-0 text-capitalize">barcha anime</strong>
    </router-link>

    <div class="swiper AllAnimeSlide">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(premiumCardItem, i) 
         in cardFilling" :key="i">
          <router-link :to="`/WatchView/${i}`" class="premium-card border">
            <div class="card-img">
              <img :src="'/img/' + $store.state.anime.img" />
            </div>
            <div class="card-about">
              <dt class>{{ $store.state.anime.title }}</dt>
              <div class="genre-wrap">
                <p
                  class="genre"
                  v-for="genreItem of genreFilling"
                  :key="genreItem"
                >{{ genreItem.genreText }}</p>
              </div>
            </div>
            <div class="card-bottom border-top d-flex align-items-center justify-content-between">
              <p class="view text-lowercase">
                <i class="fas fa-eye"></i>
                {{ premiumCardItem.viewer }}
              </p>
              <p class="text-lowercase">{{ premiumCardItem.type }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["genreFilling", "cardFilling"],
  data() {
    return {};
  },

  mounted() {
    if (Swiper) {
      var swiper = new Swiper(".AllAnimeSlide", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 480px
          400: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.card-bottom {
  padding: 10px;
}
.card-bottom p {
  display: inline;
  line-height: 100%;
  font-size: 13px;
  padding: 0;
  margin: 0;
}
.premium-card {
  cursor: pointer;
}

.premium-card:hover .card-img img {
  transform: scale(1.1);
}

.card-img {
  width: 100%;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  object-fit: contain;
  transition: ease all 0.3s;
}

.card-about {
  padding: 10px;
}

.genre-wrap p {
  display: inline;
  line-height: 100%;
  text-transform: lowercase;
  margin-right: 7px;
  font-size: 13px;
  padding: 0;
  cursor: pointer;
}
</style>