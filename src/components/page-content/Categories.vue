<script setup lang="ts">
import { ref } from 'vue';

// Список категорий для рендеринга кнопок
const   CATEGORIES = [
  "Все партнеры",
  "Популярные",
  "Супермаркеты",
  "Кафе и рестораны",
  "Такси",
  "Красота",
  "Электроника и бытовая техника",
  "Зоотовары",
  "Кино и театр",
  "..."
];

// Создаем реактивную переменную для отслеживания выбранной кнопки
const selectedCategory = ref<string | null>(CATEGORIES[6]);

// Функция для обработки выбора кнопки
function handleSelectCategory(category: string) {
  // Если нажата уже выбранная категория, сбрасываем выбор
  if (selectedCategory.value === category) {
    selectedCategory.value = null;
  } else {
    selectedCategory.value = category;
  }
}

</script>

<template>
  <div class="categories">
    <!-- Отображаем кнопки динамически из списка категорий -->
    <button
      v-for="category in CATEGORIES"
      :key="category"
      @click="handleSelectCategory(category)"
      :class="{ 'active-button': selectedCategory === category }"
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

button {
  font-family: 'Geometria', sans-serif;
  font-size: 1.2em;
  border: none;
  background-color: var(--white);
  padding: 0.6em;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;
}

button:hover {
  background-color: var(--white);
  color: var(--black);
  box-shadow: 0 2px 8px rgba(69, 69, 69, 0.15);
}

button:focus {
    box-shadow: 0 0 3px 3px rgba(0, 211, 109, 0.3);
}

button:active {
  background-color: var(--green);
  color: var(--white);
  border-color: var(--green);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.active-button {
  background-color: var(--green); /* Зеленый фон для активной кнопки */
  color: var(--white); /* Цвет текста для активной кнопки */
}

.active-button:hover {
  background-color: var(--green);
  color: var(--white);
  box-shadow: 0 2px 8px rgba(69, 69, 69, 0.15);
}
</style>
