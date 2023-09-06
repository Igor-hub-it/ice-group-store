<template>
    <div class="content">
        <div class="navbar">
            <div class="navbar__nav-links">
                <router-link class="navbar__page-link" to="/">Главная</router-link>
                <router-link class="navbar__page-link" to="/catalog">Каталог</router-link>
                <router-link class="navbar__page-link" to="/contacts">Контакты</router-link>
            </div>
        </div>
        <div class="info">
            <p>ООО «Айс-Групп»</p>
            <p>ИНН 4205236879</p>
            <p>ОГРН 1124205001084</p>
            <button class="info__agreement">
                <p>*Указывая свои данные на сайте Вы принимаете</p>
                <span>пользовательское соглашение</span>
            </button>
            <p><a href="https://ru.freepik.com/free-photo/ice-cubes-on-black-surface-with-copyspace_8761503.htm#query=ice%20cube&position=1&from_view=search&track=ais">Изображение от Racool_studio</a> на Freepik</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content {
        width: 70%;
        margin: auto;
        padding: 20px 0 20px 0;
        display: flex;
        justify-content: flex-start;
        gap: 20%;
        border: 1px red solid;
        @media screen and (max-width: 1100px) {
            width: 100%;
            justify-content: center;
        }
    }
    .navbar {

        &__nav-links {
            display: flex;
            flex-direction: column;
        }
        &__page-link {
            margin: 0 0 10px 20px;
            color: #000000A6;
            font-size: 1.1rem;
        }
        &__page-link:hover {
            color: black;
            transition: .5s;
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        &__agreement {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        &__agreement > span:hover {
            text-decoration: underline;
        }
    }
</style>