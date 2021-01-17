import user from "./user.js";

const users = {
    data() {
      return {
        users : [],
      };
    },
    components: {
      user
    },
    mounted(){
      setInterval(this.connectedUser, 5000);
    },
    methods: {
      connectedUser() {
        const user = {
            id: Date.now(),
            username: faker.name.findName()
        };
        this.users.push(user);
      }
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
          <p v-if="!users.length" class="empty_chat">Personne n'est connectée</p>
          <li v-for="user in users"> 
            <user :user="user"></user>
          </li>
        </ul>
      </div>
      <div class="card-footer"></div>
    </div>
    `,
  };
  
  export default users;
  