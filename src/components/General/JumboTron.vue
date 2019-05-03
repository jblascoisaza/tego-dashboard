<template>
  <b-jumbotron :header="header" :lead="lead" class="text-center">
    <p>{{ pContent }}</p>
    <b-button variant="primary" href="#">{{ bContent }}</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    header: String,
    lead: String,
    pContent: String,
    bContent: String
  }
};
</script>
