<template>
  <b-card :header="header" header-tag="header" :title="title">
    <b-card-text>
      <ul class="list-unstyled">
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </b-card-text>
    <b-button href="#" variant="primary">{{ bContent }}</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    header: String,
    title: String,
    list: Object,
    bContent: String
  }
};
</script>

<style scoped>
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
</style>
