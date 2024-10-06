<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import City from './City.vue';
import ButtonSignIn from './Button.vue';

const TABS = [
  "Купоны и сертификаты",
  "Впечатления",
  "Авиабилеты",
  "Ж/д билеты",
  "Отели",
  "Каршеринг",
  "Театры",
  "Страхование",
  "Как подключиться",
  "Партнеры"
];

const activeLink = ref<HTMLElement | null>(null);
const isSideMenuOpen = ref(false);

const toggleMenu = () => {
  isSideMenuOpen.value = !isSideMenuOpen.value;
  document.body.style.overflow = isSideMenuOpen.value ? 'hidden' : 'auto';
};

const closeSideMenu = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.side-menu') && !target.closest('.burger')) {
    isSideMenuOpen.value = false;
    document.body.style.overflow = 'auto'; 
  }
};

const setActiveLink = (event: Event) => {
  if (activeLink.value) {
    activeLink.value.classList.remove('active');
  }
  activeLink.value = event.target as HTMLElement;
  activeLink.value.classList.add('active');
};

onMounted(() => {
  document.addEventListener('click', closeSideMenu);
});

onUnmounted(() => {
  document.removeEventListener('click', closeSideMenu);
  document.body.style.overflow = 'auto';
});
</script>

<template>
    <div class="burger" @click="toggleMenu">
        <span/>
        <span/>
        <span/>
    </div>

    <div 
      :class="{'overlay--visible': isSideMenuOpen, 'overlay': true}" 
      @click="toggleMenu">
    </div>
    <div 
      :class="{'side-menu--open': isSideMenuOpen, 'side-menu': true}"
    >
      <div class="side-menu__top">
        <City class="side-menu__top__city"/>
        <ButtonSignIn />
      </div>
      <ul class="side-menu__list">
        <li v-for = 'tab in TABS'>
          <a 
            href="#" 
            @click="setActiveLink">
            {{ tab }}
          </a>
        </li>
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
  right: -18em;
  width: 18em;
  height: 100%;
  background-color: var(--white);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  transition: right 0.3s ease;
  z-index: 10001;
}

.side-menu--open {
  right: 0;
}

.side-menu__list {
  list-style: none;
  padding: 1em;
  margin: 0;
  z-index: 101;
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

.side-menu__top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5.1em;
  border-bottom: 1px solid;
  border-color: var(--gray-text-color);
}

.side-menu__top__city {
  margin: 0;
  width: 50%;
}

.overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.322);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  transition: opasity 0.3s ease, visible 0.3s ease;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100; 
  pointer-events: none; 
}

.overlay--visible {
  background:rgba(0, 0, 0, 0.322);
  opacity: 1;
  pointer-events: auto;
}

@media (max-width: 770px) {
    .burger {
    display: flex;
    align-self: center;
  }
}
</style>
