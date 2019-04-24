<template>
  <div>
    <b-jumbotron :header="header" :lead="lead">
      <p>{{ pContent }}</p>
      <b-button variant="primary" href="#">{{ bContent }}</b-button>
    </b-jumbotron>
  </div>
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
