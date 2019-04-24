<template>
  <div>
    <router-link :to="{ name: 'manage', params: { id: guildID } }">
      <b-card
        :title="name"
        :img-src="iconURL"
        img-alt="Guild Icon"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      ></b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    iconURL: String,
    guildID: String
  }
};
</script>
