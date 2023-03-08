<template>
  <div class="container">
    <section id="profil">
      <div class="profil-wrap">
        <div class="profil-backgroud">
          <div class="bg-edit"></div>
          <img src="/img/profill-bg.png" alt />
          <div class="profil-pamel d-md-flex align-items-center justify-content-between">
            <div class="pannel-right d-md-flex align-items-end">
              <div class="profil-head">
                <i class="fas fa-camera"></i>
              </div>
              <div class="panel-user">
                <h5 class="p-0 m-0">asror shodiyev</h5>
                <p class="p-0 m-0">asrorshodiyev11@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Tabs navs -->
        <ul class="nav nav-tabs mt-3" id="ex1" role="tablist">
          <li class="nav-item mb-3" role="presentation">
            <a
              class="nav-link active"
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >Sotib olingan</a>
          </li>
          <li class="nav-item mb-3" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-3"
              data-mdb-toggle="tab"
              href="#ex1-tabs-3"
              role="tab"
              aria-controls="ex1-tabs-3"
              aria-selected="false"
            >Saralangan</a>
          </li>
        </ul>
        <!-- Tabs navs -->

        <!-- Tabs content -->
        <div class="tab-content" id="ex1-content">
          <div
            class="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <div class="allAnime-cards row">
              <div class="col-md-2 mb-4" v-for="allCard of card" :key="allCard">
                <div class="premium-card border">
                  <div class="card-img">
                    <img :src="'/img/' + allCard.img" />
                  </div>
                  <div class="card-about">
                    <dt class>{{ allCard.title }}</dt>
                    <div class="genre-wrap">
                      <p
                        class="genre"
                        v-for="genreItem of genre"
                        :key="genreItem"
                      >{{ genreItem.genreText }}</p>
                    </div>
                  </div>
                  <div
                    class="card-bottom border-top d-flex align-items-center justify-content-between"
                  >
                    <p class="view text-lowercase">
                      <i class="fas fa-eye"></i>
                      {{ allCard.viewer }}
                    </p>
                    <p class="text-lowercase">{{ allCard.type }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
            <div class="allAnime-cards row">
              <div class="col-md-2 mb-4" v-for="allCard of card" :key="allCard">
                <div class="premium-card border">
                  <div class="card-img">
                    <img :src="'/img/' + allCard.img" />
                  </div>
                  <div class="card-about">
                    <dt class>{{ allCard.title }}</dt>
                    <div class="genre-wrap">
                      <p
                        class="genre"
                        v-for="genreItem of genre"
                        :key="genreItem"
                      >{{ genreItem.genreText }}</p>
                    </div>
                  </div>
                  <div
                    class="card-bottom border-top d-flex align-items-center justify-content-between"
                  >
                    <p class="view text-lowercase">
                      <i class="fas fa-eye"></i>
                      {{ allCard.viewer }}
                    </p>
                    <p class="text-lowercase">{{ allCard.type }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Tabs content -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
#profil {
  margin-top: 60px;
}
.profil-wrap {
  width: 100%;
}
.profil-backgroud {
  position: relative;
}
.profil-backgroud img {
  width: 100%;
}
.profil-pamel {
  position: absolute;
  top: auto;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #3b71ca;
  padding: 20px;
}
.pannel-right {
  padding: 20px;
  padding-left: 0;
  position: absolute;
  bottom: 0;
}
.profil-head {
  border: 5px solid #fff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
}
.profil-head i {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
  color: #ffffff;
  font-size: 45px;
  opacity: 0;
}
.profil-head:hover i {
  opacity: 1;
}
.profil-head:hover {
  box-shadow: inset 0 0 0 100px #00000091;
}
.panel-user {
  margin-left: 10px;
}
.panel-user p {
  color: #ffff;
}
.panel-user h5 {
  color: #ffff;
  text-transform: lowercase;
}
</style>