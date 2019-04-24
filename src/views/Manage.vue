<template>
  <b-container class="bv-example-row guilds">
    <b-row>
      <b-col cols="4">
        <h3>General</h3>
        <InputGroup pText="Prefix" iPlace="." bText="Apply" />
        <InputGroup pText="Nickname" iPlace="Tego" bText="Apply" />
      </b-col>
      <b-col cols="4">
        <h3>Music</h3>
        <InputGroup pText="Prefix" iPlace="." bText="Apply" />
        <InputGroup pText="Nickname" iPlace="Tego" bText="Apply" />
      </b-col>
      <b-col cols="4">
        <h3>Moderation</h3>
        <InputGroup pText="Prefix" iPlace="." bText="Apply" />
        <InputGroup pText="Nickname" iPlace="Tego" bText="Apply" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import InputGroup from '@/components/General/InputGroup.vue';

export default {
  components: {
    InputGroup
  }
};
</script>

<style scoped>
.guilds {
  margin-top: 25px;
}
</style>
