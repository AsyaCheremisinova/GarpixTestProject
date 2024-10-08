<script setup lang="ts">

const SALE_IMG= [
    {         
        name: 'BK' ,
        imgSrc: '/src/assets/blocks/colls2.svg'
    },
    {         
        name: 'Пятерочка' ,
        imgSrc: '/src/assets/blocks/colls3.svg'
    },
    {         
        name: 'Республика' ,
        imgSrc: '/src/assets/blocks/colls4.svg'
    },
    {         
        name: 'Мегафон' ,
        imgSrc: '/src/assets/blocks/colls5.svg'
    },
    {         
        name: 'ivi' ,
        imgSrc: '/src/assets/blocks/colls1.svg'
    }
]

const PERCENT_IMG= [
    {         
        name: 'Будь здоров!' ,
        imgSrc: '/src/assets/blocks/colls6.svg',
        percent: '3%'
    },
    {         
        name: 'Пятерочка' ,
        imgSrc: '/src/assets/blocks/colls3.svg',
        percent: '1,5%'
    },
    {         
        name: 'ЛитРес' ,
        imgSrc: '/src/assets/blocks/colls8.svg',
        percent: '5%'
    }
]

const CUPON_IMG= [
    {         
        name: 'Посуда центр' ,
        imgSrc: '/src/assets/blocks/colls9.svg'
    },
    {         
        name: 'Lamoda' ,
        imgSrc: '/src/assets/blocks/colls10.svg'
    },
    {         
        name: 'myToys' ,
        imgSrc: '/src/assets/blocks/colls11.svg'
    }
]

const PERSONAL_IMG= [
    {         
        name: 'OZON' ,
        imgSrc: '/src/assets/blocks/colls12.svg'
    },
    {         
        name: 'TEZ tour' ,
        imgSrc: '/src/assets/blocks/colls13.svg'
    },
    {         
        name: 'BookingCar' ,
        imgSrc: '/src/assets/blocks/colls14.svg'
    },
    {         
        name: 'Сбербанк Страхование' ,
        imgSrc: '/src/assets/blocks/colls15.svg'
    },
    {         
        name: 'Tripster' ,
        imgSrc: '/src/assets/blocks/colls16.svg'
    }
]
</script>

<template>
    <div class="container">
        <img 
            v-for="img in SALE_IMG"
            class="container__img"
            :key="img.name"
            :alt="img.name"
            :src="img.imgSrc" 
        />
    </div>
    <div class="text-block">
        Скидки за бонусы
        <div class="text-block__empty-block"> </div>
    </div>
    <div class="center-blocks">
        <div class="center-blocks__item">
            <div class="container center-block">
                <div 
                    class="container__img"
                    v-for="img in PERCENT_IMG"
                >
                    <img
                        class="container__img"
                        :key="img.name"
                        :alt="img.name"
                        :src="img.imgSrc" 
                    />
                    <div 
                        class="container__percent-block">
                        {{ img.percent }}
                    </div>
                </div>
            </div>
            <div class="text-block">
                Большой % начисления
                <div class="text-block__empty-block"> </div>
            </div>
        </div>
        <div class="center-blocks__item">
            <div class="container center-block">
                <img 
                    v-for="img in CUPON_IMG"
                    class="container__img"
                    :key="img.name"
                    :alt="img.name"
                    :src="img.imgSrc" 
                />
            </div>
            <div class="text-block">
                Выгодные купоны
                <div class="text-block__empty-block"> </div>
            </div>
        </div>
    </div>
    <div class="container" >
        <img 
            v-for="img in PERSONAL_IMG"
            class="container__img"
            :key="img.name"
            :alt="img.name"
            :src="img.imgSrc" 
        />
    </div>
    <div class="text-block bottom-box">
        Персональное исходя из трат
        <div class="text-block__empty-block text-block__empty-block-bottom"> </div>
    </div>
</template>

<style scoped>
.container {
    background-color: var(--white);
    border-radius: 79px;
    height: 9em;
    margin-top: 2.5em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 0.3em 1.3em;
}

.text-block-mobile {
    display: none;
}

.text-block {
    background-color: var(--white);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: 1.5em;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    position: relative;
    z-index: -200;
    padding: 0.5em 1.5em;

    &::before, &::after { 
        content:"";
        position: absolute; 
        width: 3.1em; 
        height: 3.1em;  
        background: var(--background-color); 
        z-index: -100;
    }

    &::before {
        left:-3.06em;
        top:-0.175em;
        border-radius: 50px;
    }

    &::after {
        right:-3.06em;
        top:-0.175em;
        border-radius: 50px;
    }
}

.text-block__empty-block {
    position: relative;
    width: 152%;
    height: 76%;
    right: 25.5%;
    bottom:130%;
    background-color: var(--white);
    z-index: -150;
}

.center-blocks {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 3em;
    flex-wrap: wrap;
}

.center-blocks__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container__img {
    position: relative;
    width: 7.2em;
}

.container__percent-block {
    position: absolute; 
    width: 2.8em; 
    height: 2.8em;  
    background: var(--black);
    border-radius: 50px;
    right: 0.2em;
    top: -0.5em;
    color: var(--white);
    text-align: center;
    align-content: center;
    font-size: 1em;
    font-weight: bold;
    padding: 0.2em;
}

.bottom-box {
    margin-bottom: 10em;
}

.text-block__empty-block-bottom {
    width: 150%;
    height: 76%;
    right: 25.5%;
    bottom: 120%; 
}

@media (max-width: 770px) { 
    .container {
        width: 75%;
        height: 12em;
        flex-wrap: wrap;
        align-self: center;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 0;
        padding: 1em;
    }

    .container__img {
        width: 5.5em;
    }

    .center-blocks {
        flex-direction: column;
        margin: 2em 0 2em 0;
        width: 100%;
        gap: 2em;
    }

    .center-blocks__item {
        width: 100%;
    }

    .center-block {
        flex-direction: row;
        height: auto;
    }

    .container__percent-block {
        width: 2.8em; 
        height: 2.8em; 
        font-size: 1em;
    }

    .bottom-box {
        font-size: 1em;
        margin-bottom: 0;
    }

    .text-block {       
        &::before {
            left:-3em;
            top:-0.175em;
            border-radius: 50px;
        }

        &::after {
            right:-3em;
            top:-0.175em;
            border-radius: 50px;
        }
    }

    .text-block__empty-block-bottom {
        width: 119.5%;
        height: 92%;
        right: 9.7%;
        bottom: 200%;
    }
}

@media (max-width: 395px) {
    .container__img {
        width: 4.5em;
    }

    .container__percent-block {
        width: 2em;
        height: 2em;
        font-size: 1em;
    }

    .text-block {
        font-size: 0.9em;
    }

    .container {
        height: 10em;
    }

    .center-block {
        height: auto;
    }
}
</style>