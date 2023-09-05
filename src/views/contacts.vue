<template>
    <div class="content">
        <div class="info">
            <div class="info__phones">
                <div class="info__title">
                    <div class="info__icon"></div>
                    <div class="info__text">Телефон</div>
                </div>
                <ul class="phone-list">
                    <li class="phone-list__item">1</li>
                    <li class="phone-list__item">1</li>
                    <li class="phone-list__item">1</li>
                </ul>
            </div>
            <div class="info__mail">
                <div class="info__title">
                    <div class="info__icon"></div>
                    <div class="info__text">Почта</div>
                </div>
                <p>icegr@mail.ru</p>
            </div>
            <div class="info__address">
                <div class="info__title">
                    <div class="info__icon"></div>
                    <div class="info__text">Адрес</div>
                </div>
                <p>Кемерово, ул. Терешковой 39д ТЦ Саман павилион №34 офис/склад Терешковой 39/4</p>
            </div>
            <div class="info__work-time">
                <div class="info__title">
                    <div class="info__icon"></div>
                    <div class="info__text">Режим работы</div>
                </div>
                <p>Пн-Пт 9:00 - 18:00</p>
            </div>
        </div>
        <iframe class="mt-3" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa036d61e49ed2c1511555508537d84db6f980dfc030f713906c6ff9152be0c65&amp;source=constructor" width="100%" height="516" frameborder="0"></iframe>
    </div>
</template>

<style lang="scss" scoped>
    .content {
        width: 70%;
        margin: auto;
        border: green 1px solid;
        @media screen and (max-width: 1100px) {
            width: 100%;
        }
    }
    .info {
        &__title {
            display: flex;
        }
    }
</style>