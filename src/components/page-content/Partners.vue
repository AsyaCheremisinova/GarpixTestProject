<script setup lang="ts">
import { ref, computed } from 'vue';

const PARTNERS = [
    { 
        percent: '1.5%',
        label: 'Спасибо от суммы покупки',
        imgSrc: '/src/assets/Bitmap.svg',
        name: 'М.Видео' 
    },
    { 
        percent: '3%', 
        label: 'Спасибо от суммы покупки', 
        imgSrc: '/src/assets/BK.svg', 
        name: 'Бургер Кинг' 
    },
    {
        percent: '4.5%', 
        label: 'Спасибо от суммы покупки', 
        imgSrc: '/src/assets/tehno.svg', 
        name: 'Холодильник.ру' 
    },
    { 
        percent: 'От 1.5%', 
        label: 'Спасибо от суммы покупки', 
        imgSrc: '/src/assets/BORK.svg', 
        name: 'BORK' 
    },
    { 
        percent: '1.5%', 
        label: 'Спасибо от суммы покупки', 
        imgSrc: '/src/assets/Evroset.svg', 
        name: 'Евросеть' 
    },
    { 
        percent: '1.5%',
        label: 'Спасибо от суммы покупки',
        imgSrc: '/src/assets/Bitmap.svg',
        name: 'М.Видео' 
    },
    { 
        percent: '3%', 
        label: 'Спасибо от суммы покупки', 
        imgSrc: '/src/assets/BK.svg', 
        name: 'Бургер Кинг' 
    },
    {
        percent: '4.5%', 
        label: 'Спасибо от суммы покупки', 
        imgSrc: '/src/assets/tehno.svg', 
        name: 'Холодильник.ру' 
    },
    { 
        percent: 'От 1.5%', 
        label: 'Спасибо от суммы покупки', 
        imgSrc: '/src/assets/BORK.svg', 
        name: 'BORK' 
    }
];

const displayedCount = ref(5);
const displayedPartners = computed(() => PARTNERS.slice(0, displayedCount.value));

function showMorePartners() {
    displayedCount.value += 4;
}
</script>

<template>
    <div class="container">
        <div 
            v-for="partner in displayedPartners" 
            :key="partner.name" 
            class="container__partner">
            <label 
                class="container__partner__percent">
                {{ partner.percent }}
            </label>
            <label 
                class="container__partner__label">
                {{ partner.label }}
            </label>
            <img
                :alt="partner.name"
                class="container__partner__img"
                :src="partner.imgSrc" />
            <label 
                class="container__partner__partner-name">
                {{ partner.name }}
            </label>
        </div>
    </div>
    <button 
        @click="showMorePartners" 
        v-if="displayedCount < PARTNERS.length">
        Еще 4 партнера
    </button>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 3em 0;
    gap: 1.2em;
    flex-wrap: wrap;
    width: 81%;
}

.container__partner {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    height: 19em;
    width: 14.5em;
    border-radius: 8px;

    &:hover {
        box-shadow: 0 5px 10px rgba(69, 69, 69, 0.095);
    }
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

button {
  font-family: 'Geometria', sans-serif;
  font-size: 1.1em;
  border: none;
  background-color: var(--green);
  color: var(--white);
  padding: 0.7em 1.2em;
  border-radius: 8px;
  transition: all 0.2s, color 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.207);
  }

  &:focus {
    box-shadow: 0 0 3px 3px rgba(0, 211, 109, 0.3);
  }

  &:active {
    background-color: var(--green);
    color: var(--white);
    border-color: var(--green);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }
}
</style>
