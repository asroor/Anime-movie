<template>
  <div class="news-wrap">
    <Home />
    <div class="coming-body">
      <div class="coming-soon">
        <div class="note note-primary my-3">
          <strong>YANGILIKLAR:</strong>
        </div>
        <div class="coming-page">
          <div class="coming-left">
            <div class="coming-series" v-for="comingSeries of comingSeries" :key="comingSeries">
              <router-link to="/WatchView">
                <dt>{{ comingSeries.title }}</dt>
              </router-link>
              <div class="coming-image">
                <img :src="'/img/' + comingSeries.img " alt />
              </div>
              <div class="coming-about">
                <p v-html="comingSeries.about" class="lh-sm p-0 m-0"></p>
                <div class="time">{{ comingSeries.data }}</div>
              </div>
              <div class="line-bottom"></div>
            </div>
          </div>
          <RightElement />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTop from "../components/Home-top.vue";
import Home from "../components/Home.vue";
import RightElement from "../components/RightElement.vue";

export default {
  components: { HomeTop, Home, RightElement },
  data() {
    return {
      comingSeries: [
        {
          title: "Deca-Dence: 2-mavsumni",
          img: "coming-6.jpg",
          about:
            "Yakuniy anime seriyasidan keyin Deca-Dence muxlislari ikkinchi mavsumni talab qilmoqdalar. Ammo ular buni olishadimi? Deca-Dence 2020 yil yozgi anime mavsumida katta xit bo'ldi. Dastlab, apokaliptik yirtqich hayvonlarga qarshi kurashuvchi animeni Titanga hujum bilan solishtirishdi, ba'zilari uni seriyaning kloni deb atashgan. Ammo bu ayblovlar uzoq davom etmadi va erta burilish Deca-Denceni boshqa, ixtirochi va shuhratparast narsaga aylantirib, Yaponiyada ham, undan tashqarida ham katta muxlislar bazasini to'plaganida so'nib qoldi. Mavsum finalidan so'ng muxlislar ikkinchi mavsum tayyormi, deb hayron bo'lishdi. Shou Studio NUTning sentimental pozitsiyasini egallaydi. Hamma narsa uning foydasiga bo'lishiga qaramay, bunga arziydimi yoki yo'qligini aytish qiyin",
          data: Date()
        },
        {
          title: "Uzaki-chan suhbat qurmoqchi!",
          img: "coming-7.jpg",
          about:
            "Uzaki-chan istaydi manganing televizion animatsiyasining rasmiy veb-sayti. (Uzaki-chan va Asobitai! yoki “Uzaki birga bo'lishni xohlaydi!”) Take tomonidan anime uchun reklama rolikni namoyish qila boshladi! Anime premerasi iyul oyida bo'lib o'tishi rejalashtirilgan.   “Yetti dengiz” hikoyasini shunday tasvirlaydi: “Sakurai Shinichining yagona orzusi – biroz tinchlik va osoyishtalik. Ammo yigitdan bir yosh kichik, zo'ravon kollej talabasi Uzaki Xonning boshqa rejalari borga o'xshaydi. Xohlagani bor-yo‘g‘i uni mazax qilish va mazax qilish. Ammo uning jozibasi va qat'iyatliligi bilan bu ajoyib munosabatlarning boshlanishi bo'lishi mumkin! ”",
          data: Date()
        },
        {
          title: "Anime Dragon uchun yangiliklar uy-ovga ketadi",
          img: "coming-8.jpg",
          about:
            "Signal.MD sayti Kavo Tanuki va rassom Choko Aya tomonidan Dragon Goes House-Hunting (Dragon, Ie o Kau yok  mangasining avval e'lon qilingan anime moslamasini ishlab chiqarayotganini e'lon qildi! Studiya, shuningdek, anime televizion anime seriyasi bo'lishini e'lon qildi.Seven Seas Entertainment voqeani shunday tasvirlaydi: “Agar ajdaho o'zi uchun belgilangan dahshatli me'yorlarga rioya qilmasa, oilasi uni haydab chiqaradi. U yangi uy izlab yo'lga chiqadi, lekin tez orada yo'lda hayot afsonaviy qo'rqoq hayvon uchun joy emasligini bilib oladi. Elflar, mittilar va boshqa afsonaviy mavjudotlarga to'la xayoliy dunyoda,",
          data: Date()
        },
        {
          title:
            "Yaponiya qahramonlari mukofoti bosh mukofoti Demon Slayer: Kimetsu no Yaiba manga animesiga topshirildi.",
          img: "coming-10.jpg",
          about:
            "Yaponiya Belgilar Litsenziyalash Assotsiatsiyasi (CBLA) Yaponiya Belgilari mukofoti g'oliblarini e'lon qildi! 2019-yildan beri mukofot “eng katta tezlik bilan doimiy ravishda rekord raqamlarni qo‘lga kiritgan kishiga beriladi. Qahramonlar nafaqat keng yoshdagi odamlarni qiziqtiradigan hikoyalarga ega, balki ijtimoiy hodisaga aylanish uchun soch turmagi, moda va boshqa jihatlarga ham e'tibor qaratadi. Koyoharu Gotugening 'Demon Slayer: Kimetsu no Yaiba' ('Demon Slayer') mangasining teleanimasiga moslashuvi Gran-pri, Bosh mukofot va 'Yangi yuz' mukofotini qo'lga kiritdi.",
          data: Date()
        }
      ],
    };
  }
};
</script>

<style scoped>
.time {
  font-weight: 600;
  color: #3b71ca;
  margin-top: 5px;
  background: #dfe7f6;
  width: fit-content;
}
.line-bottom {
  width: 100%;
  height: 5px;
  background: #e3ebf7;
  margin: 10px 0;
}
.coming-image {
  margin: 10px 0;
}
.coming-image img {
  width: 100%;
}
.coming-page {
  display: flex;
  justify-content: space-between;
}
.coming-page .coming-left {
  max-width: 900px;
}
.coming-series dt {
  font-size: 35px;
  font-weight: 700;
  line-height: 100%;
}
/* .carousel-item {
    height: 550px;
} */
.news-wrap {
  margin-top: 50px;
}
</style>