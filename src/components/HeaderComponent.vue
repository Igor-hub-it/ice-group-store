<template>
    <div class="content">
        <div class="navbar">
            <router-link to="/" class="navbar__logo">
                <img class="navbar__logo-img" src="../../public/imgs/logo.png" alt="Логотип">
                <h1 class="navbar__logo-name">Ice-Group</h1>
            </router-link>
            <div class="navbar__nav-links">
                <router-link class="navbar__page-link" to="/">Главная</router-link>
                <router-link class="navbar__page-link" to="/catalog">Каталог</router-link>
                <router-link class="navbar__page-link" to="/contacts">Контакты</router-link>
            </div>
        </div>
        <div class="actions">
            <button class="actions__floating-button">Оставить заявку</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>

    .content {
        width: 70%;
        margin: auto;
        padding: 20px 0 30px 0;
        display: flex;
        justify-content: space-between;
        border: 1px red solid;
        @media screen and (max-width: 1100px) {
            width: 100%;
            padding: 0 10%;
        }
    }
    .navbar {
        display: flex;
        &__logo {
            display: flex;
            align-items: flex-end;
        }
        &__logo-img {
            height: 60px;
        }
        &__logo-name {
            color: black;
            font-size: 2.4rem;
            @media screen and (max-width: 1100px) {
                display: none;
            }
        }
        &__nav-links {
            display: flex;
            align-items: flex-end;
        }
        &__page-link {
            margin-left: 20px;
            color: #000000A6;
            font-size: 1.6rem;
        }
        &__page-link:hover {
            color: black;
            transition: .5s;
        }
    }
    .actions {
        display: flex;
        align-items: flex-end;
        &__floating-button {
            text-decoration: none;
            display: inline-block;
            width: 220px;
            height: 45px;
            line-height: 45px;
            border-radius: 45px;
            // margin: 10px 20px;
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 3px;
            font-weight: 500;
            color: #524f4e;
            background: white;
            box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
            transition: .3s;
        }
        &__floating-button:hover {
            background: #5d79cd;
            box-shadow: 0 15px 20px rgba(86, 143, 255, 0.4);
            color: white;
            transform: translateY(-7px);
        }
    }
</style>