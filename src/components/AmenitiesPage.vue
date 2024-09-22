<template>
    <div>
        <div class="container mt-4">
            <h1 class="display-5 dm-regular">Amenities</h1>
        </div>

        <!-- MAIN -->
        <main>
            <div class="container">
                <!-- Major amenities -->
                <section class="row mb-5 mt-4">
                    <div class="col-lg-4">
                        <img src="/images/raining-huang-U50cEuM2LI0-unsplash.jpg" class="img-3-2" alt="An outdoor pool at night">
                    </div>
                    <div class="col-lg-6 d-flex flex-column align-items-start justify-content-center mt-4 mt-lg-0">
                        <h3>Pools galore</h3>
                        <p>
                            We hope you brought your bathers! We offer more pools than
                            any hotel between outer Melbourne and North Geelong. 12 olympic
                            sized outdoor pools, including our famous You Yangs infinity pool.
                            Not to mention 23 indoor pools, all pleasantly heated so you'll
                            never want to get out. 
                        </p>
                    </div>
                </section>
                <section class="row mb-5 mt-4">
                    <div class="col-lg-6 d-flex flex-column align-items-start justify-content-center offset-lg-2">
                        <h3>Sneak in a workout</h3>
                        <p>
                            Our 3 gyms are filled with the latest equipment and technology.
                            Motivate yourself by running from the VR zombie horde in our
                            ever-popular "power-walking dead treadmill".
                        </p>
                        <p>
                            We have a range of personal trainers on-site, including celebrity
                            trainers like Chris Hemsworth, Dwayne Johnson, and Steve Buscemi.
                        </p>
                    </div>
                    <div class="col-lg-4">
                        <img src="/images/victor-freitas-hOuJYX2K5DA-unsplash.jpg" class="img-3-2" alt="Someone lifting weights">
                    </div>
                </section>
                <section class="row mb-5 mt-4">
                    <div class="col-lg-4">
                        <img src="/images/alena-torgonskaya-3PjP-h3BEsc-unsplash.jpg" class="img-3-2" alt="Breakfast in bed">
                    </div>
                    <div class="col-lg-6 d-flex flex-column align-items-start justify-content-center mt-4 mt-lg-0">
                        <h3>Room service</h3>
                        <p>
                            We offer a full room service, with staff providing anything you
                            need, 24 hours per day (within opening hours). Our room service
                            system uses the room's AI voice recognition assistant, so please
                            ensure you don't accidentally order anything embarassing.
                        </p>
                    </div>
                </section>

                <!-- Minor amenities -->
                <section class="my-5 py-5">
                    <div class="row mb-3">
                        <div class="col-3 col-sm-2 col-lg-1 offset-lg-2">
                            <img src="/images/icon-ac.svg" class="img-fluid" alt="An icon of an air conditioner">
                        </div>
                        <div class="col-9 col-sm-10 col-lg-7 d-flex flex-column justify-content-center">
                            <h5>Full air conditioning and heating</h5>
                            <p>
                                Temperature controlled rooms will help you feel at ease
                                no matter the weather outside.
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="row mb-3">
                        <div class="col-3 col-sm-2 col-lg-1 offset-lg-2">
                            <img src="/images/icon-dog.svg" class="img-fluid" alt="An icon of a dog">
                        </div>
                        <div class="col-9 col-sm-10 col-lg-7 d-flex flex-column justify-content-center">
                            <h5>Pet friendly</h5>
                            <p>
                                Bring along as many furry friends as you need - we love pets.
                                Animal food is provided free of charge.
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="row mb-3">
                        <div class="col-3 col-sm-2 col-lg-1 offset-lg-2">
                            <img src="/images/icon-tv.svg" class="img-fluid" alt="An icon of a TV">
                        </div>
                        <div class="col-9 col-sm-10 col-lg-7 d-flex flex-column justify-content-center">
                            <h5>Television</h5>
                            <p>
                                Use the tech that's taking the world by storm - television.
                                Each room is equipped with a 99-inch OLED TV. 
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="row mb-3">
                        <div class="col-3 col-sm-2 col-lg-1 offset-lg-2">
                            <img src="/images/icon-cook.svg" class="img-fluid" alt="An icon of a stove">
                        </div>
                        <div class="col-9 col-sm-10 col-lg-7 d-flex flex-column justify-content-center">
                            <h5>Cooking facilities</h5>
                            <p>
                                Not only does each room have a kitchen, there is also
                                a communal kitchen next to pool #17.
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="row mb-3">
                        <div class="col-3 col-sm-2 col-lg-1 offset-lg-2">
                            <img src="/images/icon-safe.svg" class="img-fluid" alt="An icon of a safe">
                        </div>
                        <div class="col-9 col-sm-10 col-lg-7 d-flex flex-column justify-content-center">
                            <h5>Secure rooms</h5>
                            <p>
                                Each room is equipped with a safe, quadruple locks,
                                and a large red emergency button.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'AmenitiesPage'
}
</script>

<style scoped>
/* Component styles go here */
</style>