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
  <nav class="tabs">
    <ul class="tabs__list">
      <li v-for = 'tab in TABS'>
        <a 
          href="#" 
          @click="setActiveLink">
          {{ tab }}
        </a>
      </li>
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
    font-size: 18px;
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
