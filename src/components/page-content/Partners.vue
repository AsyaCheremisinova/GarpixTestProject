<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="container__partner">
            <label class="container__partner__percent">1,5%</label>
            <label class="container__partner__label">Спасибо от суммы покупки</label>
            <img
                alt="MVideo"
                class="container__partner__img"
                src="/src/assets/Bitmap.svg" />
            <label class="container__partner__partner-name">М.Видео</label>
        </div>
        <div class="container__partner">
            <label class="container__partner__percent">3%</label>
            <label class="container__partner__label">Спасибо от суммы покупки</label>
            <img
                alt="MVideo"
                class="container__partner__img"
                src="/src/assets/BK.svg" />
            <label class="container__partner__partner-name">Бургер Кинг</label>
        </div>
        <div class="container__partner">
            <label class="container__partner__percent">4,5%</label>
            <label class="container__partner__label">Спасибо от суммы покупки</label>
            <img
                alt="MVideo"
                class="container__partner__img"
                src="/src/assets/tehno.svg" />
            <label class="container__partner__partner-name">Холодильник.ру</label>
        </div>
        <div class="container__partner">
            <label class="container__partner__percent">От 1,5%</label>
            <label class="container__partner__label">Спасибо от суммы покупки</label>
            <img
                alt="MVideo"
                class="container__partner__img"
                src="/src/assets/BORK.svg" />
            <label class="container__partner__partner-name">BORK</label>
        </div>
        <div class="container__partner">
            <label class="container__partner__percent">1,5%</label>
            <label class="container__partner__label">Спасибо от суммы покупки</label>
            <img
                alt="MVideo"
                class="container__partner__img"
                src="/src/assets/Evroset.svg" />
            <label class="container__partner__partner-name">Евросеть</label>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 3em 0;
    column-gap: 1.5em;
}

.container__partner {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    height: 19em;
    width: 14em;
    border-radius: 8px; 
}

.container__partner__img {
    display: flex;
    width: 60%;
    align-self: center;
    height: 60%;
}

.container__partner__percent {
    color: var(--black);
    font-size: 1.6em;
    font-weight: bold;
    padding-left: 1em;
    padding-top: 0.5em;
}

.container__partner__label {
    color: var(--gray-text-color);
    font-size: 0.75em;
    padding-left: 2.1em;
}

.container__partner__partner-name {
    color: var(--gray-text-hover-color);
    font-size: 1em;
    align-self: center;
}
</style>
