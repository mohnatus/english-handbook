<template>
  <div class="app-menu">
    <div @click="toggle" class="app-menu__button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
      </svg>
    </div>
    <div v-if="opened" class="app-menu-panel">
      <div class="container">
        <button class="app-menu__close" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            />
          </svg>
        </button>
        <ul class="app-menu-list">
          <li>
            <router-link to="/irregular-verbs"
              >Неправильные глаголы</router-link
            >
          </li>
          <li>
            <router-link to="/tenses">Времена</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss"></style>

<script>
export default {
  created() {
    console.log('menu', this.$route);
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    },
    toggle() {
      this.opened = !this.opened;
    }
  }
};
</script>
