<template>
  <div class="container">
    <h2>Liste des Prestataires </h2>
    <div class="organisateur-list">
      <div v-if="users.length" >
        <b-table responsive bordered Hover :items="users" :fields="fields"></b-table>
      </div>
      <div v-else>
        <b-spinner label="Loading..."></b-spinner>
      </div>
    </div>
    <br/>
    <div>
    <b-form>
      <b-form-group
              id="input-group-1"
              label="Nom:"
              label-for="input-1"
      >
        <b-form-input
                id="input-1"
                v-model="form.Nom"
                type="email"
                required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Prenom:" label-for="input-2">
        <b-form-input
                id="input-2"
                v-model="form.Prenom"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Telephone:" label-for="input-2">
        <b-form-input
                id="input-2"
                v-model="form.telephone"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Email:" label-for="input-2">
      <b-form-input
              id="input-2"
              v-model="form.Email"
              required
      ></b-form-input>
    </b-form-group>
      <b-form-group id="input-group-2" label="Competence:" label-for="input-2">
        <b-form-input
                id="input-2"
                v-model="form.Competence"
                required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" @click="createPresta()" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>

  <!--  BV
    <form>
      <label>Nom</label>
      <input type="text" name="nom" v-model="Nom">
      <br/>
      <label>Prenom</label>
      <input type="email" name="prenom" v-model="Prenom">
      <br/>
      <label>Telephone</label>
      <input type="text" name="telephone" v-model="telephone">
      <br/>
      <label>Email</label>
      <input type="text" name="email" v-model="Email">
      <br/>
      <label>Competence</label>
      <input type="text" name="competence" v-model="Competence">
      <br/>
      <input type="button" @click="createPresta()" value="Add">
    </form>
    -->
  </div>
</template>
<script>
  import store from '../store'
  export default{
    data(){
      return{
        fields: ['Nom', 'Prenom', 'telephone', 'Email', 'Competence'],
        users: [
        ],
        form:{
          Nom:'',
          Prenom:'',
          telephone:'',
          Email:'',
          Competence:''
        },
        store
      }
    },
    mounted() {
      if (!store.state.auth){
        this.$router.replace({ name: "login" })
      }
      else {
        this.getPresta()

      }
    },
    methods:{
      getPresta(){
        fetch(`http://localhost:8081/servicePrestataire`,{
          method: 'get'
        })
                .then(response => response.json())
                .then(data => this.users = data.response)
      },
      createPresta(){
        let formData = new FormData();
        formData.append("Nom", this.form.Nom)
        formData.append("Prenom", this.form.Prenom)
        formData.append("telephone", this.form.telephone)
        formData.append("Email", this.form.Email)
        formData.append("Competence", this.form.Competence)

        let user ={}
        formData.forEach(function (value,key){
          user[key] = value
        })
        fetch(`http://localhost:8081/ServiceAddPresta`,{
          method: 'POST',
          body: formData
        })
                .then(response => {
                  console.log(user)
                  this.users.push(user)
                  this.resetForm()
                })

      },
      resetForm(){
        this.form.Nom = '',
        this.form.Prenom = '',
        this.form.telephone = '',
        this.form.Email = '',
        this.form.Competence = ''

      }

    }
  }
</script>
<style>
  .organisateur-list{
    margin-top: 40px;
  }
</style>
