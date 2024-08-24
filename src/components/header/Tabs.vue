<script setup lang="ts">
import { ref } from 'vue';
import City from './City.vue';
import ButtonSignIn from './Button.vue';

const activeLink = ref<HTMLElement | null>(null);
const isMenuOpen = ref(false);

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
    <div class="menu__container">
      <ul class="menu__list" :class="{'menu__list--open': isMenuOpen}">
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
    </div>
  </nav>
  
</template>

<style scoped>
.menu {
  padding-top: 0 2em;
  box-sizing: border-box;
  position: relative;
}

.menu__container {
  display: flex;
  flex-direction: row;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2em;
  height: 2em;
  cursor: pointer;
}

.burger span {
  height: 2px;
  background-color: var(--gray-text-color);
  border-radius: 10px;
}

.menu__list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 2em;
  row-gap: 2em;
  padding-top: 0.5em;
  margin: 0;
  transition: max-height 0.3s ease;
}

.menu__list li {
  white-space: nowrap;
  display: inline-block;
}

.menu__list a {
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  color: var(--gray-text-color);
}

.menu__list a:hover {
  color: var(--black);
}

.menu__list a.active {
  color: var(--black);
  text-decoration: underline;
}

.logo {
  width: 10em;
  display: none;
}

@media (max-width: 770px) {
  .menu {
    order: 0;
    display: none;
    flex-direction: row;
    gap: 1em;
  }

  .menu__list {
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
  }
  
  .logo {
    display: initial;
  }

  .menu__list {
    display: none;
  }

  .menu__list__right {
    display: flex;
    flex-direction: row;
    width: 45%;
    justify-content: end;
    gap: 0.5em;
  }
}

</style>
