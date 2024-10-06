<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/userStore';

export default defineComponent({
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
});
</script>

<template>
  <div class="city-container">
    <img
        alt="City icon"
        src="/src/assets/geo.svg" />
    <label class="city-container__label">
        {{ userStore.city }}
    </label>
  </div>
</template>

<style scoped>
.city-container {
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 0.5em;
  width: 90%;
}

.city-container__label {
  font-size: 0.9em;
  color: var(--gray-text-color);
}

@media (max-width: 770px) {
  .city-container {
    justify-content: end;
    margin-right: 4%;
    flex-direction: column;
  }
}
</style>
