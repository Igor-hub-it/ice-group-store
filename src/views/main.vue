<template>
    <div class="content">
        <div class="slider">
            <button @click="prevSlide" class="slider__prev-slide">&#60;</button>
            <img
                class="slider__slide"
                :class="{'slider__active-slide': slide.isActive}"
                v-for="slide in slides"
                :key="slide.id"
                v-show="slide.isActive"
                :src="`imgs/${slide.img}`"
            >
            <button @click="nextSlide" class="slider__next-slide">&#62;</button>
        </div>
        <div class="cards">
            <router-link to="/" class="cards__catalog card">

            </router-link>
            <router-link to="/" class="cards__delivery card">

            </router-link>
            <router-link to="/" class="cards__contacts card">

            </router-link>
            <router-link to="/" class="cards__about card">

            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slides: [
                {id: 1, img: 'conditioner-service.jpg', isActive: true},
                {id: 2, img: 'supermarket.jpg', isActive: false},
                {id: 3, img: 'technologist.jpg', isActive: false},
            ],
            currentSlide: 0,
        }
    },

    methods: {
        startCarousel() {
            this.carouselInterval = setInterval(this.nextSlide, 7000);
        },
        nextSlide() {
            this.setSlideActive(false, this.currentSlide);

            this.currentSlide = (this.currentSlide + 1) % this.slides.length;

            this.setSlideActive(true, this.currentSlide);
        },
        
        prevSlide() {
            this.setSlideActive(false, this.currentSlide);

            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;

            this.setSlideActive(true, this.currentSlide);
        },
        
        setSlideActive(isActive, slideIndex) {
            this.slides[slideIndex].isActive = isActive;
        },

        stopCarousel() {
            clearInterval(this.carouselInterval);
        },
    },
    computed: {
        activeSlide() {
            return this.slides[this.currentSlide];
        }
    },
    created() {
        this.startCarousel();
    },
    beforeDestroy() {
        this.stopCarousel();
    },
}
</script>

<style lang="scss" scoped>
    .content {
        width: 70%;
        margin: auto;
        border: green 1px solid;
        @media screen and (max-width: 1100px) {
            width: 100%;
        }
    }
    .slider {
        width: 100%;
        min-height: 45vh;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1100px) {
            min-height: 20vh;
        }
        &__prev-slide {
            width: 40%;
            margin-right: -10%;
            z-index: 10;
            @media screen and (max-width: 1100px) {
                display: none;
            }
        }
        &__slide {
            width: 100%;
            flex: 0 0 100%;
            border-radius: 10px;
            transition: opacity 1s ease-in-out;
            @media screen and (max-width: 1100px) {
                border-radius: 0px;
            }
        }
        &__active-slide {
            opacity: 1;
            transition: opacity 1s ease-in-out;
        }
        &__next-slide {
            height: 100%;
            width: 40%;
            margin-left: -10%;
            z-index: 10;
            @media screen and (max-width: 1100px) {
                display: none;
            }
        }
    }
    .cards {
        margin: auto;
        margin-top: 30px;
        display: grid;
        grid-template-columns: 22% 22% 22% 22%;
        gap: 4%;
        @media screen and (max-width: 800px) {
            width: 95%;
            grid-template-columns: 48% 48%;
        }
    }
    .card {
        height: 15vh;
        text-decoration: none;
        display: inline-block;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
        background-size: 200% auto;
        box-shadow: 0 0 20px rgba(0, 0, 0, .1);
        transition: .5s;
    }
    .card:hover {
        background-position: right center;
    }
</style>