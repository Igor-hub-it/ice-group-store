<template>
    <div class="content">
        <div class="slider">
            <button @click="prevSlide" class="slider__prev-slide">&#60;</button>
            <img
                class="slider__slide"
                v-for="slide in slides"
                :key="slide.id"
                v-show="slide.isActive"
                :src="`imgs/${slide.img}`"
            >
            <button @click="nextSlide" class="slider__next-slide">&#62;</button>
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
            this.carouselInterval = setInterval(this.NextSlide, 2000);
        },
        computed: {
            activeSlide() {
                return this.slides[this.currentSlide];
            }
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
    }
    .slider {
        width: 100%;
        display: flex;
        justify-content: space-between;
        &__prev-slide {
            width: 40%;
            margin-right: -10%;
            z-index: 10;
            // position: absolute;
            // top: 0;
            // bottom: 0;
            // z-index: 1;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            // width: 15%;
            // padding: 0;
            // color: black;
            // text-align: center;
        }
        &__slide {
            width: 100%;
        }
        &__next-slide {
            width: 40%;
            margin-left: -10%;
            z-index: 10;
        }
    }
</style>