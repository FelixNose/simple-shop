<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  showCloseButton: {
    type: Boolean,
    default: true
  },
  show: {
    default: false
  }
})
defineEmits(['update:show'])
</script>

<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head" v-if="title">
        <h2 class="modal-card-title">{{ title }}</h2>
        <button v-if="showCloseButton" class="delete" aria-label="close" @click="$emit('update:show', false)"></button>
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer v-if="showCloseButton" class="modal-card-foot">
        <button class="button" @click="$emit('update:show', false)">Close</button>
      </footer>
    </div>
  </div>
</template>
