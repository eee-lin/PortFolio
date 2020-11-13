<template>
  <v-toolbar color="teal" dark class="d-flex justify-center">
    <v-toolbar-items v-for="(item, index) in items" :key="index">
      <v-btn text class="hidden-sm-and-down">
        <router-link v-bind:to="item.path">
          {{ item.title }}
        </router-link>
      </v-btn>

      <v-btn text class="hidden-md-and-up">
        <router-link v-bind:to="item.path">
          <v-icon medium>{{ item.icon }}</v-icon>
        </router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      items: [
        {
          title: "トップ",
          icon: "fas fa-home",
          path: "/",
        },
        {
          title: "プロフィール",
          icon: "far fa-id-badge",
          path: "/profile",
        },
        {
          title: "作品",
          icon: "fas fa-folder",
          path: "/works",
        },
        {
          title: "スキル",
          icon: "fas fa-code",
          path: "/skills",
        },
        {
          title: "お問い合わせ",
          icon: "far fa-envelope",
          path: "/contact",
        },
      ],
    }
  },
}
</script>
