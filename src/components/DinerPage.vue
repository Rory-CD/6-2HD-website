<template>
    <div>
        <!-- HEADER -->
        <header class="hero" style="background-image: url(/images/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg)">
            <div class="container-fluid h-100 d-flex flex-column overlay">
                <!-- Text container -->
                <div class="row d-flex flex-grow-1 align-items-center justify-content-center">
                    <div class="col-sm-8 col-xl-6 mx-auto text-center py-4 mt-4">
                        <h1 class="display-3 text-white dm-regular">The DOM Diner</h1>
                    </div>
                </div>
            </div>
        </header>

        <!-- MAIN -->
        <main>
            <div class="container">
                <!-- Images -->
                <section class="row g-3 my-3">
                    <div class="col-lg-4 order-1">
                        <img src="/images/stefan-johnson-xIFbDeGcy44-unsplash.jpg" class="img-16-10" alt="Wine and food on a rustic table">
                    </div>
                    <div class="col-lg-4 order-3 order-lg-2 mt-5 mt-lg-3">
                        <img src="/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg" class="img-16-10" alt="Wine and food at a large gathering">
                    </div>
                    <div class="col-lg-4 order-5 order-lg-3">
                        <img src="/images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" class="img-16-10" alt="A woman enjoying a salad">
                    </div>

                <!-- Info/hours -->
                    <div class="col-lg-8 order-2 order-lg-4 mt-lg-4">
                        <h2>Culinary delights, right next door</h2>
                        <p>
                            Whether it's breakfast, second breakfast or a midnight snack (prior to closing time),
                            the DOM Diner has you covered. Our chefs are personally trained by Gordon Ramsay,
                            drawing inspiration from his exceptional people skills and talent for sandwich making.
                            Our expansive menu offers 23 different types of chicken, in addition to three
                            different colours of capsicum.
                        </p>
                        <p>
                            So any time of the day or night (within opening hours), come on in and treat yourself
                            to a once in a lifetime dining experience. With storage room for over 6000 slices of
                            bread, the DOM Diner is always well stocked and ready for your patronage.
                        </p>
                    </div>
                    <!-- Opening hours -->
                    <div class="col-lg-4 order-4 order-lg-5 mt-lg-4 mb-5 mb-lg-0">
                        <h3>Opening hours</h3>
                        <div class="row">
                            <div class="col-2">
                                <strong>Mon:</strong>
                            </div>
                            <div class="col-10">
                                9am - 10pm
                            </div>
                        </div>
                        <hr class="mt-1 mb-0">
                        <div class="row">
                            <div class="col-2">
                                <strong>Tue:</strong>
                            </div>
                            <div class="col-10">
                                9am - 10pm
                            </div>
                        </div>
                        <hr class="mt-1 mb-0">
                        <div class="row">
                            <div class="col-2">
                                <strong>Wed:</strong>
                            </div>
                            <div class="col-10">
                                9am - 10pm
                            </div>
                        </div>
                        <hr class="mt-1 mb-0">
                        <div class="row">
                            <div class="col-2">
                                <strong>Thu:</strong>
                            </div>
                            <div class="col-10">
                                9am - 10pm
                            </div>
                        </div>
                        <hr class="mt-1 mb-0">
                        <div class="row">
                            <div class="col-2">
                                <strong>Fri:</strong>
                            </div>
                            <div class="col-10">
                                9am - 10pm
                            </div>
                        </div>
                        <hr class="mt-1 mb-0">
                        <div class="row">
                            <div class="col-2">
                                <strong>Sat:</strong>
                            </div>
                            <div class="col-10">
                                9am - 10pm
                            </div>
                        </div>
                        <hr class="mt-1 mb-0">
                        <div class="row">
                            <div class="col-2">
                                <strong>Sun:</strong>
                            </div>
                            <div class="col-10">
                                9am - 10pm
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'DinerPage'
}
</script>

<style scoped>
/* Component styles go here */
</style>