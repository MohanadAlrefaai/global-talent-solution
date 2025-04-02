<template>
    <div class="container mb-5">
        <div class="agency-accordion">
            <div class="section-title-two">
                            <!-- <span class="sub-title">{{ $localize('comps.faq.title') }}</span> -->
                            <h3 class="title text-secondary text-center">Whom is this Service For?</h3>
                        </div>
              <div class="accordion" :id="`accordion-service-${service.id}`">
                  
                  <div v-for="(item, index) in service.samples" :key="`accordion-item-service-${service.id}-${item.id}`" :id="`accordion-item-service-${service.id}-${item.id}`"  class="accordion-item card py-3">
                      
                      <h2 class="card-header" :id="`accordion-item-service-heading-${service.id}-${item.id}`">
                          <button class="accordion-button text-start px-5 btn acc-btn border-0 fs-4 btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#accordion-item-service-collapse-${service.id}-${item.id}`" aria-expanded="false" :aria-controls="`accordion-item-service-collapse-${item.id}`">
                              {{ $translate(item, "title") }}
                          </button>
                      </h2>
                      <div :id="`accordion-item-service-collapse-${service.id}-${item.id}`" class="accordion-collapse collapse" :aria-labelledby="`#accordion-item-service-collapse-${service.id}-${item.id}`" :data-bs-parent="`#accordion-service-${service.id}-${item.id}`">
                          <div class="accordion-body">
                              <div class="row">
                                <div class="col-md-5 pe-md-5 ps-md-5 ">
                                    <div class="d-flex flex-column">
                                        <div class="rounded border-1 border mb-3">
                                            <img class="w-100" :src="item.image" :alt="item.title">
                                        </div>
                                        <div class="row">
                                            <div v-for="headline in item.headlineItems" class="col-12">
                                                <span class="fs-6 text-gray fw-bold me-2">{{ headline.key }}:</span>
                                                <span class="fs-6 text-secondary fw-bold text-capitalize">{{ headline.value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="d-md-none">
                                </div>
                                <div class="col-md-7">
                                    <div class="row">
                                        <div v-for="par in item.paragraphs" class="col-12 mb-2">
                                            <span class="fs-6 text-primary fw-bold me-2">{{ par.title }}:</span>
                                            <p class="fs-6 text-gray text-capitalize">{{ par.paragraph }}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="d-flex justify-start gap-4">
                                        <NuxtLinkLocale :to="`${pages().service(service).route}#service-${service.id}-contactus`" class="btn btn-primary btn-hover-secondary mt-30">Apply for This Service</NuxtLinkLocale>
                                    </div>
                                </div>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</template>

<script setup>
const props = defineProps(['service'])
</script>

<style scoped>
img {
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top;
}
</style> 