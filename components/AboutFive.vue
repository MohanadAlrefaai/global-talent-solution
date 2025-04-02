<template>
    <div class=" overflow-hidden">
        <div class="container">
            <div class="row">
                <!-- About Content Start -->
                <div class="col-lg-6" data-aos="fade-up">
                    <div class="about-content-area">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">Global Talent Solution</span>
                            <h3 class="title">Our Vision</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <div class=" col-12" data-aos="fade-up">
                                <div class="about-funfact">
                                    <!-- <div class="number"><span class="counter">For job-seekers </span>+</div> -->
                                    <!-- <h6 class="text">Completed projects</h6> -->
                                    
                                <p>At GTS, we envision a future where every organization maximizes its potential through strategic HR solutions. We aspire to be a catalyst for positive change in the global business community, driving innovation, growth, and prosperity through our unparalleled services. Our vision is to create a world where talent knows no boundaries, and opportunities abound for all.
                                </p>
                                <h3 class="title mt-4">Our Value Proposition:</h3>    
                            </div>
                            </div>
                        <div class="row mt-4 mb-5">
                            <AccordionAbout />
                            
                        </div>
                        
                    </div>
                </div>
                <!-- About Content Start -->

                <!-- About Image Area Start -->
                <div class="col-lg-6" data-aos="fade-up">
                    <div class="about-image-area about-two about-shape-animation right-0 mr-0">
                        <div class="about-image js-tilt">
                            <img src="/images/content/image-glob.jpeg" alt="image">
                        </div>
                        <!-- <div class="about-image js-tilt">
                            <img src="/images/about/about-2.jpg" alt="image">
                        </div> -->
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/video-shape-1.png" />
                    </div>
                </div>
                <!-- About Image Area Start -->
            </div>
        </div>
    </div>
</template>

<script setup>
import AccordionAbout from "./AcoordionAbout.vue"
</script>