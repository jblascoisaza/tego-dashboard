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
    <b-container>
      <b-card-group class="text-center" deck>
        <PricingCard header="Free" title="$0 / mo" :list="fList" bContent="Go somewhere" />
        <PricingCard header="Basic" title="$2,99 / mo" :list="bList" bContent="Go somewhere" />
        <PricingCard header="Premium" title="$5 / mo" :list="pList" bContent="Go somewhere" />
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import PricingCard from '@/components/Pricing/PricingCard.vue';

export default {
  name: 'pricing',
  components: {
    PricingCard
  },
  data() {
    return {
      fList: {
        item1: '10 users included',
        item2: '2 GB of storage',
        item3: 'Email support',
        item4: 'Help center access'
      },
      bList: {
        item1: '20 users included',
        item2: '2 GB of storage',
        item3: 'Email support',
        item4: 'Help center access'
      },
      pList: {
        item1: '30 users included',
        item2: '2 GB of storage',
        item3: 'Email support',
        item4: 'Help center access'
      }
    };
  }
};
</script>

<style scoped>
.pricing-header {
  max-width: 700px;
}
</style>
