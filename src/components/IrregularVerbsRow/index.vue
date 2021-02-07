<template>
  <div class="verb" >
    <div class="row">
      <div class="cell form-cell">
        <Form :form="verb.infinitive" :class="'size--' + size"></Form>
      </div>
      <div class="cell form-cell">
        <Form :form="verb.past" :class="'size--' + size"></Form>
      </div>
      <div class="cell form-cell">
        <Form :form="verb.pastParticiple" :class="'size--' + size"></Form>
      </div>
    </div>

    <ul class="translations">
      <li
        class="translation"
        v-for="(item, index) in verb.translation"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>

<script>
import Form from "./Form";
export default {
  components: { Form },
  props: ["verb"],
  data() {
    return {
      showTranslation: false,
    };
  },
  computed: {
    size() {
      if (this.verb.maxLength < 5) return 1;
      if (this.verb.maxLength < 7) return 2;
      if (this.verb.maxLength < 10) return 3;
      if (this.verb.maxLength < 12) return 4;
      if (this.verb.maxLength < 14) return 5;
      return 6;
    },
  },
};
</script>

<style lang="scss" src="./style.scss">
</style>
