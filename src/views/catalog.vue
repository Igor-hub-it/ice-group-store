<template>
    <div class="content">
        <div @click="fetchPosts()">тык</div>
        <div class="filters">
            <div class="filters__name-filter">
                <input type="text" >
            </div>
            <div class="filters__price-filter">
                <div class="filters__price-from">
                    <input type="text" name="" id="" placeholder="xyi">
                </div>
                <div class="filter__price-to">
                    <input type="text" name="" id="" placeholder="pizda">
                </div>

            </div>
        </div>
        <div
        class="goods">
            <div class="card"
            v-for="item in items"
            :key="item.id">
                <div class="card__title">{{ item.title }}</div>
                <div class="card__body">{{ item.body }}</div>
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
                console.log(this.items)
            } catch(error) {

            }
        }
    }


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

        &__name-filter {

        }
        &__price__filter {

        }
    }
    .goods {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        gap: calc(4%/3);
    }
    .card {
        border: red 1px solid;
    }
</style>