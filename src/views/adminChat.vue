<template>
  <div class="container">
    <div class="chat-wrap">
      <div class="chat-user-top border">
        <div class="user-blog">
          <div class="note d-flex note-primary">
            <div class="user-img">
              <img :src="'/img/' + avatar.img" />
            </div>
            <div class="user-name">
              <strong>
                AniBro admin
                <img src="/img/galchka.svg" />
              </strong>
              <p class="online">
                <span class="radius"></span> online
              </p>
            </div>
          </div>
          <div class="chat-body">
            <div class="chat-table">
              <div class="chat-line" v-for="chat in chats" :key="chat.id">
                <p class="chat-text">{{ chat.msg }}</p>
              </div>
            </div>
            <form @submit.prevent class="form-outline d-flex border-top mt-2">
              <input
                class="massage container-fluid"
                v-model="msg"
                type="text"
                placeholder="xabar yozing"
              />
              <button
                type="submit"
                class="btn submit"
                style="background-color: #007aff;"
                @click="createMessage()"
              >
                <img src="/img/submit.svg" alt />
              </button>
            </form>
          </div>
          <!-- chat -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: { img: "admin.png" },
      msg: "",
      chats: []
    };
  },
  methods: {
    createMessage() {
      if (this.msg) {
        this.chats.push({
          id:this.chats.length + 1, 
          name:"",
          msg:this.msg, 
          date:Date.now(),
        }),
        this.msg = ""
      }
    }
  }
};
</script>

<style scoped>
.massage {
  outline: none;
  border: transparent;
  white-space: normal;
  overflow-wrap: break-word;
}
.chat-table .chat-line .chat-text {
  color: #fff;
  padding: 0;
  font-size: 14px;
  margin: 0;
  overflow: visible;
  background-color: #007aff;
  padding: 5px 10px;
  border-radius: 20px 0px 20px 20px;
  max-width: 300px;
  overflow-wrap: break-word;
  height: 100%;
}

.chat-table .chat-line {
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 10px;
}
.chat-user-top {
  border-radius: 5px 5px 0px 0px;
}
.submit {
  box-shadow: none;
  border-radius: 0;
}

.chat-table {
  height: 500px;
  overflow-y: scroll;
  padding: 5px;
}
.chat-table::-webkit-scrollbar {
  display: none;
}
.radius {
  display: block;
  border-radius: 100%;
  width: 7px;
  height: 7px;
  background: #00b37e;
  margin: 0;
  padding: 0;
  margin-right: 3px;
}
strong {
  margin: 0;
  padding: 0;
}
.online {
  text-transform: capitalize;
  font-size: 12px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  color: #00b37e;
  line-height: 100%;
}
.user-img {
  border: 2px solid #fff;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 10px;
}
.user-img img {
  width: 100%;
}
.chat-wrap {
  margin-top: 70px;
}
</style>