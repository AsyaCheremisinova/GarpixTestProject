<script setup lang="ts">
</script>

<template>
  <div class="magnifier-container">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <form action="">
      <input class="magnifier-container_input" type="search" placeholder="Поиск">
      <button class="fa fa-search"></button>
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

input {
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

.fa {
  box-sizing: border-box;
  width: 1.6em;
  height: 1.6em;
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
