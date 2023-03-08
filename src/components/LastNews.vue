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