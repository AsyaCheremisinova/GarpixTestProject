<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const activeLink = ref<HTMLElement | null>(null);
const isSideMenuOpen = ref(false);

const toggleMenu = () => {
  isSideMenuOpen.value = !isSideMenuOpen.value;
};

const closeSideMenu = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.side-menu') && !target.closest('.burger')) {
    isSideMenuOpen.value = false;
  }
};

const setActiveLink = (event: Event) => {
  if (activeLink.value) {
    activeLink.value.classList.remove('active');
  }
  activeLink.value = event.target as HTMLElement;
  activeLink.value.classList.add('active');
};

// Добавляю и удаляю обработчик кликов
onMounted(() => {
  document.addEventListener('click', closeSideMenu);
});

onUnmounted(() => {
  document.removeEventListener('click', closeSideMenu);
});
</script>

<template>
    <div class="burger" @click="toggleMenu">
        <span/>
        <span/>
        <span/>
    </div>
    <div :class="{'side-menu--open': isSideMenuOpen, 'side-menu': true}">
    <ul class="side-menu__list">
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
</template>

<style scoped>
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

.side-menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  transition: left 0.3s ease;
  z-index: 1000;
}

.side-menu--open {
  left: 0;
}

.side-menu__list {
  list-style: none;
  padding: 1em;
  margin: 0;
}

.side-menu__list li {
  padding: 1em 0;
}

.side-menu__list a {
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  color: var(--gray-text-color);
}

.side-menu__list a:hover {
  color: var(--black);
}

@media (max-width: 770px) {
    .burger {
    display: flex;
    align-self: center;
  }
}
</style>
