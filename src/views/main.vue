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
            <div
                class="accordion"
                v-for="(card, id) in accordions"
                :key="id"
                @click="accordionTransform(id)"
                >
                <div class="accordion__sup-title">
                    <div class="accordion__name">
                        <img :src="`imgs/${card.img}`">
                        <p class="accordion__title">{{ card.title }}</p>
                    </div>
                    <p ref="arrow" class="accordion__arrow">&rang;</p>
                </div>
                <p ref="cardContent" class="accordion__sub-title">
                    {{ card.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slides: [
                {img: 'conditioner-service.jpg', isActive: true},
                {img: 'supermarket.jpg', isActive: false},
                {img: 'technologist.jpg', isActive: false},
            ],
            currentSlide: 0,
            accordions: [
                {   
                    id: 0,
                    isActive: false,
                    img: 'sale.svg',
                    title: 'Продажа оборудования:',
                    content: 'Мы предлагаем только высококачественное оборудование от проверенных производителей.Вы можете быть уверены, что приобретаете надежное и эффективное решение для ваших потребностей.'
                },
                {
                    id: 1,
                    isActive: false,
                    img: 'service.svg',
                    title: 'Обслуживание и тех поддержка:',
                    content: 'Наша команда профессионалов всегда готова помочь вам с обслуживанием и ремонтом оборудования. Мы позаботимся о том, чтобы ваше оборудование всегда работало без сбоев.',
                },
                {
                    id: 2,
                    isActive: false,
                    img: 'installation.svg',
                    title: 'Монтаж и инсталляция:',
                    content: 'Наши опытные специалисты выполнят качественный монтаж оборудования, учитывая все особенности вашего помещения. Мы гарантируем надежность и долгий срок службы вашего оборудования.',
                },
            ]
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
        accordionTransform(index) {
            this.accordions[index].isActive = !this.accordions[index].isActive;
            
            if(this.accordions[index].isActive) {
                this.$refs.arrow[index].style.transform = 'rotate(90deg)';
                this.$refs.arrow[index].style.transition = '.5s'
                this.$refs.cardContent[index].style.display = 'block'                
            } else {
                this.$refs.arrow[index].style.transform = 'rotate(0deg)';
                this.$refs.cardContent[index].style.display = 'none'
            }
        }
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
        grid-template-columns: 40%;
        gap: calc(10/3);
        @media screen and (max-width: 800px) {
            width: 95%;
            grid-template-columns: 100%;
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
    .accordion {
        width: 100%;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px black solid;
        border-radius: 10px;
        cursor: pointer;
        &__sup-title {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
        }
        &__name {
            display: flex;
            align-items: flex-end;
        }
        &__title {
            font-size: 1.4rem;
        }
        &__arrow {
            margin-right: 10px;
            font-size: 25px;
        }
        &__sub-title {
            padding-left: 35px;
            display: none;
        }
    }
</style>