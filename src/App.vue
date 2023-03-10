<template>
  <div class="container">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import HomeView from "./views/HomeView.vue";
import axios from 'axios';

export default {
  components: { HomeView, Footer, Header },
  data(){
    return{
      allData:[],
      API: "https://api.svqt.uz/about/all",
    }
  },
  created(){
    axios.get(this.API)
      .then((res) => {
        this.allData = res.data
      })
      .catch((err) => {
        console.log(err);
      })
  }
};
</script>
<style>
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12, 
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12{
  padding: 5px;
}
body {
  overflow-y: scroll;
}
body::-webkit-scrollbar {
  width: 5px;
  background: #3b72ca27;
}
body::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 10px;
  background: #3b71ca;
}
</style>x