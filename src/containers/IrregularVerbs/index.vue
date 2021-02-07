<template>
  <div class="verbs-page">
    <div class="search">
      <input type="text" placeholder="Search..." @input="onSearchInput" />
    </div>

    <div class="actions">
      <button v-if="!top" type="button" class="top-button" @click="top = true">
        TOP<br />100
      </button>
      <button v-if="top" type="button" class="top-button" @click="top = false">
        ALL
      </button>
    </div>

    <div class="table">
      <IrregularVerbsRow
        v-for="verb in verbs"
        :key="verb.id"
        :verb="verb"
      ></IrregularVerbsRow>
    </div>

    <div v-if="!verbs.length" class="not-found">Ничего не найдено</div>
  </div>
</template>

<style src="./style.scss"></style>

<script>
import list from './data';
import { top100 } from "./data/groups";
import IrregularVerbsRow from 'Components/IrregularVerbsRow';

export default {
  components: { IrregularVerbsRow },
  data() {
    return {
      query: '',
      top: false
    };
  },
  computed: {
    list() {
      if (this.top) return list.filter((v) => top100.includes(v.id));
      return list;
    },
    verbs() {
      console.log('verbs', this.list);
      return this.list.filter((verb) => verb.check(this.query));
    }
  },
  methods: {
    onSearchInput(e) {
      this.query = e.target.value;
    }
  }
};
</script>
