<script setup lang="ts">
import '@iconify/iconify';
</script>

<template>
  <div class="magnifier-container">
    <form action="">
      <input class="magnifier-container_input" type="search" placeholder="Поиск">
      <button type="submit" class="magnifier-container_button">
        <span class="iconify" data-icon="simple-line-icons:magnifier" data-inline="false"></span>
      </button>
      <div class="underline"></div>
    </form>
  </div>
</template>

<style scoped>
.magnifier-container {
  position: relative;
  display: flex;
  justify-content: end;
  align-items: end;
  width: 20%;
  overflow: visible;
}

form {
  position: absolute;
  right: 0;
  transition: all 0.5s;
  width: 2em;  /* Начальная ширина */
  height: 2em; /* Высота формы */
  background: white;
  box-sizing: border-box;
  padding: 0.25em;
  overflow: visible;
}

.magnifier-container_input {
  position: absolute;
  top: 0;
  left: 0;
  width: 99%;
  height: 2.5em; /* Высота инпута */
  line-height: 1.8em;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  padding: 1em;
  font-family: 'Geometria', sans-serif;
}

.magnifier-container_button{
  border: none;
  background-color: #ffffff;
}

.iconify {
  box-sizing: border-box;
  width: 1.4em;
  height: 1.4em;
  position: absolute;
  top: 0;
  right: 0;
  color: #07051a;
  text-align: center;
  font-size: 1.3em;
  border: none;
  background-color: #ffffff;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 1em;
  width: calc(100% - 2.5em);
  height: 0.1em; /* Толщина линии подчеркивания */
  transition: all 0.5s;
}

form:hover {
  width: 12.5em; /* Увеличиваем до 12.5em (200px при base font-size 16px) */
  cursor: pointer;
}

form:hover input {
  display: block;
}

form:hover .underline {
  background-color: rgb(189, 189, 189);
}
</style>
