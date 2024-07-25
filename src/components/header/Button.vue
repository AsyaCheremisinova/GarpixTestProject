<script setup lang="ts">
</script>

<template>
  <div class="divclass">
    <button class="button">
      Войти
    </button>
  </div>
</template>

<style scoped>
.divclass {
  display: flex;
  align-items: center;
}
.button {
  font-family: 'Geometria', sans-serif;
  background-color: #FFFFFF;
  border-color: #00D36D;
  border-radius: 8px;
  color: #00D36D;
  width: 7em;
  height: 2.7em;
  outline: none;
  border: 2px solid; 
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 1em;
}

.button:hover {
  background-color: #FFFFFF;
  color: #00D36D;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.button:focus {
  border: 3px solid;
  box-shadow: 0 0 0 3px rgba(0, 211, 109, 0.3);
}

.button:active {
  background-color: #00D36D;
  color: #FFFFFF;
  border-color: #00D36D;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(2px);
}
</style>
