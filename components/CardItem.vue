<template>
    <div class="card my-5">
        <div class="row">
            <div class="col-md-6 h-full" :class="index%2==1 ? `order-3` : `order-1`"> 
                <div class=" border-1 border overflow-hidden h-full" :class="index%2==0 ? 'rounded-start' : 'rounded-end'">
                    <img class="h-full" :src="item.image" />
                </div>
            </div>
    
            <div class="col-md-6 d-flex justify-content-start py-3 items-start flex-column order-2">
                <h3 v-if="item.title" class="text-secondary px-4 mt-2 mb-3">{{item.title}}</h3>
                <div class="px-4" :class="index1 == 0 ? `` : 'mt-2'" v-if="item.contents" v-for="(content, index1) in $translate(item, 'contents')">
                    
                    <span v-if="content.title" class="text-primary fs-5 fw-bold me-1">{{ content.title }}</span>
                    <p v-for="par in content.paragraphs">{{ par }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['item','index'])
</script>

<style scoped>
img {
    aspect-ratio: 3/2;
    object-fit: cover;
    object-position: center;
}
</style>