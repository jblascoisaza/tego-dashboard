<template>
  <div>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Pricing</h1>
      <p>
        Quickly build an effective pricing table for your potential customers with this Bootstrap
        example. It’s built with default Bootstrap components and utilities with little
        customization.
      </p>
    </div>
    <div class="container">
      <b-card-group class="text-center" deck>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </b-card-group>
    </div>
  </div>
</template>

<script>
import PricingCard from '@/components/Pricing/PricingCard.vue';

export default {
  name: 'pricing',
  components: {
    PricingCard
  }
};
</script>

<style scoped>
.pricing-header {
  max-width: 700px;
}
</style>
