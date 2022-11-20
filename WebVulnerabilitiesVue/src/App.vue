<template>
  <div class="vue-template">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left" href="https://itsecuritylab.hs-esslingen.de" target="_blank">
          IT Security Lab
        </a>
          <p class="m-auto">
            by Nils Lübben and Marcel Marek
          </p>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item mx-2">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-success" to="/">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main -->
    <div class="App">
          <router-view />
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style>
.App{
  padding-bottom: 1rem;
}
.navbar {
  background-color: blue;
  margin-bottom: 1rem;
}
</style>