<template>
  <div>
    <b-card
      :title="name"
      :img-src="iconURL"
      img-alt="Guild Icon"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    ></b-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    iconURL: String
  }
};
</script>
