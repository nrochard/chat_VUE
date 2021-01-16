import chat from "./components/chat.js";
import notification from "./components/notification.js";


Vue.createApp({
  components: {
    chat,
    notification
  },
  mounted() {
    var randomName = faker.name.findName();
    console.log(randomName)
  }
}).mount("#app");
