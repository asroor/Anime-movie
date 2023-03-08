<template>
  <div class="header-top mb-2">
    <!-- telegram link -->
    <a
      href="https://t.me/AniBro"
      class="btn container-fluid btn-primary d-flex align-items-center justify-content-center btn-md active"
      role="button"
      aria-pressed="true"
    >
      <i class="fab fa-telegram"></i> Bizga Telegramda qo'shiling!
    </a>
    <div class="home-top d-flex align-items-center justify-content-between">
      <!-- search -->
      <div class="input-group">
        <div class="form-outline">
          <input id="form1" type="search" class="form-control" />
          <label class="form-label" for="form1">Search</label>
        </div>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="home-network grid">
        <!-- Youtube -->
        <a class="btn mx-1 text-white" style="background-color: #ed302f;" href="#!" role="button">
          <i class="fab fa-youtube"></i>
        </a>
        <!-- Whatsapp -->
        <a class="btn mx-1 text-white" style="background-color: #25d366;" href="#!" role="button">
          <i class="fab fa-whatsapp"></i>
        </a>
        <!-- Facebook -->
        <a class="btn mx-1 text-white" style="background-color: #3b5998;" href="#!" role="button">
          <i class="fab fa-facebook-f"></i>
        </a>
        <!-- Twitter -->
        <a class="btn mx-1 text-white" style="background-color: #55acee;" href="#!" role="button">
          <i class="fab fa-twitter"></i>
        </a>
        <!-- Instagram -->
        <a class="btn mx-1 text-white" style="background-color: #ac2bac;" href="#!" role="button">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {},
  mounted() {
    const searchFocus = document.getElementById("search-focus");
    const keys = [
      { keyCode: "AltLeft", isTriggered: false },
      { keyCode: "ControlLeft", isTriggered: false }
    ];

    window.addEventListener("keydown", e => {
      keys.forEach(obj => {
        if (obj.keyCode === e.code) {
          obj.isTriggered = true;
        }
      });

      const shortcutTriggered =
        keys.filter(obj => obj.isTriggered).length === keys.length;

      if (shortcutTriggered) {
        searchFocus.focus();
      }
    });

    window.addEventListener("keyup", e => {
      keys.forEach(obj => {
        if (obj.keyCode === e.code) {
          obj.isTriggered = false;
        }
      });
    });
  }
};
</script>

<style scoped>
video {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
.header-top {
  margin-top: 70px;
}
.fa-telegram {
  font-size: 20px;
  margin-right: 5px;
}
.input-group {
  margin: 20px 0;
  width: 350px;
}
@media (max-width: 885px) {
  .home-top {
    margin-top: 20px;
    flex-direction: column-reverse;
  }
  .input-group {
    width: 100%;
  }
  .form-outline {
    width: 100%;
  }
  .form-outline #form1 {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .header-top {
    display: none !important;
  }
}
</style>