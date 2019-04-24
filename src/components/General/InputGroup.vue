<template>
  <div>
    <b-input-group class="mb-3" :prepend="pText">
      <b-form-input :placeholder="iPlace" v-model="value"></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" variant="primary">{{ bText }}</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  props: {
    pText: String,
    iPlace: String,
    bText: String
  },
  data() {
    return {
      value: ''
    };
  }
};
</script>
