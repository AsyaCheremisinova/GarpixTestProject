<script setup lang="ts">
import HeaderTabs from './Tabs.vue'
import City from './City.vue';
import ButtonSignIn from './Button.vue'
import SearchInput from './SearchInput.vue'
import ModalWindow from './ModalWindow.vue';
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
        <div class="container-bottom">
          <SearchInput />
          <ButtonSignIn />
        </div>
      </div> 
    </div>  
    <ModalWindow /> 
  </header>
</template>

<style scoped>
.header {
  background-color: #FFFFFF;
}

.logo {
  width: 100%;
}

.container-right{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  padding-top: 0.5em;
  padding-left: 2em
}

.header__content {
  display: grid;
  width: 1270px;
  grid-template-columns: 180px auto 300px;
  margin: auto;
  padding: 16px;
}

.container-bottom {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content:center;
  align-items: end;
  column-gap: 1em;
}
</style>
