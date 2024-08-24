<script setup lang="ts">
import HeaderTabs from './Tabs.vue'
import City from './City.vue'
import ButtonSignIn from './Button.vue'
import SearchInput from './SearchInput.vue'
import ModalWindow from './ModalWindow.vue'
import SideMenu from './SideMenu.vue'
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__content__top">
        <div class="header__content__top__left">
          <SideMenu />
          <img
            alt="Vue logo"
            class="header__content__logo"
            src="/src/assets/logo_x2 1.svg" />
        </div>
          <div class="header__content__top__right">
            <City class="mobile__city"/>
            <ButtonSignIn class="mobile__button"/>
          </div>
      </div>
      <HeaderTabs />
      <div class="header__content__container-right">
        <City class="header__content__container-right__city"/>
        <div class="header__content__container-bottom">
          <SearchInput />
          <ButtonSignIn class="header__content__container-bottom__button"/>
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

.header__content {
  display: grid;
  width: 97%;
  grid-template-columns: 24% 52% 24%;
  padding: 1em;
}

.header__content__top {
  display: flex;
  justify-content: end;
}

.header__content__logo {
  width: 13em;
  justify-self: end;
}

.header__content__container-right{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 92%;
  padding-top: 0.5em;
  padding-left: 2em;
  gap: 1.5em;
}

.header__content__container-bottom {
  display: flex;
  width: 90%;
  height: 40%;
  justify-content:start;
  align-items: center;
  column-gap: 1em;
}

.mobile__city {
  display: none;
}

.mobile__button {
  display: none;
}

@media (max-width: 770px) {
  .header__content {
    grid-template-columns: 100%;
    grid-template-rows: 60% 40%;
    height: 100%;
  }

  .header__content__top {
    justify-content: space-between;
    width: 97%;
  }

  .header__content__logo {
    width: 8em;
  }

  .header__content__top__left {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .header__content__container-right {
    justify-content: center;
    width: 100%;
    padding: 0;
    margin-top: 0.5em;
  }

  .header__content__container-bottom {
    order: 2;
    height: 2em;
    width: 100%;
    justify-content: start;
  }

  .header__content__container-right__city {
    display: none;
  }

  .header__content__container-bottom__button {
    display: none;
  }

  .mobile__city {
    display: flex;  
    width: 50%;  
    justify-content: center;
    text-align: center;
    margin: 0;
  }

  .mobile__button {
    display: inline;
    align-self: center;
  }

  .header__content__top__right {
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-around;
    gap: 1em;
  }
}
</style>

