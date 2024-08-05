<script setup lang="ts">
import { ref } from 'vue';

// Создаем реактивную переменную для отслеживания выбранной кнопки
const selectedCategory = ref<string | null>(null);

// Функция для обработки выбора кнопки
function selectCategory(category: string) {
  // Если нажата уже выбранная категория, сбрасываем выбор
  if (selectedCategory.value === category) {
    selectedCategory.value = null;
  } else {
    selectedCategory.value = category;
  }
}

// Список категорий для рендеринга кнопок
const categories = [
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
</script>

<template>
  <div class="categories">
    <!-- Отображаем кнопки динамически из списка категорий -->
    <button
      v-for="category in categories"
      :key="category"
      @click="selectCategory(category)"
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
  background-color: #ffffff;
  padding: 0.6em;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;
}

button:hover {
  background-color: #FFFFFF;
  color: #000000;
  box-shadow: 0 2px 8px rgba(69, 69, 69, 0.15);
}

button:focus {
    box-shadow: 0 0 3px 3px rgba(0, 211, 109, 0.3);
}

button:active {
  background-color: #00D36D;
  color: #FFFFFF;
  border-color: #00D36D;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.active-button {
  background-color: #00D36D; /* Зеленый фон для активной кнопки */
  color: #FFFFFF; /* Цвет текста для активной кнопки */
}

.active-button:hover {
  background-color: #00D36D;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(69, 69, 69, 0.15);
}
</style>
