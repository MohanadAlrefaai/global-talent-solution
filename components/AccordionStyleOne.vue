<template>
    <div class="agency-accordion">
        <div class="accordion" id="accordionExample">
            
            <div v-for="(item, index) in faq" :key="`faq-${item.id}`" :id="`faq-${item.id}`"  class="accordion-item card">
                
                <h2 class="card-header" :id="`heading-${item.id}`">
                    <button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${item.id}`" aria-expanded="false" :aria-controls="`collapse-${item.id}`">
                        {{ $translate(item, "question") }}
                    </button>
                </h2>
                <div :id="`collapse-${item.id}`" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        {{ $translate(item, "answer") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import faq from "~/data/faq.json"
</script>