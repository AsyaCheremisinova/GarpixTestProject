<script setup lang="ts">
import '@iconify/iconify';
</script>

<template>
  <div class="magnifier-container">
    <form action="">
      <input class="magnifier-container__input" type="search" placeholder="Поиск">
      <button type="submit" class="magnifier-container__button">
        <span class="iconify" data-icon="simple-line-icons:magnifier" data-inline="false"></span>
      </button>
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
  width: 2em;  
  height: 2em; 
  background: white;
  box-sizing: border-box;
  padding: 0.25em;
  overflow: visible;
}

.magnifier-container__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 99%;
  height: 1.8em;
  line-height: 1.8em;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  padding: 1em;
  font-family: 'Geometria', sans-serif;
  border-bottom: 0.2em solid transparent;
  padding-bottom: 0.9em; 
  padding-left: 0.5em; 
  transition: all 0.5s;
}

.magnifier-container__input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}

.magnifier-container__button{
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

form:hover {
  width: 12.5em;
  cursor: pointer;
}

form:hover input {
  display: block;
}

form:hover .magnifier-container__input {
  border-bottom: 0.1em solid rgb(189, 189, 189);
}
</style>
