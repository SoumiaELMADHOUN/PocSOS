<template>
    <div id="login">
        <h1>Login</h1>
        <b-form-input placeholder="Email" v-model="input.email" > </b-form-input>
        <br/>
        <b-form-input type="password" v-model="input.password" placeholder="Password" > </b-form-input>
        <br/>
        <b-button variant="outline-primary" @click="login()">Login</b-button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import store from '../store'
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                },
                users:[],
                store
            }
        },
        mounted() {
            fetch(`http://localhost:8081/servicePrestataire`,{
                method: 'get'
            })
                .then(response => response.json())
                .then(data => this.users = data.response)
        },
        methods: {
            ...mapActions([
                'commitChangeAuth'
            ]),
            login() {
                if (this.input.email !== "" && this.input.password !== "") {
                    for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i].Email === this.input.email && this.users[i].Nom === this.input.password) {
                            this.commitChangeAuth()
                            this.$router.replace({ name: "prestataire" })
                        }
                    }
                    if (!store.state.auth){
                        this.input.email='',
                            this.input.password=''
                    }
                }
                else {
                    console.log("A username and password must be present")
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        padding: 20px;
    }
</style>
