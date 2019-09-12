<template>
  <div class="container">
    <h2>Liste des Organisateurs</h2>
    <div class="organisateur-list">
        <div v-if="users.length" >
          <b-table responsive bordered Outlined Hover :items="users"></b-table>
        </div>
        <div v-else>
          <b-spinner label="Loading..."></b-spinner>
        </div>
    </div>
  </div>
</template>
<script>
    import store from '../store'
  export default{
    data(){
      return{
        users: [
        ],
          store
      }
    },
    mounted() {
        if (!store.state.auth){
            this.$router.replace({ name: "login" })
        }
        else {
            this.getOrganisateur()

        }
    },
      methods:{
          getOrganisateur(){
              fetch(`http://localhost:8081/ServiceOrganisateur`,{
                  method: 'get'
              })
                  .then(response => response.json())
                  .then(data => this.users = data.response)
          }
      }
  }
</script>
<style>
  .organisateur-list{
    margin-top: 40px;
  }
</style>
