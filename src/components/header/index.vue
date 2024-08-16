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
  width: 13em;
  justify-self: end;
}

.container-right{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 92%;
  padding-top: 0.5em;
  padding-left: 2em;
  gap: 1.5em;
}

.header__content {
  display: grid;
  width: 97%;
  grid-template-columns: 24% 52% 24%;
  padding: 1em;
}

.container-bottom {
  display: flex;
  width: 90%;
  height: 40%;
  justify-content:start;
  align-items: center;
  column-gap: 1em;
}
</style>
