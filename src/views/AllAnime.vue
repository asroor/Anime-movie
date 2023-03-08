<template>
  <div class="container">
    <HomeTop />
    <div class="allAnime-cards row">
      <div class="col-md-4 col-lg-2 col-6 mb-1" v-for="allCard of card" :key="allCard">
        <div class="premium-card border">
          <div class="card-img">
            <img :src="'/img/' + allCard.img" />
          </div>
          <div class="card-about">
            <dt class>{{ allCard.title }}</dt>
            <div class="genre-wrap">
              <p class="genre" v-for="genreItem of genre" :key="genreItem">{{ genreItem.genreText }}</p>
            </div>
          </div>
          <div class="card-bottom border-top d-flex align-items-center justify-content-between">
            <p class="view text-lowercase">
              <i class="fas fa-eye"></i>
              {{ allCard.viewer }}
            </p>
            <p class="text-lowercase">{{ allCard.type }}</p>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HomeTop from "../components/Home-top.vue";

export default {
  components: { HomeTop },
  data() {
    return {
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
.pagination-btn {
  border: transparent;
  background: rgba(0, 0, 255, 0.158);
}
.pagination-btn:last-child {
  margin: 0;
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

/* @media (max-width:992px) {
  
} */
</style>