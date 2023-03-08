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

export default {
  components: { HomeView, Footer, Header }
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
.col-12 {
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