<template>
    <div>
        <!-- HEADER -->
        <header class="hero" style="background-image: url(/images/adam-jaime-dmkmrNptMpw-unsplash.jpg)">
            <div class="container-fluid h-100 d-flex flex-column overlay">
                <!-- Text container -->
                <div class="row d-flex flex-grow-1 align-items-center justify-content-center">
                    <div class="col-sm-8 col-xl-6 mx-auto text-center py-4 mt-4">
                        <h1 class="display-3 text-white dm-regular">Boolean Bar</h1>
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
                        <img src="/images/crew-szCvt1gP2d4-unsplash.jpg" class="img-16-10" alt="Happy bartenders serve customers">
                    </div>
                    <div class="col-lg-4 order-3 order-lg-2 mt-5 mt-lg-3">
                        <img src="/images/kobby-mendez-xBFTjrMIC0c-unsplash.jpg" class="img-16-10" alt="Three cocktails on a bar">
                    </div>
                    <div class="col-lg-4 order-5 order-lg-3">
                        <img src="/images/anshu-a-fxLTX93WdFg-unsplash.jpg" class="img-16-10" alt="Three empty bar stools">
                    </div>

                    <!-- Info/hours -->
                    <div class="col-lg-8 order-2 order-lg-4 mt-lg-4">
                        <h2>Have a drink, on us</h2>
                        <p>
                            Every visitor to the Javascript Hotel receives a complimentary fishbowl margherita
                            and novelty hat. Our bartenders put on an extraordinary show, each trained by the
                            best talent in the greater Geelong region. When you come to the Boolean Bar, it's
                            more than just a place to drink, it's an experience.
                        </p>
                        <p>
                            The atmosphere is something to behold, with fairy lights, multiple disco balls and
                            an original Picasso in the restrooms. We also have live music every third Wednesday,
                            featuring renowned artists like Regina Philange. With more than 9000 drink choices
                            and 64 slices of American cheese, you'll never want to leave.
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
    name: 'BarPage'
}
</script>

<style scoped>
/* Component styles go here */
</style>