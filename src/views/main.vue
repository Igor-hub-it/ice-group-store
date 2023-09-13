<template>
    <div class="content">
        <div class="slider">
            <div class="slider__slides">
                <div v-for="slide in slides" :key="slide.id">
                    <img
                        v-if="slide.isActive"
                        class="slider__slide"
                        :class="{'slider__active-slide': slide.isActive}"
                        :src="`imgs/${isMobile.value ? slide.mobileImg : slide.img}`"
                    >
                </div>
                <div 
                    class="slider__content" 
                    v-for="slide in slides"
                    :key="slide.id"
                    v-show="slide.isActive"
                >
                    <div class="slider__title">{{ slide.title }}</div>
                    <div class="slider__descriptor">{{ slide.text }}</div>
                </div>
                <button @click="prevSlide" class="slider__prev-slide"><div class="slider__arrow-prev"></div></button>
                <button @click="nextSlide" class="slider__next-slide"><div class="slider__arrow-next"></div></button>
            </div>
        </div>
        <div class="cards">
            <div
                class="card"
                v-for="(card, id) in cards"
                :key="id"
            >
                <img class="card__img" :src="`imgs/${card.img}`">
                <p class="card__title">{{ card.title }}</p>
                <p class="card__sub-title">{{ card.content }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref, computed, onBeforeUnmount, onMounted } from 'vue';

    const slides = ref([
        {
            img: 'cubes.jpg',
            mobileImg: 'mobile-cubes.jpg',
            isActive: true, title: 'Климатическое оборудование любого уровня',
            text: 'Продажа, обслуживание, монтаж. Осуществляем поставки по Кузбассу и в города Томск, Новосибирск.'
        },
        {    img: 'fruits.jpg',
            mobileImg: 'mobile-icecream.jpg',
            isActive: false, title: 'Мы предлагаем',
            text: 'Широкий ассортимент климатического оборудования для всех уровней потребностей. Независимо от того, нужно ли вам оборудование для дома, офиса или промышленного объекта, мы готовы предоставить вам решения, которые обеспечат идеальный микроклимат.'
        },
        {
            img: 'ice-mint.jpg',
            mobileImg: 'mobile-ice-mint.jpg',
            isActive: false, title: 'Мы предлагаем',
            text: 'Широкий ассортимент климатического оборудования для всех уровней потребностей. Независимо от того, нужно ли вам оборудование для дома, офиса или промышленного объекта, мы готовы предоставить вам решения, которые обеспечат идеальный микроклимат.'
        },
    ]);
    const currentSlide = ref(0);
    const isMobile = ref(false);
    const cards = ref([
        {   
            isActive: false,
            img: 'sale.svg',
            title: 'Продажа оборудования:',
            content: 'Мы предлагаем только высококачественное оборудование от проверенных производителей.Вы можете быть уверены, что приобретаете надежное и эффективное решение для ваших потребностей.'
        },
        {
            isActive: false,
            img: 'service.svg',
            title: 'Обслуживание и тех поддержка:',
            content: 'Наша команда профессионалов всегда готова помочь вам с обслуживанием и ремонтом оборудования. Мы позаботимся о том, чтобы ваше оборудование всегда работало без сбоев.',
        },
        {
            isActive: false,
            img: 'installation.svg',
            title: 'Монтаж и инсталляция:',
            content: 'Наши опытные специалисты выполнят качественный монтаж оборудования, учитывая все особенности вашего помещения. Мы гарантируем надежность и долгий срок службы вашего оборудования.',
        },
        {
            isActive: false,
            img: 'installation.svg',
            title: 'Доставка:',
            content: 'Мы осуществляем поставки климатического оборудования не только по Кузбассу, но и в такие города, как Томск и Новосибирск. Свяжитесь с нами сегодня, чтобы узнать больше о наших продуктах и услугах. Наша цель - ваш комфорт.',
        },
    ]);

    const startCarousel = () => {
        carouselInterval.value = setInterval(nextSlide, 7000);
    };

    const nextSlide = () => {
        stopCarousel();
        setSlideActive(false, currentSlide.value);
        currentSlide.value = (currentSlide.value + 1) % slides.value.length;
        setSlideActive(true, currentSlide.value);
        startCarousel();
    };

    const prevSlide = () => {
        stopCarousel();
        setSlideActive(false, currentSlide.value);
        currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
        setSlideActive(true, currentSlide.value);
        startCarousel();
    };

    const setSlideActive = (isActive, slideIndex) => {
        slides.value[slideIndex].isActive = isActive;
    };

    const stopCarousel = () => {
        clearInterval(carouselInterval.value);
    };

    const checkIfMobile = () => {
        isMobile.value = window.innerWidth <= 900;
    };

    const activeSlide = computed(() => slides.value[currentSlide.value]);

    const carouselInterval = ref(null);
    onMounted(() => {
        startCarousel();
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
    });

    onBeforeUnmount(() => {
        stopCarousel();
        window.removeEventListener('resize', checkIfMobile);
    });
