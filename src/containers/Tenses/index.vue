<template>
  <div class="tenses-page">
    <div v-if="!tense && !form">
      <table class="tenses-table">
        <tr>
          <td><button @click="open('present', 'simple')"><span>Present<br>Simple</span></button></td>
          <td><button @click="open('past', 'simple')"><span>Past<br>Simple</span></button></td>
          <td><button @click="open('future', 'simple')"><span>Future<br>Simple</span></button></td>
        </tr>
        <tr>
          <td><button @click="open('present', 'continuous')"><span>Present<br>Continuous</span></button></td>
          <td><button @click="open('past', 'continuous')"><span>Past<br>Continuous</span></button></td>
          <td><button @click="open('future', 'continuous')"><span>Future<br>Continuous</span></button></td>
        </tr>
        <tr>
          <td><button @click="open('present', 'perfect')"><span>Present<br>Perfect</span></button></td>
          <td><button @click="open('past', 'perfect')"><span>Past<br>Perfect</span></button></td>
          <td><button @click="open('future', 'perfect')"><span>Future<br>Perfect</span></button></td>
        </tr>
        <tr>
          <td>
            <button @click="open('present', 'perfect continuous')"><span>Present<br>Perfect<br>Continuous</span></button>
          </td>
          <td><button @click="open('past', 'perfect continuous')"><span>Past<br>Perfect<br>Continuous</span></button></td>
          <td>
            <button @click="open('future', 'perfect continuous')"><span>Future<br>Perfect<br>Continuous</span></button>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      <div>
        <button class="tenses-page__back" @click="open()">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" fill="currentColor"/></svg>
           Вернуться к таблице</button>
      </div>

      <div class="tense">
        <div v-if="tense == 'present'">
          <PresentSimple v-if="form == 'simple'"></PresentSimple>
          <PresentContinuous v-if="form == 'continuous'"></PresentContinuous>
          <PresentPerfect v-if="form == 'perfect'"></PresentPerfect>
          <PresentPerfectContinuous
            v-if="form == 'perfect-continuous'"
          ></PresentPerfectContinuous>
        </div>
        <div v-if="tense == 'past'">
          <PastSimple v-if="form == 'simple'"></PastSimple>
          <PastContinuous v-if="form == 'continuous'"></PastContinuous>
          <PastPerfect v-if="form == 'perfect'"></PastPerfect>
          <PastPerfectContinuous
            v-if="form == 'perfect-continuous'"
          ></PastPerfectContinuous>
        </div>
        <div v-if="tense == 'future'">
          <FutureSimple v-if="form == 'simple'"></FutureSimple>
          <FutureContinuous v-if="form == 'continuous'"></FutureContinuous>
          <FuturePerfect v-if="form == 'perfect'"></FuturePerfect>
          <FuturePerfectContinuous
            v-if="form == 'perfect-continuous'"
          ></FuturePerfectContinuous>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss"></style>

<script>
import PresentSimple from './present/Simple';
import PresentContinuous from './present/Continuous';
import PresentPerfect from './present/Perfect';
import PresentPerfectContinuous from './present/PerfectContinuous';

import PastSimple from './past/Simple';
import PastContinuous from './past/Continuous';
import PastPerfect from './past/Perfect';
import PastPerfectContinuous from './past/PerfectContinuous';

import FutureSimple from './future/Simple';
import FutureContinuous from './future/Continuous';
import FuturePerfect from './future/Perfect';
import FuturePerfectContinuous from './future/PerfectContinuous';

export default {
  components: {
    PresentSimple,
    PresentContinuous,
    PresentPerfect,
    PresentPerfectContinuous,
    PastSimple,
    PastContinuous,
    PastPerfect,
    PastPerfectContinuous,
    FutureSimple,
    FutureContinuous,
    FuturePerfect,
    FuturePerfectContinuous
  },
  data() {
    return {
      tense: null,
      form: null
    };
  },
  methods: {
    open(tense, form) {
      this.tense = tense || null;
      this.form = form || null;
    }
  }
};
</script>
