<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="container__left">
            <button class="container__left__button-first">
                <img
                alt="Google play"
                class="container__left__button-first__img"
                src="/src/assets/google-play.svg" />
            </button>
            <button class="container__left__button-second">
                <img
                alt="App Store"
                class="container__left__button-second__img"
                src="/src/assets/app-store.svg" />
            </button>
        </div>
        <div class="container__right">
            <button class="container__left__button-first">
                <img
                alt="OK"
                class="container__left__button-first__img"
                src="/src/assets/ok.svg" />
            </button>
            <button class="container__left__button-second">
                <img
                alt="FB"
                class="container__left__button-second__img"
                src="/src/assets/fb.svg" />
            </button>
            <button class="container__left__button-first">
                <img
                alt="VK"
                class="container__left__button-first__img"
                src="/src/assets/vk.svg" />
            </button>
            <button class="container__left__button-second">
                <img
                alt="Inst"
                class="container__left__button-second__img"
                src="/src/assets/inst.svg" />
            </button>
        </div>
    </div>    
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 2em;
}

.container__left {
    display: flex;
    flex-direction: row;
    row-gap: 1em;
    justify-content: center;
}

button {
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    justify-content: center;
    border-radius: 100px;
}

button :hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
    border-radius: 8px;
}

button :active {

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}

</style>
