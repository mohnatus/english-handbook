<template>
  <div class="form">
    <div class="item" v-for="(item, index) in form" :key="index">
      <div class="value">
        {{ item.value }}
      </div>

      <div v-if="item.transcription" class="transcription">[{{ item.transcription }}]</div>
    </div>
  </div>
</template>



<script>
export default {
  props: ["form"],
};
</script>