</script>

<style lang="scss" scoped>
    .content {
        width: 70%;
        margin: auto;
        // border: green 1px solid;
        @media screen and (max-width: 1100px) {
            width: 100%;
            margin-top: 10px;
        }
    }
    .slider {
        width: 100%;
        min-height: 45vh;
        max-height: 45vh;
        position: relative; /* Добавили позиционирование для .slider */
        @media screen and (max-width: 1100px) {
            min-height: 20vh;
        }
        
        &__slides {
            position: relative; /* Добавили позиционирование для .slider__slides */
        }
        
        &__slide {
            width: 100%;
            border-radius: 10px;
            transition: opacity 1s ease-in-out;
            
            @media screen and (max-width: 1100px) {
                border-radius: 0px;
            }
        }
        
        &__active-slide {
            max-height: 45vh;
            min-height: 45vh;
            opacity: 1;
            transition: opacity 1s ease-in-out;
            @media screen and (max-width: 1100px) {
                height: 45vh;
            }
        }

        &__content {
            height: 100%;
            position: absolute;
            top: 0;
            left: 15%;
            z-index: 2;
        }

        &__title {
            width: 70%;
            margin-top: 100px;
            font-size: 2rem;
            color: white;
            @media screen and (max-width: 1100px) {
                display: none;
            }
        }

        &__descriptor {
            width: 45%;
            margin-top: 10px;
            color: white;
            @media screen and (max-width: 1100px) {
                display: none;
            }
        }
        
        &__prev-slide,
        &__next-slide {
            padding: 0 5%;
            // border: red 1px solid;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
            height: 100%;
            position: absolute;
            top: 50%;
            z-index: 2;
            background: rgba(0, 0, 0, .0);
            
            @media screen and (max-width: 1100px) {
                display: none;
            }
        }

        &__prev-slide:hover,
        &__next-slide:hover {
            background: rgba(0, 0, 0, .1);
            transition: ease-in-out .3;
        }
        
        /* Позиционирование кнопок поверх слайдов */
        &__prev-slide {
            left: 0;
            transform: translateY(-50%);
        }
        
        &__next-slide {
            right: 0;
            transform: translateY(-50%);
        }
        &__arrow-next, &__arrow-prev {
            width: 45px;
            height: 45px;
        }
        &__arrow-next:before, &__arrow-prev:before,
        &__arrow-next:after, &__arrow-prev:after {
            content: "";
            position: absolute;
            height: 5px;
            width: 20px;
            background: #fff;
            top: 50%;
            left: 50%;
            border-radius: 2px;
        }
        &__arrow-next:before {
            transform-origin: 100% 100%;
            transform: translate(-75%, -50%) rotate(45deg);
        }
        &__arrow-next:after {
            transform-origin: 100% 0%;
            transform: translate(-75%, -50%) rotate(-45deg);
        }
        &__arrow-prev:after {
            transform-origin: 100% 100%;
            transform: translate(-150%, -50%) rotate(135deg);
        }
        &__arrow-prev:before {
            transform-origin: 100% 0%;
            transform: translate(-150%, 50%) rotate(-135deg)
        }
    }

    .cards {
        margin: auto;
        margin-top: 30px;
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        gap: calc(4%/3);
        @media screen and (max-width: 800px) {
            width: 95%;
            grid-template-columns: 100%;
        }
    }
    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0px 0px 2px 1px rgba(34, 60, 80, 0.15);

        &__img {
            width: 15%;
        }

        &__title {
            font-size: 1.4rem;
        }
    }
</style>