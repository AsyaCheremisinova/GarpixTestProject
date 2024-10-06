<script setup lang="ts">
import { ref, computed } from 'vue'

const OFFERS = [
    { 
        imgFirst: '/src/assets/TPImg.svg',
        imgSecond: '/src/assets/tehno.svg',
        name: 'Технопарк',
        label: '20% спасибо за технику Electrolux'
    },
    { 
        imgFirst: '/src/assets/ESImg.svg',
        imgSecond: '/src/assets/Evroset.svg',
        name: 'Евросеть',
        label: '10% спасибо за покупки в черную пятницу' 
    },
    {
        imgFirst: '/src/assets/MVImg.svg',
        imgSecond: '/src/assets/Bitmap.svg',
        name: 'М.Видео',
        label: '15% спасибо для студентов'
    },
    { 
        imgFirst: '/src/assets/TPImg.svg',
        imgSecond: '/src/assets/tehno.svg',
        name: 'Технопарк',
        label: '20% спасибо за технику Electrolux'
    },
    { 
        imgFirst: '/src/assets/ESImg.svg',
        imgSecond: '/src/assets/Evroset.svg',
        name: 'Евросеть',
        label: '10% спасибо за покупки в черную пятницу' 
    },
    {
        imgFirst: '/src/assets/MVImg.svg',
        imgSecond: '/src/assets/Bitmap.svg',
        name: 'М.Видео',
        label: '15% спасибо для студентов'
    },
    {
        imgFirst: '/src/assets/MVImg.svg',
        imgSecond: '/src/assets/Bitmap.svg',
        name: 'М.Видео',
        label: '15% спасибо для студентов'
    }
    
];

const displayedCount = ref(3);
const displayedOffers = computed(() => OFFERS.slice(0, displayedCount.value));

function showMorePartners() {
    displayedCount.value += 4;
}
</script>

<template>
    <h2 class="offers-h2">3 предложения в категории «Электроника и бытовая техника»</h2>
    <div class="offers-container">
        <div 
            v-for="offer in displayedOffers" 
            :key="offer.name" 
            class="offers-container__offer"
        >
            <img
                :alt= offer.name
                class="offers-container__offer__img"
                :src= offer.imgFirst 
            />
            <div class="offers-container__offer__bottom">
                <img
                    :alt= offer.name
                    class="offers-container__offer__bottom__img"
                    :src= offer.imgSecond 
                />
                <div class="offers-container__offer__bottom__labels">
                    <label 
                        class="offers-container__offer__bottom__labels__name">
                        {{ offer.name }}
                    </label>
                    <label 
                        class="offers-container__offer__bottom__labels__label">
                        {{ offer.label }}
                    </label>
                </div>
            </div>
        </div>
    </div>
    <button 
        @click="showMorePartners" 
        v-if="displayedCount < OFFERS.length">
        Еще 4 предложения
    </button>
</template>

<style scoped>
.offers-h2 {
    font-size: 2em;
    width: 25em;
    text-align: center;
    margin-top: 3.7em;
    text-wrap: wrap;
}

.offers-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em;
    margin-top: 2em;
    justify-content: center;
    width: 85%;
    align-self: center;
}

.offers-container__offer {
    display: flex;
    flex-direction: column;
    width: 23em;
}

.offers-container__offer__img {
    width: auto;
}

.offers-container__offer__bottom {
    margin-top: 1em;
    display: flex;
    flex-direction: row;
}

.offers-container__offer__bottom__img {
    width: 3.6em;
}

.offers-container__offer__bottom__labels {
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    row-gap: 0.5em;
}

.offers-container__offer__bottom__labels__name {
    font-size: 1em;
    color: var(--gray-text-color);
}

.offers-container__offer__bottom__labels__label {
    font-size: 1.15em;
    width: 100%;
    flex-wrap: wrap;
}

button {
  font-family: 'Geometria', sans-serif;
  font-size: 1.1em;
  border: none;
  background-color: var(--green);
  color: var(--white);
  margin-top: 2em;
  margin-bottom: 5em;
  padding: 0.7em 1.2em;
  border-radius: 8px;
  transition: all 0.2s, color 0.2s;
  cursor: pointer;

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

@media (max-width: 770px) {
    .offers-h2 {
        width: 95%;
        margin-top: 1em;
    }

    .offers-container__offer {
        margin-bottom: 2em;
    }

    button {
        margin-bottom: 2em;
    }
}

@media (max-width: 395px) {
    .offers-container__offer {
        width: 17em;
    }
}
</style>
