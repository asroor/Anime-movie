<template>
  <div class="container">
    <HomeTop />
    <div class="watch-wrap">
      <div class="left-page">
        <div class="details-wrap">
          <div class="details-anime d-md-flex">
            <div class="anime-img">
              <img :src="'/img/' + $store.state.anime.img "/>
            </div>
            <div class="anime-detal-about p-0 container-fluid">
              <div class="finfo"></div>
              <div class="container-fluid m-0 p-0">
                <div class="detal-series">
                  <dt class>Nomi:</dt>
                  <dd class>{{$store.state.anime.title}}</dd>
                </div>
                <div class="detal-series">
                  <dt class>Sanasi:</dt>
                  <dd class>{{$store.state.anime.dateTime}}</dd>
                </div>
                <div class="detal-series">
                  <dt class>Janr:</dt>
                  <dd class>{{$store.state.anime.genre}}</dd>
                </div>
                <div class="detal-series">
                  <dt class>tili:</dt>
                  <dd class>{{$store.state.anime.language}}</dd>
                </div>
                <div class="detal-series">
                  <dt class>Davomiyligi:</dt>
                  <dd class>{{$store.state.anime.duration}}</dd>
                </div>
              </div>
            </div>
          </div>
          <div class="note mt-3 note-primary mb-3">
            <strong>Malumot:</strong>
          </div>
          <!-- anime about -->
          <div class="anime-about">
            <p>{{ $store.state.anime.about }}</p>
          </div>
        </div>
        <!-- Watch video -->
        <div class="watch-video">
          <div class="title">
            <h3>
              <span>{{animeTitle.title}}</span>
              - {{ }} Qism
            </h3>
          </div>
          <!-- Tabs navs -->
          <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="ex2-tab-1"
                data-mdb-toggle="tab"
                href="#ex2-tabs-1"
                role="tab"
                aria-controls="ex2-tabs-1"
                aria-selected="true"
              >Online ko'rish</a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="ex2-tab-2"
                data-mdb-toggle="tab"
                href="#ex2-tabs-2"
                role="tab"
                aria-controls="ex2-tabs-2"
                aria-selected="false"
              >
                Treylerini ko'rish
                <i class="fas fa-video"></i>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="ex2-tab-3"
                data-mdb-toggle="tab"
                href="#ex2-tabs-3"
                role="tab"
                aria-controls="ex2-tabs-3"
                aria-selected="false"
              >yuklab olish</a>
            </li>
          </ul>
          <!-- Tabs navs -->

          <!-- Tabs content -->
          <div class="tab-content" id="ex2-content">
            <div
              class="tab-pane fade show active"
              id="ex2-tabs-1"
              role="tabpanel"
              aria-labelledby="ex2-tab-1"
            >
              <div class="video">
                <!-- <video controls poster="/img/video-bg.png" preload="none">
                  <source src="/video/youName.mp4" type="video/mp4" />
                </video>-->
                <video
                  controls
                  data-poster="/img/video-bg.png"
                  class="vid1"
                >
                  <!-- Video files -->
                  <source src="/video/youName.mp4" type="video/mp4"/>
                </video>
              </div>
            </div>
            <div class="tab-pane fade" id="ex2-tabs-2" role="tabpanel" aria-labelledby="ex2-tab-2">
              <iframe
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/BCf_Fc8uk3o"
                title="Infinite Hell [Obito] - 3D AMV (Unreal Engine 5 Cinematic) [4k] 外道魔像"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="tab-pane fade" id="ex2-tabs-3" role="tabpanel" aria-labelledby="ex2-tab-3">
              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary"
                  type="button"
                  v-for="downloadBtnItem of downloadBtn"
                  :key="downloadBtnItem"
                >yuklab olish ({{ downloadBtnItem.format }})</button>
              </div>
            </div>
          </div>
          <!-- Tabs content -->

          <div class="note mt-3 note-primary mb-3">
            <strong>Anime ro'yxat:</strong>
          </div>
          <ul class="anime-episode row">
            <li
              v-on:click="episode.number = avtivEpisode"
              class="col-md-2"
              v-for="episodeItem of episode"
              :key="episodeItem"
            >
              <button
                v-on:click="checked()"
                type="button"
                class="btn btn-primary"
              >{{ episodeItem.number }} - qism</button>
            </li>
          </ul>
          <div class="note mt-3 note-primary mb-3">
            <strong>Kadrdlar:</strong>
          </div>
          <div class="kadr">
            <div class="kadr-img" v-for="cadreItem of cadre" :key="cadreItem">
              <img class="zoom" :src="'/img/' + cadreItem.img" />
            </div>
          </div>
        </div>
      </div>
      <!-- right -->
      <RightElement />
    </div>
  </div>
</template>

<script>
import HomeTop from "../components/Home-top.vue";
import RightElement from "../components/RightElement.vue";

export default {
  components: { HomeTop, RightElement },
  data() {
    return {
      downloadBtn: [
        {
          format: "HD 720P"
        },
        {
          format: "MOBILE HD 480P"
        }
      ],
      episode: [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 10 },
        { number: 11 },
        { number: 12 },
        { number: 13 }
      ]
    };
  },
  mounted() {
    const player = new Plyr(".vid1");
  },
  created(){
    this.$store.commit("findAnime",this.$route.params.id);
  }
};
</script>

<style scoped>
.watch-wrap {
  display: flex;
  justify-content: space-between;
}
.finfo[data-v-311ee284] {
  margin-right: 11px;
}
.nav-link i {
  margin-left: 7px;
}
.finfo {
  width: 7px;
  height: 281px;
  background: #c5dafa;
}

.btn-secondary {
  width: 100%;
}
.kadr {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.kadr .kadr-img {
  width: 33%;
}
.kadr .kadr-img img {
  margin-bottom: 5px;
  width: 100%;
}
.row {
  padding: 0;
  margin: 0;
}
.anime-episode li button {
  width: 100%;
}
.anime-episode {
  padding: 0;
  margin: 0;
}
.anime-episode li {
  padding: 0 5px;
  margin-bottom: 5px;
  list-style: none;
}
video {
  width: 100%;
}
.anime-detal-about .detal-series dd {
  line-height: 110%;
  text-transform: lowercase;
}
.anime-detal-about .detal-series dt {
  line-height: 110%;
  text-transform: capitalize;
}
.anime-detal-about {
  margin-left: 20px;
  display: flex;
}
.anime-detal-about .detal-series:hover dt::before {
  transform: scale(1.1);
  background: #3b71ca;
}
.anime-detal-about .detal-series:hover {
  background-color: #c5dafa;
}
.anime-detal-about .detal-series {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #e3ebf7;
  border-radius: 4px;
}
.anime-detal-about .detal-series dd {
  margin: 0;
  margin-left: 7px;
}
.anime-detal-about .detal-series dt::before {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  content: " ";
  position: absolute;
  top: 50%;
  left: -21px;
  background: #5197ff;
  margin-top: -6px;
}
.anime-detal-about .detal-series dt::after {
  top: 50%;
  left: -12px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  border-right-color: #3b71ca;
  pointer-events: none;
  border-width: 6px;
  margin-top: -6px;
}
.anime-detal-about .detal-series dt {
  position: relative;
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffff;
  background-color: #3b71ca;
  border-radius: 4px 0 0 4px;
}
.left-page {
  max-width: 880px;
}
.details-wrap .anime-img {
  width: 400px;
}
.details-wrap .anime-img img {
  width: 100%;
}
</style>