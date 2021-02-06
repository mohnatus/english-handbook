<template>
  <div>
    <ul>
      <li>
        <router-link to="/page-1">Page 1</router-link>
      </li>
      <li>
        <router-link to="/page-2">Page 2</router-link>
      </li>
    </ul>

    <div class="container">
      <h1>Current route: {{ routeName }}</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name;
    }
  },
};
</script>
