<script setup lang="ts">
</script>

<template>
    <div class="sber-info">
        <div class="sber-info_top">
            <p class="sber-info_top_first-p">900</p>
            <p class="sber-info_top_second-p">По России бесплатно</p>
        </div>

    </div>
</template>

<style scoped>
.sber-info {
    display: flex;
    flex-direction: column;
    justify-self: center;
}

.sber-info_top {
    height: 50%;
    justify-self: center;
    align-content: center;
}

.sber-info_top_first-p {
    font-weight:bolder;
    font-size: 2em;
    margin: 0.2em 0;
}

.sber-info_top_second-p {
    margin: 0.5em 0;
    font-size: 0.9em;
}
</style>
