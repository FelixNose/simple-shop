import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import generateItem from '../helpers/generateItem'
import formatPrice from '../helpers/formatPrice'

export const useShopStore = defineStore('shop', () => {
  const items = reactive([])
  const cart = reactive([])
  const isLoadingItems = ref(false)
  const allItemsLoaded = ref(false)

  const showCartModal = ref(false)
  const showCheckoutModal = ref(false)
  const showItemInModal = ref(false)
  function closeAllModals() {
    showCartModal.value = false
    showCheckoutModal.value = false
    showItemInModal.value = false
  }

  function getItems(amount = 4) {
    isLoadingItems.value = true
    //simulate network delay
    setTimeout(() => {
      if (allItemsLoaded.value) return

      //pretend that all items have been loaded
      if (items.length > 30) {
        amount = 3
        allItemsLoaded.value = true
      }

      //generate new items
      for (let i = 0; i < amount; i++) {
        items.push(generateItem())
      }
      isLoadingItems.value = false
    }, 250)
  }

  function addToCart(itemId, amount) {
    const itemIndexInCart = cart.findIndex((item) => item.id === itemId)
    if (itemIndexInCart > -1) {
      cart[itemIndexInCart].amount += amount
    } else {
      cart.push({
        id: itemId,
        amount
      })
    }
  }

  function removeFromCart(itemId) {
    const itemIndexInCart = cart.findIndex((item) => item.id === itemId)
    cart.splice(itemIndexInCart, 1)
  }

  const itemList = computed(() => {
    const itemList = []
    items.forEach((item) => {
      let amountAvailable = item.amountAvailable
      const itemInCart = cart.find((cartItem) => cartItem.id === item.id)
      if (itemInCart) amountAvailable -= itemInCart.amount
      const itemToPush = { ...item }
      itemToPush.amountAvailable = amountAvailable
      itemList.push(itemToPush)
    })
    return itemList
  })

  const detailedCart = computed(() => {
    const detailedCart = []
    cart.forEach((cartItem) => {
      const item = items.find((item) => item.id === cartItem.id)
      if (item) {
        detailedCart.push({
          id: item.id,
          amount: cartItem.amount,
          name: item.name,
          price: formatPrice(item.price * cartItem.amount),
          rawPrice: item.price * cartItem.amount
        })
      }
    })

    return detailedCart
  })

  const orderTotal = computed(() => {
    let total = 0
    detailedCart.value.forEach((item) => {
      total += item.rawPrice
    })
    return total ? formatPrice(total) : ''
  })

  return {
    itemList,
    cart,
    isLoadingItems,
    allItemsLoaded,
    showCartModal,
    showCheckoutModal,
    showItemInModal,
    closeAllModals,
    detailedCart,
    orderTotal,
    getItems,
    addToCart,
    removeFromCart
  }
})
