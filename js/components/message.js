const message = {
    data() {
      return {
      };
    },
    template: `
    <div class="card">
    <div class="card-header msg_head">
      <div class="d-flex bd-highlight">
        <div class="img_cont">
          <img src="img/account.png" class="rounded-circle user_img">
          <span class="online_icon"></span>
        </div>
        <div class="user_info">
          <span>Chat avec Emma</span>
          <p>185 messages</p>
        </div>
        <div class="video_cam">
          <span><i class="fas fa-video"></i></span>
          <span><i class="fas fa-phone"></i></span>
        </div>
      </div>
      <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
      <div class="action_menu">
        <ul>
          <li><i class="fas fa-user-circle"></i> View profile</li>
          <li><i class="fas fa-users"></i> Add to close friends</li>
          <li><i class="fas fa-plus"></i> Add to group</li>
          <li><i class="fas fa-ban"></i> Block</li>
        </ul>
      </div>
    </div>
    <div class="card-body msg_card_body">
      <div class="d-flex justify-content-start mb-4">
        <div class="img_cont_msg">
          <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_cotainer">
          Salut, comment ça va ?
          <span class="msg_time">10:17</span>
        </div>
      </div>
      <div class="d-flex justify-content-end mb-4">
        <div class="msg_cotainer_send">
          Salut, je vais bien et toi ?
          <span class="msg_time_send">10:20</span>
        </div>
        <div class="img_cont_msg">
      <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
      </div>
      <div class="d-flex justify-content-start mb-4">
        <div class="img_cont_msg">
          <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_cotainer">
          Je vais bien, je suis en train de finir le projet en Node.JS.
          <span class="msg_time">10:32</span>
        </div>
      </div>
      <div class="d-flex justify-content-end mb-4">
        <div class="msg_cotainer_send">
          Ah, moi aussi ! Mais j'ai presque terminé !
          <span class="msg_time_send">10:33</span>
        </div>
        <div class="img_cont_msg">
      <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
      </div>
      <div class="d-flex justify-content-start mb-4">
        <div class="img_cont_msg">
          <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_cotainer">
          Cool, je cherche une idée de design. 
          <span class="msg_time">10:34</span>
        </div>
      </div>
      <div class="d-flex justify-content-end mb-4">
        <div class="msg_cotainer_send">
          Bon courage alors, à bientôt !
          <span class="msg_time_send">10:35</span>
        </div>
        <div class="img_cont_msg">
    <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
      </div>
      <div class="d-flex justify-content-start mb-4">
        <div class="img_cont_msg">
          <img src="img/account.png" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_cotainer">
          Merci, à la prochaine :)
          <span class="msg_time">10:45</span>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="input-group">
        <div class="input-group-append">
          <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
        </div>
        <textarea name="" class="form-control type_msg" placeholder="Écrire un message..."></textarea>
        <div class="input-group-append">
          <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
        </div>
      </div>
    </div>
  </div>
    `,
  };
  
  export default message;
  