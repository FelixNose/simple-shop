<script setup>
import ShoppingCartContent from './ShoppingCartContent.vue'
import { useShopStore } from '../stores/shop'
const shopStore = useShopStore()

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <section>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Cart</p>
      </header>
      <div class="card-content">
        <div class="content">
          <p v-if="!shopStore.detailedCart.length">Your cart is currently empty</p>
          <div v-else>
            <ShoppingCartContent v-bind="$attrs" class="is-narrow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
