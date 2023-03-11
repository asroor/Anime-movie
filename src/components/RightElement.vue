<template>
  <div>
    <div class="coming-right">
      <div class="accordion accordion-borderless" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i class="fas fa-eye"></i>
              Ko'p ko'rilgan
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample"
          >
            <div class="accordion-body">
              <router-link
                :to="`/WatchView/${anime.id}`"
                class="accordion-card"
                v-for="anime in moreAnime"
                :key="anime"
              >
                <img :src="'/img/' + anime.img" />
                <i class="far fa-play-circle"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-thumbs-up"></i>
              Reytingi yuqori
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-mdb-parent="#accordionExample"
          >
            <div class="accordion-body">
              <router-link
                :to="`/WatchView/${anime.id}`"
                class="accordion-card"
                v-for="anime in rankAnime"
                :key="anime"
              >
                <img :src="'/img/' + anime.img" />
                <i class="far fa-play-circle"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <i class="fas fa-video"></i>
              Anime filmlar
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-mdb-parent="#accordionExample"
          >
            <div class="accordion-body">
              <router-link
                :to="`/WatchView/${anime.id}`"
                class="accordion-card"
                v-for="anime in movieAnime"
                :key="anime"
              >
                <img :src="'/img/' + anime.img" />
                <i class="far fa-play-circle"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isTemplateNode } from "@vue/compiler-core";

export default {
  data() {
    return {
      moreAnime: [],
      rankAnime: [],
      movieAnime: []
    };
  },
  created() {
    this.filterMoreAnime();
  },
  methods: {
    filterMoreAnime() {
      let arr = this.$store.state.showMoreAnime;
      let rank = this.$store.state.rankAnime;
      let movieAnime = this.$store.state.movieAnime;
      arr.forEach(element => {
        let new_arr = this.$store.state.allAnime.filter(a => a.id == element);
        this.moreAnime.push(new_arr[0]);
      });
      rank.forEach(item => {
        let new_rank = this.$store.state.allAnime.filter(b => b.id == item);
        this.rankAnime.push(new_rank[0]);
      });
      movieAnime.forEach(movieAnimeItem => {
        let new_movieAnime = this.$store.state.allAnime.filter(b => b.id == movieAnimeItem);
        this.movieAnime.push(new_movieAnime[0]);
      });
    }
  }
};
</script>

<style scoped>
.coming-right[data-v-00859aee] {
  margin-top: 0;
}
.accordion-body[data-v-00859aee] {
  padding: 0;
  margin-top: 10px;
}

.accordion-body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.accordion-card i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  color: #ffff;
  opacity: 0;
  transition: ease 0.5s;
}
.accordion-card:hover .fa-play-circle {
  opacity: 1;
}
.accordion-card:hover img {
  filter: brightness(50%);
}
.accordion-card {
  margin-bottom: 10px;
  width: 48%;
  position: relative;
}
.accordion-card img {
  transition: ease 0.5s;
  width: 100%;
}
.accordion-button {
  font-weight: 600;
  display: flex;
  align-items: center;
}
.accordion-button i {
  margin-right: 5px;
}
.accordion-item {
  margin-bottom: 10px;
}
.accordion-header {
  background-color: #e3ebf7;
  border-radius: 10px;
}
.coming-right {
  width: 380px;
  margin-top: 45px;
}
</style>