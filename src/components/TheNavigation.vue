<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/arts">Arts</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/skill">Skill</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/manage">Manage</router-link>
  </div>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #8b52a1;
}
</style>
