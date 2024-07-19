<script setup lang="ts">
import HeaderTabs from './HeaderTabs.vue'
import City from './City.vue';
import ButtonSignIn from './Button.vue'
</script>

<template>
  <header class="header">
    <div class="header__content">
      <img
        alt="Vue logo"
        class="logo"
        src="/src/assets/logo_x2 1.svg" />
      <HeaderTabs />
      <div class="container-right">
        <City />
        <ButtonSignIn />
      </div> 
    </div>   
  </header>
</template>

<style scoped>
.container-right{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
}

.header__content {
  display: grid;
  width: 1270px;
  grid-template-columns: 180px auto 185px;
  margin: auto;
  padding: 16px;
}
</style>
