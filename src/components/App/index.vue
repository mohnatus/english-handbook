<template>
  <div class="app">
    <header class="app-header">
      <div class="container">
        <h2 class="app-title">{{ title }}</h2>
        <AppMenu ref="menu"></AppMenu>
      </div>
    </header>

    <div class="app-main">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss"></style>

<script>
import AppMenu from 'Components/AppMenu';
import { titles } from './titles';

const DEFAULT_TITLE = 'EngHandbook';

export default {
  components: { AppMenu },
  data() {
    return {
      title: DEFAULT_TITLE
    };
  },
  watch: {
    $route(to, from) {
      this.$refs.menu.close();
      //this.title = titles[this.$route.name] || DEFAULT_TITLE;
    }
  }
};
</script>
