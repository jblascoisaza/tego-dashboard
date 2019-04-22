<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/">Tego Dashboard</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <ProfileButton />
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import ProfileButton from '@/components/General/ProfileButton.vue';

export default {
  components: {
    ProfileButton
  }
};
</script>
