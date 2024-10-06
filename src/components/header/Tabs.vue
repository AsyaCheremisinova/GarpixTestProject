<script setup lang="ts">
import { ref } from 'vue';

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
      <ul class="menu__container__list">
        <li v-for = 'tab in TABS'>
          <a 
            href="#" 
            @click="setActiveLink">
            {{ tab }}
          </a>
        </li>
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

.menu__container__list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 1.5em;
  row-gap: 1.9em;
  padding-top: 0.5em;
  margin: 0;
  transition: max-height 0.3s ease;

  li {
    white-space: nowrap;
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 18px;
    color: var(--gray-text-color);
  }

  a:hover {
    color: var(--black);
  }

  a.active {
    color: var(--black);
    text-decoration: underline;
  }
}

@media (max-width: 770px) {
  .menu {
    order: 0;
    display: none;
    flex-direction: row;
    gap: 1em;
  }

  .menu__container__list {
    display: none;
  }
}
</style>
