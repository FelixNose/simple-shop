<script setup>
import { ref } from 'vue'
import BulmaModal from './components/BulmaModal.vue'
import ItemList from './components/ItemList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import ShoppingCartContent from './components/ShoppingCartContent.vue'
import { useShopStore } from './stores/shop'
import formatPrice from './helpers/formatPrice'
import AddressForm from './components/AddressForm.vue'

const shopStore = useShopStore()

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
  const e = event || window.event

  if (e.keyCode === 27) {
    // Escape key
    shopStore.closeAllModals()
  }
})

const order = ref(null)

function submitOrder(addressData) {
  shopStore.showCheckoutModal = false
  order.value = {
    addressData,
    order: shopStore.cart
  }
}
</script>

<template>
  <header>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <span class="icon">
            <font-awesome-icon icon="fa-solid fa-shop"></font-awesome-icon>
          </span>
          <span>Simple Shop</span>
        </a>
        <button
          @click="shopStore.showCartModal = true"
          class="navbar-item button is-primary is-medium is-hidden-tablet"
          style="margin-left: auto"
          aria-haspopup="true"
          :disabled="!shopStore.detailedCart.length"
        >
          <span class="icon">
            <font-awesome-icon icon="fa-solid fa-shopping-cart" />
          </span>
          <span>Cart</span>
          <span v-if="shopStore.cart.length" class="tag is-rounded ml-2">{{
            shopStore.cart.length
          }}</span>
        </button>
      </div>
    </nav>
  </header>

  <main>
    <section class="section">
      <div class="columns">
        <div class="column">
          <ItemList />
        </div>
        <div class="column is-narrow is-one-third-desktop is-one-quarter-widescreen">
          <ShoppingCart class="is-narrow" />
        </div>
      </div>
    </section>
  </main>

  <BulmaModal title="Cart" v-model:show="shopStore.showCartModal">
    <ShoppingCartContent class="is-fullwidth" />
  </BulmaModal>

  <BulmaModal title="Checkout" v-model:show="shopStore.showCheckoutModal">
    <h4 class="title is-4">Your Order</h4>
    <ShoppingCartContent class="is-fullwidth" :show-checkout-button="false" />

    <h4 class="title is-4">Your Information</h4>
    <AddressForm @submit="submitOrder" />
  </BulmaModal>

  <BulmaModal title="Thank You!" v-model:show="order" :showCloseButton="false">
    <h4 class="title is-4">Thank you for your order!</h4>
    <h5 class="subtitle">You will receive further information by email soon</h5>
    
    <article class="message">
      <div class="message-header">Data to send to the server</div>
      <div class="message-body">
        <pre>{{ order }}</pre>
      </div>
    </article>
  </BulmaModal>

  <BulmaModal
    :title="shopStore.showItemInModal?.name ?? ''"
    v-model:show="shopStore.showItemInModal"
  >
    <table class="table" v-if="shopStore.showItemInModal">
      <tr>
        <td>Price:</td>
        <td class="has-text-right">{{ formatPrice(shopStore.showItemInModal.price) }}</td>
      </tr>
      <tr>
        <td>Amount available:</td>
        <td class="has-text-right">{{ shopStore.showItemInModal.amountAvailable }}</td>
      </tr>
    </table>
    <p>{{ shopStore.showItemInModal.description }}</p>
  </BulmaModal>
</template>

<style scoped></style>
