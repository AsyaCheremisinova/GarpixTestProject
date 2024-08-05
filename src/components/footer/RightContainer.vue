<script setup lang="ts">
import Tabs from './Tabs.vue';
import Buttons from './Buttons.vue';
</script>

<template>
    <div class="right-container">
        <Tabs /> 
        <Buttons />
        <p class="right-container__p"><a>Политика</a> АО «ЦПЛ» в отношении обработки персональных данных и <a>Согласие</a> на обработку данных участника Программы «Спасибо от Сбербанка»</p>
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
    color: rgb(124, 124, 124);
    font-size: 0.85em;
    margin: 0;
    margin-top: 1.9em;
}

a {
    text-decoration:underline;
    cursor: pointer;
}

a:hover {
    color: rgb(67, 66, 66);
}
</style>
