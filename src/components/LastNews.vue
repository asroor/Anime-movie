<template>
  <div>
    <div class="note note-primary my-3">
  <strong>Yangilik</strong>
</div>
    <div class="row">
        <div class="col-xl-6">
            <div class="news-about">
                <p>{{ newsAbout.text }}</p>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="online-news">
              <iframe class="" width="100%" height="350px" src="https://www.youtube.com/embed/VKCDPNxZ1gk" title="HINATA | barney sku - Your eyes [Amv / edit ]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["newsAbout"],
    data() {
        return {

        }
    }
};
</script>

<style scoped>

</style>