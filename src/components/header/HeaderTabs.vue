<script setup lang="ts">
import { ref } from 'vue';

const activeLink = ref(null);

const setActiveLink = (event) => {
  if (activeLink.value) {
    activeLink.value.classList.remove('active');
  }
  activeLink.value = event.target;
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

<style src="./headerStyle.css"></style>
