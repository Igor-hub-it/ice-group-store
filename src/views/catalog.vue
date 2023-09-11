<template>
    <div class="content">
        <button @click="fetchPosts()">Обновить</button>
        <div class="filters">
            <input class="filters__name-filter" type="text" placeholder="поиск по слову">
            <p>стоимость</p>
            <div class="filters__price-filter">
                <input class="filters__price-from" type="text" name="" id="" placeholder="от">
                <input class="filters__price-to" type="text" name="" id="" placeholder="до">
            </div>
        </div>
        <div
        class="goods">
            <div class="card"
            v-for="item in items"
            :key="item.id">
                <div class="card__title">{{ item.title }}</div>
                <div class="card__body">{{ item.body }}</div>
                <button class="card__about">подробнее...</button>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchData } from '@/api.js/postApi'

export default{
    data() {
        return {
            items: [],
        }
    },
    methods: {
        async fetchPosts() {
            try {
                this.items = await fetchData()
                this.items = this.items.slice(0, 20)
                console.log(this.items)
            } catch(error) {

            }
        }
    },
    mounted() {
        this.fetchPosts()
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
    .filters {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        &__name-filter, &__price-from, &__price-to {
            border: rgb(77, 77, 77) 1px solid;
            border-radius: 5px;
            margin: 1rem 0;
            padding: 10px;
        }

        &__price-filter {
            display: flex;
            justify-content: flex-start;
            gap: 10px;
        }
    }
    .goods {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        // gap: calc(4%/3);
    }
    .card {
        padding: 10px;
        border: rgb(77, 77, 77) 1px solid;
        border-radius: 5px;

        &__about {
            margin-top: 10px;
            padding: 10px;
            border: rgb(77, 77, 77) 1px solid;
            border-radius: 5px;
        }
        &__about:hover {
            transition: 0.3s;
            color: white;
            background: rgb(77, 77, 77);
        }
    }
</style>