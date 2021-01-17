<template>
  <header>
    <v-app-bar app color="#6A76AB" class="logo">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title><router-link to="/">RINZO</router-link></v-toolbar-title>
      <v-tabs id="nav">
        <v-tab><router-link to="/">Home</router-link></v-tab>
        <v-tab><router-link to="/about">About</router-link></v-tab>
        <v-tab><router-link to="/arts">Arts</router-link></v-tab>
        <v-tab><router-link to="/skill">Skill</router-link></v-tab>
        <v-tab><router-link to="/blog">Blog</router-link></v-tab>
        <v-tab><router-link to="/contact">Contact</router-link></v-tab>
        <v-tab><router-link to="/manage">Manage</router-link></v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/">Home</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/about">About</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/arts">Arts</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/skill">Skill</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/blog">Blog</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/contact"
                >Contact</router-link
              ></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<style lang="scss" scoped>
/* メディアクエリブレークポイント */
$xs: 600;
$sm: 960;
$md: 1264;
$lg: 1904;

$sp-max: calc($xs - 1) px;
$tb-min: $xs + px;
$tb-max: calc($sm - 1) px;
$pc-min: $sm + px;

/* PC */
@mixin display_pc {
  @media (min-width: $pc-min) {
    @content;
  }
}

/* タブレット */
@mixin display_tab {
  @media (min-width: $tb-min) and (max-width: $tb-max) {
    @content;
  }
}

/* スマホ */
@mixin display_sp {
  @media (max-width: $sp-max) {
    @content;
  }
}

#nav {
  display: flex;
  justify-content: center;
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: white;
}

.drawer a {
  color: #2c3e50;
}

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.logo a {
  color: white;
}
// PCのときハンバーガーメニューを非表示にする
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
// PCのときのみタブメニューを表示する
.v-tab {
  display: none;

  @include display_pc {
    display: flex !important;
  }
}
</style>
