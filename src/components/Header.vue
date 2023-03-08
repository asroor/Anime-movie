<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-3">
          <!-- Pills navs -->
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >TIZIMGA KIRISH</a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="tab-register"
                data-mdb-toggle="pill"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >Roʻyxatdan oʻtish</a>
            </li>
          </ul>
          <!-- Pills navs -->

          <!-- Pills content -->
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form>
                <div class="text-center mb-3">
                  <p>Hisobga kiring:</p>
                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">yoki:</p>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="loginName" class="form-control form-control border" />
                  <label class="form-label" for="loginName">Email yoki foydalanuvchi nomi</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="loginPassword" class="form-control border" />
                  <label class="form-label" for="loginPassword">Parol</label>
                </div>

                <!-- 2 column grid layout -->
                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-3 mb-md-0">
                      <input class="form-check-input" type="checkbox" value id="loginCheck" checked />
                      <label class="form-check-label" for="loginCheck">Saqlab qolish</label>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex justify-content-center">
                    <!-- Simple link -->
                    <a href="#!">Parolni unutdingizmi?</a>
                  </div>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">TIZIMGA kirish</button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>
                    Aʼzo emas?
                    <a href="#!">Roʻyxatdan oʻtish</a>
                  </p>
                </div>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >
              <form>
                <div class="text-center mb-3">
                  <p>Sign up with:</p>
                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-secondary btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">or:</p>

                <!-- Name input -->
                <div class="form-outline mb-4">
                  <input type="text" id="registerName" class="form-control border" />
                  <label class="form-label" for="registerName">Ism</label>
                </div>

                <!-- Username input -->
                <div class="form-outline mb-4">
                  <input type="text" id="registerUsername" class="form-control border" />
                  <label class="form-label" for="registerUsername">Foydalanuvchi nomi</label>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="registerEmail" class="form-control border" />
                  <label class="form-label" for="registerEmail">Email</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="registerPassword" class="form-control border" />
                  <label class="form-label" for="registerPassword">Parol</label>
                </div>

                <!-- Repeat Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="registerRepeatPassword" class="form-control border" />
                  <label class="form-label" for="registerRepeatPassword">Parolni qayta kiriting</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value
                    id="registerCheck"
                    checked
                    aria-describedby="registerCheckHelpText"
                  />
                  <label
                    class="form-check-label"
                    for="registerCheck"
                  >Men shartlarni o'qib chiqdim va roziman</label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
              </form>
            </div>
          </div>
          <!-- Pills content -->
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel2">
              <span class="badge rounded-pill badge-primary">Janrlar</span>
            </h5>
            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h1 class="btn m-0 btn-secondary container-fluid">Romantika</h1>
            <h1 class="btn m-0 btn-secondary container-fluid">Jangari</h1>
            <h1 class="btn m-0 btn-secondary container-fluid">Melodrama</h1>
            <h1 class="btn m-0 btn-secondary container-fluid">Sehir</h1>
            <h1 class="btn m-0 btn-secondary container-fluid">Iblislar</h1>
            <h1 class="btn m-0 btn-secondary container-fluid">Kundalik hayot</h1>
            <h1 class="btn m-0 btn-secondary container-fluid">Komediya</h1>
            <h1 class="btn m-0 btn-secondary container-fluid">Fantastika</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar -->
    <nav class="navbar header navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Collapsible wrapper -->
        <div
          class="collapse d-flex align-items-center justify-content-between navbar-collapse"
          id="navbarSupportedContent"
        >
          <div class="d-flex">
            <!-- Navbar brand -->
            <a href="/" class="header-logo">
              <img src="/img/logo.svg" />
            </a>
            <!-- Left links -->
            <div class="btn-group mx-1 shadow-0">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >Katalog</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <router-link to="/AllAnime">
                    <a class="dropdown-item" href="#">Barcha Anime</a>
                  </router-link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Anime Film</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Anime Serial</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Anime OVA</a>
                </li>
              </ul>
            </div>

            <div class="btn-group mx-1 shadow-0">
              <button
                class="btn btn-secondary"
                type="button"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal2"
              >Janrlar</button>
            </div>
          </div>

          <!-- Right elements -->
          <div class="d-flex align-items-center">
            <!-- Icon -->
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>

            <!-- Notifications -->
            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link to="/adminChat">
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      <span>
                        <i class="fas fa-envelope"></i>Xabar
                      </span>
                      <span class="badge badge-danger ms-2">1</span>
                      <span class="visually-hidden">unread messages</span>
                    </a>
                  </router-link>
                </li>
                <router-link to="/News">
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      <span>
                        <i class="fas fa-newspaper"></i>Yangiliklar
                      </span>
                      <span class="badge badge-danger ms-2">1</span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
            <!-- Avatar -->
            <!-- data-mdb-toggle="modal" data-mdb-target="#exampleModal" -->
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <router-link to="/Profill">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-user"></i>Mening profilim
                    </a>
                  </li>
                </router-link>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-sign-out-alt"></i>Chiqish
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right elements -->
          <div class="bars">
            <i class="fas fa-bars"></i>
          </div>
          <div class="media-navbar-bg">
            <div class="media-navbar">
              <div class="d-flex flex-column">
                <!-- Navbar brand -->
                <a href="/" class="header-logo">
                  <img src="/img/logo.svg" />
                </a>
                <div class="close-icon">
                  <i class="fas fa-times"></i>
                </div>
                <a
                  href="https://t.me/AniBro"
                  class="btn container-fluid my-1 btn-primary d-flex align-items-center justify-content-center btn-md active"
                  role="button"
                  aria-pressed="true"
                >
                  <i class="fab fa-telegram me-1"></i> Bizga Telegramda qo'shiling!
                </a>
                <!-- search -->
                <div class="input-group mt-3">
                  <div class="form-outline">
                    <input id="form1" type="search" class="form-control border" />
                    <label class="form-label" for="form1">Search</label>
                  </div>
                  <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
                <div class="accordion mt-2 accordion-borderless" id="accordionFlushExampleX">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOneX">
                      <button
                        class="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseOneX"
                        aria-expanded="true"
                        aria-controls="flush-collapseOneX"
                      >Janrlar</button>
                    </h2>
                    <div
                      id="flush-collapseOneX"
                      class="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOneX"
                      data-mdb-parent="#accordionFlushExampleX"
                    >
                      <div class="accordion-body p-0">
                        <ul class="media-item m-0 p-0">
                          <li>Romantika</li>
                          <li>Melodrama</li>
                          <li>Sehir</li>
                          <li>Iblislar</li>
                          <li>Kundalik hayot</li>
                          <li>Komediya</li>
                          <li>Fantastika</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mt-2">
                    <h2 class="accordion-header" id="flush-headingTwoX">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseTwoX"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwoX"
                      >Katalog</button>
                    </h2>
                    <div
                      id="flush-collapseTwoX"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwoX"
                      data-mdb-parent="#accordionFlushExampleX"
                    >
                      <div class="accordion-body p-0">
                        <ul class="media-item m-0 p-0">
                          <li>Barcha Animelar</li>
                          <li>Melodrama</li>
                          <li>Sehir</li>
                          <li>Iblislar</li>
                          <li>Kundalik hayot</li>
                          <li>Komediya</li>
                          <li>Fantastika</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="home-network">
                  <!-- Youtube -->
                  <a
                    class="btn text-white"
                    style="background-color: #ed302f;"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <!-- Whatsapp -->
                  <a
                    class="btn text-white"
                    style="background-color: #25d366;"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                  <!-- Facebook -->
                  <a
                    class="btn text-white"
                    style="background-color: #3b5998;"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <!-- Twitter -->
                  <a
                    class="btn text-white"
                    style="background-color: #55acee;"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <!-- Instagram -->
                  <a
                    class="btn text-white"
                    style="background-color: #ac2bac;"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bars {
  display: none;
}
.home-network {
  margin-top: 10px;
  display: grid;
  gap: 2px;
}
.accordion-body[data-v-c970699f] {
  margin: 0;
  margin-top: 10px;
}
.accordion-body {
  margin: 0;
  margin-top: 10px;
}
.accordion-button {
  font-weight: 700;
  background-color: #dfe7f6;
}
.media-item li {
  list-style: none;
  padding: 5px 20px;
  text-transform: capitalize;
  font-weight: 600;
  border-bottom: 1px solid #e0e0e0;
}
.media-item li:hover {
  background-color: #dfe7f6;
}
.media-navbar {
  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background: #ffff;
  width: 70%;
  height: 100vh;
  z-index: 2;
}
.dropdown-item i {
  margin-right: 5px;
}
.navbar {
  box-shadow: none;
}
.header {
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.modal-body {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 10px 10px;
}
.header-logo {
  display: inline-block;
  margin-right: 20px;
}
.media-navbar-bg {
  display: none;
}
</style>