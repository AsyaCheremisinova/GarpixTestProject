<script setup lang="ts">
import '@iconify/iconify';
</script>

<template>
  <div class="magnifier-container">
    <form 
      class="magnifier-container__form"
      action="">
      <input 
        class="magnifier-container__form__input" 
        type="search" placeholder="Поиск"
      />
      <button 
        type="submit" 
        class="magnifier-container__form__button"
      >
        <span 
          class="iconify" 
          data-icon="simple-line-icons:magnifier" 
          data-inline="false"></span>
      </button>
    </form>
  </div>
</template>

<style scoped>
.magnifier-container {
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 20%;
  overflow: visible;
}

.magnifier-container__form {
  position: absolute;
  right: 0;
  transition: all 0.5s;
  width: 2em;  
  height: 2em; 
  background: var(--white);
  box-sizing: border-box;
  padding: 0.25em;
  overflow: visible;
  width: 100%;
}

.magnifier-container__form__input {
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

.magnifier-container__form__input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}

.magnifier-container__form__button {
  border: none;
  background-color: var(--white);
  width: 1.4em;
  height: 1.4em;
  cursor: pointer;
}

.iconify {
  box-sizing: border-box;
  width: 1.4em;
  height: 1.4em;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 1.3em;
  border: none;
  background-color: var(--white);
  color: rgb(59, 59, 59);
}

.magnifier-container__form:hover {
  width: 12.5em;
  cursor: pointer;
}

.magnifier-container__form:hover .magnifier-container__form__input {
  display: block;
}

.magnifier-container__form:hover .magnifier-container__form__input {
  border-bottom: 0.1em solid rgb(189, 189, 189);
}

@media (max-width: 770px) { 
  .magnifier-container {
    height: 100%;
    justify-content: center;
    width: 97%;
    border: 2em;
    border-color: red;
  }

  .magnifier-container__form__input {
    width: 100%;
    border-top: 0.2em solid;
    border-left: 0.2em solid;
    border-right: 0.2em solid;
    border-bottom: 0.2em solid;
    
    border-radius: 8px;
    display: initial;
    border-color: var(--green);    
  }
  
  .magnifier-container__form:hover {
    width: 100%;
  }

  .magnifier-container__form:hover .magnifier-container__form__input {
    border-bottom: 0.2em solid var(--green);
  }

  .iconify {
    top: 20%;
    right: 2%;
    color: var(--gray-text-color)
  }
}
</style>
