<script setup lang="ts">
import { ref } from 'vue';

const activeLink = ref<HTMLElement | null>(null);

const setActiveLink = (event: Event) => {
  if (activeLink.value) {
    activeLink.value.classList.remove('active');
  }
  activeLink.value = event.target as HTMLElement;
  activeLink.value.classList.add('active');
};
</script>

<template>
  <nav class="tabs">
    <ul class="tabs__list">
      <li><a href="#" @click="setActiveLink">Купоны и сертификаты</a></li>
      <li><a href="#" @click="setActiveLink">Впечатления</a></li>
      <li><a href="#" @click="setActiveLink">Авиабилеты</a></li>
      <li><a href="#" @click="setActiveLink">Ж/д билеты</a></li>
      <li><a href="#" @click="setActiveLink">Отели</a></li>    
      <li><a href="#" @click="setActiveLink">Каршеринг</a></li>
      <li><a href="#" @click="setActiveLink">Театры</a></li>
      <li><a href="#" @click="setActiveLink">Страхование</a></li>
      <li><a href="#" @click="setActiveLink">Как подключиться</a></li>
      <li><a href="#" @click="setActiveLink">Партнеры</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.tabs {
  padding-top: 0 2em;
  box-sizing: border-box;
}

.tabs__list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 2em;
  row-gap: 1.5em;
  padding-top: 0.5em;
  padding-left: 0;
  margin: 0;
  color: #444444;

  li {
    white-space: nowrap;
    display: inline-block;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.1em;
  }

  a:hover {
    color: #000000;
  }

  a.active {
    font-weight: bold;
    text-decoration: underline;
  }
}

@media (max-width: 770px) {
    .tabs {
        display: none;
    }
}
</style>
