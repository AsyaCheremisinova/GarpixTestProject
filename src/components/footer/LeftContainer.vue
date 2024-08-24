<script setup lang="ts">
</script>

<template>
    <div class="sber-info">
        <div class="sber-info__top">
            <p class="sber-info__top__first-p">900</p>
            <p class="sber-info__top__second-p">По России бесплатно</p>
        </div>
        <div class="sber-info__bottom">
            <img
                alt="Sber logo"
                class="sber-info__bottom__logo"
                src="/src/assets/sberlogo.svg" />
            <p class="sber-info__bottom__p">© 1997—2019 ПАО Сбербанк.</p>
        </div>

    </div>
</template>

<style scoped>
.sber-info {
    display: flex;
    flex-direction: column;
    justify-self: center;
}

.sber-info__top {
    display: flex;
    flex-direction: column;
    height: 40%;
    align-content: center;
    row-gap: 0.2em;
    padding-top: 2em;
}

.sber-info__top__first-p {
    font-weight:bolder;
    font-size: 2em;
    margin: 0;
    margin-top: 0;
}

.sber-info__top__second-p {
    margin: 0;
    font-size: 0.85em;
    color: var(--gray-text-color);
}

.sber-info__bottom {
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: end;
}

.sber-info__bottom__logo {
    width: 10em;
}

.sber-info__bottom__p {
    font-size: 0.85em;
    margin-top: 2em;
    color: var(--gray-text-color);
}

@media (max-width: 770px) {
    .sber-info__bottom {
        display: none;
    }

    .sber-info__top__first-p {
        text-align: center;
    }
}
</style>
