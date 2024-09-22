<template>
    <div>
        <div class="container mb-4 mt-5">
            <h1 class="display-5 dm-regular">Room name</h1>
        </div>

        <!-- Quick booking -->
        <div id="quickbook" class="container">
            <Quickbook />
        </div>

        <!-- MAIN -->
        <main>
            <div class="container">
                <!-- Images -->
                <section class="row my-5">
                    <div class="col-lg-8 order-1">
                        <img src="/images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg" class="img-16-9" alt="A cozy looking hotel room">
                    </div>
                    <div class="col-lg-4 order-4 order-lg-2">
                        <div class="col-12 mb-3">
                            <img src="/images/john-cameron-_RKgdOuNzY0-unsplash.jpg" class="img-16-9" alt="A modern hotel bath">
                        </div>
                        <div class="col-12">
                            <img src="/images/justin-docanto-1NEVlrYE-uU-unsplash.jpg" class="img-16-9" alt="A desk with a laptop on it">
                        </div>
                    </div>

                    <!-- Information -->
                    <div class="col-lg-8 order-2 order-lg-3 mt-5">
                        <h2>A great room</h2>
                            <p>
                                Have we told you how great this room is? It's tremendous. A tremendous
                                room. Featuring a well-stocked fridge, breathtaking views, a luxuriously
                                spacious bathroom, and the softest pillows known to man. Many well known
                                people have stayed in this room, including Liv Tyler, Robert Downey Jr.,
                                and Alex Volkanovski.
                            </p>
                            <p>
                                Put your feet up and relax in the 5 metre wide spa bath. Gaze at the
                                beautiful scenery through the 3-foot-thick quadruple-paned bulletproof
                                glass. And download to your heart's content with our blazing-fast
                                unlimited complimentary WiFi.
                            </p>
                    </div>
                    <div class="col-lg-4 order-3 order-lg-4 mt-lg-5">
                        <button type="button" class="btn my-btn-primary mb-5 w-100">BOOK NOW</button>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import Quickbook from './Quickbook.vue'

export default {
    name: 'RoomPage',
    components: {
        Quickbook
    }
}
</script>

<style scoped>
/* Component styles go here */
</style>