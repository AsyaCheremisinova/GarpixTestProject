<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="container__left">
            <button class="container__button">
                <img
                    alt="Google play"
                    src="/src/assets/google-play.svg" 
                />
            </button>
            <button class="container__button">
                <img
                    alt="App Store"
                    src="/src/assets/app-store.svg" 
                />
            </button>
        </div>
        <div class="container__right">
            <button class="container__button">
                <img
                    alt="OK"
                    src="/src/assets/ok.svg" 
                />
            </button>
            <button class="container__button">
                <img
                    alt="FB"
                    src="/src/assets/fb.svg" 
                />
            </button>
            <button class="container__button">
                <img
                    alt="VK"
                    src="/src/assets/vk.svg" 
                />
            </button>
            <button class="container__button">
                <img
                    alt="Inst"
                    src="/src/assets/inst.svg" 
                />
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
    gap: 0.5em;
    justify-content: center;
}

.container__right {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
}

.container__button {
    background-color: var(--white);
    height: 95%;
    border: none;
    cursor: pointer;
    justify-content: center;
    border-radius: 100px;
    padding: 0;

    &:hover {
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
        border-radius: 8px;
    }

    &:active {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(1px);
    }
}

@media (max-width: 770px) {
    .container {
        flex-direction: column;
        align-items: center;
        margin: 0;
        gap: 1em;
    }
    
    .container__left {
        order: 2;
    }

    .container__right {
        order: 1;
    }
}
</style>
