<template>
  <div class="mt-4">
    <div>
      <div class="premium-wrap">
        <div class="title">
          <router-link
            to
            class="note d-flex align-items-center justify-content-between note-primary mb-3"
          >
            <strong class="m-0 text-capitalize">premium-anime</strong>
          </router-link>
        </div>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper py-1">
            <div
              class="swiper-slide border shadow-inner"
              v-for="(premiumCardItem, i) in cardFilling"
              :key="i"
            >
              <router-link :to="`/WatchView/${i}`" class="premium-card">
                <div class="card-img">
                  <div class="card-eps">
                    <div class="eps">
                      <span class="d-flex align-items-center">
                        <p class="p-0 m-0">{{ episode.eps }}</p>/
                        <h6 class="p-0 m-0">{{ episode.full }}</h6>
                        <p class="p-0 m-0">{{ episode.animeType }}</p>
                      </span>
                    </div>
                  </div>
                  <img :src="'/img/' + premiumCardItem.img" />
                </div>
                <div class="card-about">
                  <dt class>{{ premiumCardItem.title }}</dt>
                  <div class="genre-wrap">
                    <p>{{ premiumCardItem.genre }}</p>
                  </div>
                </div>
                <div
                  class="card-bottom border-top d-flex align-items-center justify-content-between"
                >
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
    </div>
  </div>
</template>

<script scoped>
export default {
  props: ["cardFilling",],
  data() {
    return {

      episode: {
        eps: 4,
        full: 12,
        animeType: "",
      },
      activeIcon: true,
    };
  },
  methods: {

  },
  mounted() {
    if (Swiper) {
      var swiper = new Swiper(".mySwiper", {
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
.active-icon {
  color: #2196f3 !important;
}
.sale-anime i {
  color: #ffff;
  margin-left: 10px;
  font-size: 20px;
}
.sale-anime i:first-child {
  margin: 0;
}
.sale-anime {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 70px;
  background: rgba(55, 55, 55, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
}
.card-eps .eps span h6 {
  font-weight: 300;
  font-size: 12px;
}
.card-eps .eps span {
  font-weight: 300;
}
.card-eps .eps {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  color: #ffff;
}
.card-eps {
  position: absolute;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(55, 55, 55, 0.8);
  left: 0;
  bottom: 0;
  z-index: 2;
}
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
  position: relative;
}

.premium-card:hover .card-img img {
  transform: scale(1.1);
}

.card-img {
  width: 100%;
  overflow: hidden;
  position: relative;
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

h3 {
  text-transform: capitalize;
}
</style>