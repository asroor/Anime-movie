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
                to="/WatchView"
                class="accordion-card"
                v-for="accardionCard in accardionCard"
                :key="accardionCard"
              >
                <img :src="'/img/' + accardionCard.img" />
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
                to="/WatchView"
                class="accordion-card"
                v-for="accardionCard in accardionCard"
                :key="accardionCard"
              >
                <img :src="'/img/' + accardionCard.img" />
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
                to="/WatchView"
                class="accordion-card"
                v-for="accardionCard in accardionCard"
                :key="accardionCard"
              >
                <img :src="'/img/' + accardionCard.img" />
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
export default {
  data() {
    return {
        accardionCard: [
        {
          img: "9premium-card.png"
        },
        {
          img: "8premium-card.png"
        },
        {
          img: "10premium-card.png"
        },
        {
          img: "11premium-card.png"
        },
        {
          img: "12premium-card.png"
        },
        {
          img: "13premium-card.png"
        },
        {
          img: "14premium-card.png"
        },
        {
          img: "15premium-card.png"
        }
      ]
    };
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