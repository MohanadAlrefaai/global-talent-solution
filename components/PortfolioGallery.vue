<template>
    <div class="section-padding" :style="{backgroundColor: '#f8faff'}">
        <div class="container">
            <div class="row align-items-center mb-30">
                <div class="col-lg-5">
                    <!-- Section Title Two Start -->
                    <div class="section-title-two">
                        <span class="sub-title">{{ $localize('comps.portfolio.title') }}</span>
                        <h3 class="title">{{ $localize('comps.portfolio.subtitle') }}</h3>
                    </div>
                    <!-- Section Title Two End -->
                </div>
                <div class="col-lg-7">

                    <div v-if="props.isHome" class="messonry-button text-lg-end">
                        <NuxtLinkLocale :to="`/portfolio-gallery`" ><span class="filter-text">{{ $localize('common.btn-show-all') }}</span></NuxtLinkLocale>
                    </div>
                </div>
                <!-- <div class="col-lg-7">
                    <div class="messonry-button text-lg-end">
                        <button @click="filterHandler('all')" :class="{'mixitup-control-active': selectedCat === 'all'}"><span class="filter-text">All</span></button>
                        <button v-for="(filter, index) in categories" :key="index" @click="filterHandler(filter)" :class="{ 'mixitup-control-active': selectedCat === filter }"><span class="filter-text">{{ filter }}</span></button>
                    </div>
                </div> -->
            </div>

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 box">
                <div class="col portfolio-item" :class="portfolio.category" v-for="(portfolio, index) in items" :key="index">
                    <div v-if="selectedCat === portfolio.category || selectedCat === 'all'" class="single-portfolio">
                        <div class="thumbnail">
                            <img class="img-fluid ratio ratio-1x1" :src="portfolio.imgSrc" :alt="portfolio.title">
                        </div>
                        <div class="content">
                            <h5 class="title">
                                <NuxtLinkLocale to="/project/project-details">{{ portfolio.title }}</NuxtLinkLocale>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import portfolios from "~/data/portfolios.json"

    const props = defineProps({
        isHome: {
            required: false
        }
    })

    const items = computed(() => {
        return props.isHome ? portfolios.slice(0, 6) : portfolios
    })

    const categories = ref([])
    const selectedCat = ref('all')


    const filterCategories = () => {
        categories.value = [...new Set(portfolios.map(item => item.category))];
    }

    onMounted(() => {
        filterCategories()
    })

</script>

<style lang="scss">
    .portfolio-item:empty {
        display: none;
    }
    img {
        object-fit: cover;
        object-position: center;
    }
</style>