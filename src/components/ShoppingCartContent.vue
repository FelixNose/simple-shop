<script setup>
import { useShopStore } from '../stores/shop'
const shopStore = useShopStore()

function showCheckout() {
    shopStore.showCartModal = false
    shopStore.showCheckoutModal = true
}

defineProps({
  showCheckoutButton: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <table class="table is-hoverable">
    <thead>
      <tr>
        <th></th>
        <th>item</th>
        <th class="has-text-right">price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in shopStore.detailedCart" :key="item.id">
        <td class="has-text-right">{{ item.amount }}x</td>
        <td>{{ item.name }}</td>
        <td class="has-text-right">{{ item.price }}</td>
        <td class="has-text-right" style="max-width: 30px">
          <button
            class="button is-small is-danger is-inverted"
            type="button"
            @click.once="shopStore.removeFromCart(item.id)"
          >
            <span class="icon" title="remove from cart">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </span>
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="has-text-right" colspan="3">
          <p>total: {{ shopStore.orderTotal }}</p>
          <button
            v-if="showCheckoutButton"
            @click="showCheckout"
            class="button is-primary"
            type="button"
          >
            Checkout
          </button>
        </th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</template>
