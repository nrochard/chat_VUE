import user from "./user.js";

const users = {
    data() {
      return {
      };
    },
    components: {
      user
    },
    template: `
    <div class="card mb-sm-3 mb-md-0 contacts_card">
      <div class="card-header">
        <div class="input-group">
          <input type="text" placeholder="Rechercher..." name="" class="search_bar form-control search">
          <div class="input-group-prepend">
            <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
          </div>
        </div>
      </div>
      <div class="card-body contacts_body">
        <ul class="contacts">
          <user></user>
          <li>
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img src="img/account.png" class="rounded-circle user_img">
                <span class="online_icon offline"></span>
              </div>
              <div class="user_info">
                <span>Thomas</span>
                <p>Thomas est déconnecté depuis 7 minutes</p>
              </div>
            </div>
          </li>
          <li>
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img src="img/account.png" class="rounded-circle user_img">
                <span class="online_icon"></span>
              </div>
              <div class="user_info">
                <span>Émilie</span>
                <p>Émilie est en ligne</p>
              </div>
            </div>
          </li>
          <li>
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img src="img/account.png" class="rounded-circle user_img">
                <span class="online_icon offline"></span>
              </div>
              <div class="user_info">
                <span>Raphaël</span>
                <p>Raphaël est déconnecté depuis 30 minutes</p>
              </div>
            </div>
          </li>
          <li>
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img src="img/account.png" class="rounded-circle user_img">
                <span class="online_icon offline"></span>
              </div>
              <div class="user_info">
                <span>Nicolas</span>
                <p>Nicolas est déconnecté depuis 50 minutes</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="card-footer"></div>
    </div>
    `,
  };
  
  export default users;
  