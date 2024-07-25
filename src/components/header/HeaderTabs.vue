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
  <nav class="menu">
    <ul class="menu-list">
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
.menu {
  padding-top: 0 2em;
  box-sizing: border-box;
}

.menu-list {
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 2em;
  row-gap: 1.5em;
  padding-top: 0.5em;
  margin: 0;

  li {
    white-space: nowrap;
    display: inline-block;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    font-size: 18px;
  }

  a:hover {
    font-weight: bold;
  }

  a.active {
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
