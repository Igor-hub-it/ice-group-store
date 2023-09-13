<script setup>
import { ref } from 'vue';

const burgerActive = ref(true);
const line1 = ref(null);
const line3 = ref(null);
const mobileMenu = ref(null);

const burgerTransform = () => {
    burgerActive.value = !burgerActive.value;

    if (!burgerActive.value) {
        line1.value.style.transform = 'translateY(300%) rotate(45deg)';
        line1.value.style.transition = '0.5s';
        line3.value.style.transform = 'translateY(-200%) rotate(-45deg)';
        line3.value.style.transition = '0.5s';
        line1.value.style.background = 'white';
        line3.value.style.background = 'white';

        mobileMenu.value.style.right = '0';
        mobileMenu.value.style.transition = '0.5s';
    } else {
        line1.value.style.transform = 'none';
        line3.value.style.transform = 'none';
        line1.value.style.background = 'rgba(39, 39, 39, 0.701)';
        line3.value.style.background = 'rgba(39, 39, 39, 0.701)';

        mobileMenu.value.style.right = '-100%';
    }
};
</script>

<style lang="scss" scoped>

    .content {
        width: 70%;
        margin: auto;
        padding: 20px 0 20px 0;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1100px) {
            width: 100%;
            padding: 0 10%;
            justify-content: center;
        }
    }
    .navbar {
        display: flex;
        @media screen and (max-width: 1100px) {
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }
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
            @media screen and (max-width: 1100px) {
                display: block;
            }
        }
        &__nav-links {
            display: flex;
            align-items: flex-end;
            @media screen and (max-width: 1100px) {
                display: none;
            }
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
            @media screen and (max-width: 800px) {
                display: none;                
            }
        }
        &__floating-button:hover {
            background: #5d79cd;
            box-shadow: 0 15px 20px rgba(86, 143, 255, 0.4);
            color: white;
            transform: translateY(-7px);
        }
    }
    .burger {
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        z-index: 3;
        // border: 1px red solid;
        border-radius: 10px;
        cursor: pointer;
        @media screen and (min-width: 800px) {
            display: none;                
        }
        &__line1, &__line2, &__line3 {
            height: 3px;
            width: 80%;
            border-radius: 3px;
            background: rgba(39, 39, 39, 0.701);
            // border: 1px solid #001963a6;
        }
    }
    .mobile-menu {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        right: -100%;
        display: flex;
        flex-direction: column;
        gap: 2%;
        padding: 25px 0 0 10%;
        background: rgba(0, 0, 0, .6);
        z-index: 2;
        &__page-link {
            font-size: 36px;
            color: white;
            text-decoration: none;

        }
    }
</style>