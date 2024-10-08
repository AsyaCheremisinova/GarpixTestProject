<script setup lang="ts">
import Tabs from './Tabs.vue';
import Buttons from './Buttons.vue';
</script>

<template>
    <div class="right-container">
        <Tabs /> 
        <Buttons />
        <p 
            class="right-container__bottom__p">
            © 1997—2019 ПАО Сбербанк.
        </p>
        <p 
            class="right-container__p">
            <a>Политика</a> 
            АО «ЦПЛ» в отношении обработки персональных данных и 
            <a>Согласие</a> 
            на обработку данных участника Программы «Спасибо от Сбербанка»
        </p>
    </div>   
</template>

<style scoped>
.right-container {
    display: flex;
    flex-direction: column;
    width: 84%;
    margin-top: 2em;
}

.right-container__p {
    color: var(--gray-text-color);
    font-size: 0.85em;
    margin: 0;
    margin-top: 2em;
    text-align: justify;
}

.right-container__bottom__p {
    font-size: 0.85em;
    align-self: center;
    color: var(--gray-text-color);
    display: none;
}

a {
    text-decoration:underline;
    cursor: pointer;
}

a:hover {
    color: var(--gray-text-hover-color);
}

@media (max-width: 770px) {
    .right-container {
        width: 100%;
        margin-top: 1em;
    }

    .right-container__p {
        width: 60%;
        text-wrap: wrap;
        text-align: center;
        margin-left: 20%;
        margin-top: 0.5em;
    }

    .right-container__bottom__p {
        display: initial;
    }
}
</style>
