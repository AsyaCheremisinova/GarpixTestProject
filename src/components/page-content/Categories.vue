<script setup lang="ts">
import { ref } from 'vue';

const CATEGORIES = [
  "Все партнеры",
  "Популярные",
  "Супермаркеты",
  "Кафе и рестораны",
  "Такси",
  "Красота",
  "Электроника и бытовая техника",
  "Зоотовары",
  "Кино и театр",
  ". . ."
];

const selectedCategory = ref<string | null>(CATEGORIES[6]);

function handleSelectCategory(category: string) {
  if (selectedCategory.value === category) {
    selectedCategory.value = null;
  } else {
    selectedCategory.value = category;
  }
}

</script>

<template>
  <div class="categories">
    <button
      v-for="category in CATEGORIES"
      :key="category"
      @click="handleSelectCategory(category)"
      :class="{ 'active-button': selectedCategory === category, 'categories__button': true }"
    >
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 1em;
}

.categories__button {
  font-family: 'Geometria', sans-serif;
  font-size: 1.2em;
  border: none;
  background-color: var(--white);
  padding: 0.6em;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--white);
    color: var(--black);
    box-shadow: 0 2px 8px rgba(69, 69, 69, 0.15);
  }

  &:focus {
    box-shadow: 0 0 3px 3px rgba(0, 211, 109, 0.3);
  }

  &:active {
    background-color: var(--green);
    color: var(--white);
    border-color: var(--green);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

.active-button {
  background-color: var(--green);
  color: var(--white); 

  &:hover {
    background-color: var(--green);
    color: var(--white);
    box-shadow: 0 2px 8px rgba(69, 69, 69, 0.15);
  }
}

@media (max-width: 770px) {
  .categories {
    width: 90%;
  }
}
</style>
