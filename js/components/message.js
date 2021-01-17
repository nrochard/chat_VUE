const message = {
    data() {
      return {
        message : "",
        messages : [],
        myUser : ""
      };
    },

    methods:{
      sendMessage(){
        const newMessage = {
          id: Date.now(),
          message : this.message,
          date : this.getDate(),
          username : this.myUser,
        }
        
        this.messages.push(newMessage);
        console.log(this.messages)
        this.message = "";
      },
      getDate(d = new Date) {
        console.log(d)
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        const year = String(d.getFullYear());
      
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
      
        return `${day}/${month}/${year} à ${d.getHours()}:${(d.getMinutes()<10?'0':'') + d.getMinutes()}`;
      }
    },
    mounted(){
      this.myUser = faker.name.findName();
    },
    template: `
    <div class="card">
    <div class="card-header msg_head">
      <div class="d-flex bd-highlight">
        <div class="user_info">
          <span>Chat des DEV - 2ème année</span>
          <p>{{ this.messages.length }} messages</p>
        </div>
        <div class="video_cam">
          <span><i class="fas fa-video"></i></span>
          <span><i class="fas fa-phone"></i></span>
        </div>
      </div>
    </div>
    <div class="card-body msg_card_body">
      <div class="d-flex justify-content-start mb-5" v-for="message in messages">
        <div class="img_cont_msg">
          <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_cotainer">
          {{ message.message }}
          <span class="msg_time">{{ message.date }} de {{ message.username }}</span>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="input-group">
        <div class="input-group-append">
          <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
        </div>
        <textarea name="" class="form-control type_msg" placeholder="Écrire un message..." v-model="message"></textarea>
        <div class="input-group-append">
          <span class="input-group-text send_btn" @click="sendMessage"><i class="fas fa-location-arrow"></i></span>
        </div>
      </div>
    </div>
  </div>
    `,
  };
  
  export default message;
  