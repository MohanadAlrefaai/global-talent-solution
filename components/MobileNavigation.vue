<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
            <li>
                <NuxtLinkLocale :to="pages().home.route">{{ pages().home.label }}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale :to="pages().about.route">{{ pages().about.label }}</NuxtLinkLocale>
            </li>
            <li class="menu-item-has-children">
                <NuxtLinkLocale :to="pages().services.route">{{ pages().services.label }}</NuxtLinkLocale>
                <ul class="sub-menu">
                    <li v-for="service in serviceData">
                        <NuxtLinkLocale :href="`/service/${service.slug}`">{{ $transalteTitle(service) }}</NuxtLinkLocale>
                    </li>
                </ul>
            </li>
            
            <li>
                <NuxtLinkLocale :to="pages().technology.route">{{pages().technology.label}}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale :to="pages().whyus.route">{{ pages().whyus.label }}</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale :to="pages().contact.route">{{ pages().contact.label }}</NuxtLinkLocale>
            </li>
            <li>
                <I18nLangSwitcher />
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
import serviceData from '~/data/service.json';
export default {
    data() {
        return {
            serviceData
        }
    },
    mounted() {
        const offCanvasNav = document.querySelector('#offcanvas-navigation');
        const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
        const anchorLinks = offCanvasNav.querySelectorAll('a');

        for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
            offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
        }

        const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
        const numMenuExpand = menuExpand.length;

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", (e) => { sideMenuExpand(e) });
        }

        for (let i = 0; i < anchorLinks.length; i++) {
            anchorLinks[i].addEventListener("click", () => { closeMobileMenu() });
        }

        const sideMenuExpand = (e) => {
            e.currentTarget.parentElement.classList.toggle('active');
        }
        const closeMobileMenu = () => {
            const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
            offcanvasMobileMenu?.classList.remove('active');
        }
    }
};
</script>

<style lang="scss">
.offcanvas-navigation {
    ul {
        padding-left: 0;

        li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);

            &.menu-item-has-children {
                .sub-menu {
                    height: 0;
                    opacity: 0;
                    transition: 0.3s;
                    visibility: hidden;
                }

                &.active> {
                    .sub-menu {
                        height: 100%;
                        opacity: 1;
                        visibility: visible;
                        padding-left: 0;
                    }
                }
            }

            a {
                color: $white;
                font-size: 16px;
                font-weight: 500;
                padding: 10px 0;
                display: block;

                &:hover {
                    color: $primary;
                }
            }
        }
    }

    ul {
        &.sub-menu {
            margin-left: 15px;
            transition: 0.4s;

            li {
                list-style: none;
                border: none;

                a {
                    color: $white;
                    font-weight: 400;

                    &:hover {
                        color: $primary;
                    }
                }

                .sub-menu {
                    li {
                        a {
                            font-size: 13px;
                            padding: 5px 0;
                        }
                    }
                }
            }
        }

        li {
            &.menu-item-has-children {
                position: relative;
                display: block;

                a {
                    display: inline-block;
                }

                &.active> {
                    .menu-expand {
                        background-color: rgba($white, 0.2);

                        i {
                            &:before {
                                transform: rotate(0);
                            }
                        }
                    }
                }

                .menu-expand {
                    top: 5px;
                    right: 0;
                    width: 35px;
                    height: 35px;
                    cursor: pointer;
                    line-height: 35px;
                    position: absolute;
                    text-align: center;
                    background-color: rgba($white, 0.1);

                    &:hover {
                        background-color: rgba($white, 0.2);
                    }

                    i {
                        display: block;
                        border-bottom: 1px solid $white;
                        position: relative;
                        width: 10px;
                        text-align: center;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);

                        &:before {
                            width: 100%;
                            content: "";
                            border-bottom: 1px solid $white;
                            display: block;
                            position: absolute;
                            top: 0;
                            transform: rotate(90deg);
                            transition: 0.4s;
                        }
                    }
                }
            }
        }
    }
}
</style>