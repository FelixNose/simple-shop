<script setup>
import { useShopStore } from '../stores/shop'
import ShopItem from './ShopItem.vue'

const shopStore = useShopStore()

if (!shopStore.itemList.length) shopStore.getItems(8)
</script>

<template>
  <div class="columns is-multiline">
    <ShopItem
      v-for="item in shopStore.itemList"
      :key="item.id"
      :item="item"
      class="column is-half is-one-third-widescreen is-one-quarter-fullhd"
    />
  </div>
  <button
    v-if="!shopStore.allItemsLoaded"
    class="button is-fullwidth"
    :class="{ 'is-loading': shopStore.isLoadingItems }"
    type="button"
    @click="shopStore.getItems()"
  >
    Show more!
  </button>
</template>

<style scoped></style>
