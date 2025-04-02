<template>
    <div class="agency-accordion">
        <div class="accordion" id="accordion-about">
            
            <div v-for="(item, index) in faq" :key="`about-${item.id}`" :id="`about-${item.id}`"  class="accordion-item card">
                
                <h2 class="card-header" :id="`about-heading-${item.id}`">
                    <button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#about-collapse-${item.id}`" aria-expanded="false" :aria-controls="`about-collapse-${item.id}`">
                        {{ $translate(item, "question") }}
                    </button>
                </h2>
                <div :id="`about-collapse-${item.id}`" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-about">
                    <div class="accordion-body">
                        {{ $translate(item, "answer") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import faq from "~/data/about-value.json"
</script>