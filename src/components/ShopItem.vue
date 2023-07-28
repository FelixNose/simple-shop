<script setup>
import { ref } from 'vue'
import { useShopStore } from '../stores/shop'
import formatPrice from '../helpers/formatPrice'

const shopStore = useShopStore()

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const amount = ref(1)
const addingToCart = ref(false)

function addToCart() {
  addingToCart.value = true
  shopStore.addToCart(props.item.id, amount.value)
  amount.value = 1
  addingToCart.value = false
}
</script>

<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-16by9">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <h2 class="title is-size-6">{{ item.name }}</h2>
        <p class="subtitle">
          <span class="is-size-6">{{ formatPrice(item.price) }}</span>
          <span v-if="!item.amountAvailable" class="tag is-danger ml-2">Sold out!</span>
          <span v-else-if="item.amountAvailable <= 3" class="tag is-info ml-2"
            >only {{ item.amountAvailable }} left!</span
          >
        </p>
      </div>
      <footer class="card-footer">
        <a @click="shopStore.showItemInModal = item" class="card-footer-item">Learn More</a>
        <div v-if="item.amountAvailable" class="card-footer-item">
          <div class="field has-addons">
            <div class="control">
              <input
                class="input"
                type="number"
                v-model="amount"
                min="1"
                :max="item.amountAvailable"
                :disabled="item.amountAvailable <= 1"
              />
            </div>
            <div class="control">
              <button
                class="button"
                :class="{ 'is-loading': addingToCart }"
                type="button"
                @click="addToCart"
              >
                <span class="icon" title="Add to cart">
                  <font-awesome-icon icon="fa-solid fa-cart-plus" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div v-else class="card-footer-item">
          <p>Sold out!</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
