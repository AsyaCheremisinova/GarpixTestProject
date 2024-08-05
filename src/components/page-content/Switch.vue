<script setup lang="ts">
import { ref } from 'vue';

// Создаем реактивную переменную для отслеживания состояния переключателя
const isChecked = ref(false);
</script>

<template>
  <div class="switch-container">
    <!-- Применение динамических классов в зависимости от состояния переключателя -->
    <label 
      :class="{ 'active-label': isChecked }" 
      class="switch-container__label-first"
      >
      Начисляют спасибо
    </label>
    <label class="switch-wrapper">
      <!-- Использование v-model для связывания с реактивной переменной -->
      <input type="checkbox" v-model="isChecked">
      <span class="switch-container__switch__slider"></span>
    </label>
    <label :class="{ 'active-label': !isChecked }" class="switch-container__label-second">Принимают спасибо</label>
  </div>
</template>

<style scoped>
.switch-container {
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
}

label {
  font-size: 1.1em;
  flex-wrap: wrap;
  width: 5em;
  align-self: center;
  justify-self: center;
  text-align: center;
  margin: 0 1em;
  color: var(--black); /* Начальный цвет текста */  
  transition: 0.2s;
}

.switch-wrapper {
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 1.5em;
}

.switch-wrapper input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-container__switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--white);
  border: solid;
  border-color: #E4E6E9;
  border-width: 1px;
  transition: 0.4s;
  border-radius: 30px;
}

.switch-container__switch__slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  left: 0.2em;
  bottom: 0.2em;
  background-color: var(--green);
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .switch-container__switch__slider {
  background-color: var(--white);
}

input:checked + .switch-container__switch__slider:before {
  transform: translateX(2em);
}

/* Динамический класс для активного состояния */
.active-label {
  color: var(--green); /* Зеленый цвет активного лейбла */
}
</style>
