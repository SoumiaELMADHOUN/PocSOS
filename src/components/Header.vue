<template>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">POC SOS</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/">Prestataires</router-link>
                    </b-nav-item>
                    <b-nav-item >
                        <router-link to="/organisateur">Organisateurs</router-link>
                    </b-nav-item>
                    <b-nav-item class="navRight">
                        <router-link to="/login">LOGOUT</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #ece97a;
    }
    .navRight{
        position: absolute;
        right: 0;
        margin-right: 10px;
    }
</style>
