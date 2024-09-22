<template>
    <div>
        <!-- HEADER -->
        <header class="hero" style="background-image: url(/images/runnyrem-LfqmND-hym8-unsplash.jpg)">
            <div class="container-fluid h-100 d-flex flex-column overlay">
                <!-- Text container -->
                <div class="row d-flex flex-grow-1 align-items-center justify-content-center">
                    <div class="col-sm-8 col-xl-6 mx-auto text-center py-4 mt-4">
                        <h1 class="display-3 text-white dm-regular">Accommodation</h1>
                    </div>
                </div>
            </div>
        </header>

        <!-- QUICK BOOKING -->
        <div id="quickbook" class="container translate-u-50">
            <Quickbook />
        </div>

        <!-- MAIN -->
        <main>
            <div class="container">
                <!-- Suite/room options -->
                <section class="row gx-4 gy-5 mt-3 mt-lg-0">
                    <div class="col-lg-6">
                        <a @click="updatePage('RoomPage')" role="button" class="card-link">
                            <div class="card">
                                <img src="/images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg" class="card-img-top img-fluid" alt="A warm looking hotel room">
                                <div class="card-body">
                                    <h5 class="card-title">Var Suite</h5>
                                    <p class="card-text">
                                        With an elegantly folded bed and several lamps, this luxurious suite will
                                        please even the most pretentious patrons.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a @click="updatePage('RoomPage')" role="button" class="card-link">
                            <div class="card">
                                <img src="/images/reisetopia-IVgQqmcOB2w-unsplash.jpg" class="card-img-top img-fluid" alt="A vintage hotel room">
                                <div class="card-body">
                                <h5 class="card-title">Const Suite</h5>
                                <p class="card-text">
                                    A vintage motif elevates this suite, sending its inhabitants on a nostalgic
                                    journey to their Nanna's house. The floral decorations are complemented by a
                                    strong scent of mothballs.
                                </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a @click="updatePage('RoomPage')" role="button" class="card-link">
                            <div class="card">
                                <img src="/images/reisetopia-aI6Su7Mu9Ro-unsplash.jpg" class="card-img-top img-fluid" alt="A cozy hotel room">
                                <div class="card-body">
                                <h5 class="card-title">JSON Suite</h5>
                                <p class="card-text">
                                    A favourite of many patrons, this suite is both prestigous and soothing.
                                    Many who stay here claim to love the cozy feel, but we know the primary draw
                                    is the oversized tassles.
                                </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a @click="updatePage('RoomPage')" role="button" class="card-link">
                            <div class="card">
                                <img src="/images/olexandr-ignatov-w72a24brINI-unsplash.jpg" class="card-img-top img-fluid" alt="A hotel room with a view">
                                <div class="card-body">
                                <h5 class="card-title">Array Room</h5>
                                <p class="card-text">
                                    Gaze at the beauty of Lara's cityscape, or alternatively at a framed photo
                                    of Lenny Kravitz. Lay in bed and feel the warm sun on your face as you
                                    wonder how to turn on the hanging light bulbs.
                                </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a @click="updatePage('RoomPage')" role="button" class="card-link">
                            <div class="card">
                                <img src="/images/ish-consul-ccKvfKSKH-k-unsplash.jpg" class="card-img-top img-fluid" alt="A hotel room with a mountain view">
                                <div class="card-body">
                                <h5 class="card-title">Script Room</h5>
                                <p class="card-text">
                                    Ever wanted to stay in a room overlooking the majestic and breathtaking You
                                    Yangs? Of course you have. Visitors staying in this room will enjoy a range
                                    of perks including (but not limited to) multiple towels. 
                                </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a @click="updatePage('RoomPage')" role="button" class="card-link">
                            <div class="card">
                                <img src="/images/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg" class="card-img-top img-fluid" alt="A basic hotel room">
                                <div class="card-body">
                                <h5 class="card-title">Let Room</h5>
                                <p class="card-text">
                                    For the utilitarian visitor. Why bother with scenic views when you can watch
                                    Married at First Sight on a big screen in bed? Living the dream.
                                </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import Quickbook from './Quickbook.vue'

export default {
    name: 'AccommodationPage',
    components: {
        Quickbook
    },
    methods: {
        updatePage(newPage) {
            this.$emit('update-page', newPage); // Emit event with data
        }
    }
}
</script>

<style scoped>
/* Component styles go here */
</style>