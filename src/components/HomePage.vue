<template>
    <div>
        <!-- HEADER -->
        <header class="hero" style="background-image: url(/images/rod-long-2P_ifaetDm0-unsplash.jpg)">
            <div class="container-fluid h-100 d-flex flex-column overlay">
                <!-- Text container -->
                <div class="row d-flex flex-grow-1 align-items-center justify-content-center">
                    <div class="col-sm-8 col-xl-6 mx-auto text-center py-4">
                        <h1 class="display-3 text-white pb-2 dm-regular text-shadow">Stay with style</h1>
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
                <!-- General info -->
                <section class="row g-3 my-5">
                    <div class="col-lg-4 d-flex flex-column align-items-start justify-content-center">
                        <h3 class="my-3">A hotel for all types</h3>
                        <p>
                            Nestled at the foot of the majestic and world famous You Yangs, the Javascript Hotel
                            offers a myriad of delights. From our 17 heated pools, to our 600sqm gym, you will be
                            in awe of our facilities. We have modern and stylish rooms, each boasting a large
                            fridge full of overpriced chocolate bars. Just a hop, skip, and jump away from the
                            bustling metropolis known as Lara, there is no shortage of wild activities to partake
                            in, from the Grand Lakes Estate Playground, to the local nursery.
                        </p>
                    </div>
                    <div class="col-lg-4 d-flex align-items-center">
                        <img src="/images/sasha-kaunas-67-sOi7mVIk-unsplash.jpg" class="img-3-2 img-overlap-l" alt="An inviting hotel room">
                    </div>
                    <div class="col-lg-4 d-flex align-items-center">
                        <img src="/images/humphrey-muleba-1zz3j8ZwNHQ-unsplash.jpg" class="img-3-2 img-overlap-r" alt="An outdoor pool at night">
                    </div>
                </section>

                <!-- Eat -->
                <section class="row pt-3">
                    <div class="col-12">
                        <h3 class="my-4">Culinary delights</h3>
                    </div>
                    <div class="col-lg-4">
                        <img src="/images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" class="img-3-2" alt="A woman enjoying a salad">
                    </div>
                    <div class="col-lg-6 d-flex flex-column align-items-start justify-content-center mt-4 mt-lg-0">
                        <p>
                            Whether it's breakfast, second breakfast or a midnight snack (prior to closing time),
                            the DOM Diner has you covered. Our chefs are personally trained by Gordon Ramsay,
                            drawing inspiration from his exceptional people skills and talent for sandwich making.
                            Our expansive menu offers 23 different types of chicken, in addition to three
                            different colours of capsicum.
                        </p>
                    </div>
                </section>

                <!-- Drink -->
                <section class="row pt-3 my-5">
                    <div class="col-lg-6 offset-lg-2 d-flex flex-column align-items-start justify-content-center">
                        <h3 class="my-3">Drinks all round</h3>
                        <p>
                            Every visitor to the Javascript Hotel receives a complimentary fishbowl margherita
                            and novelty hat. Our bartenders put on an extraordinary show, each trained by the
                            best talent in the greater Geelong region. When you come to the Boolean Bar, it's
                            more than just a place to drink, it's an experience.
                        </p>
                    </div>
                    <div class="col-lg-4">
                        <img src="/images/kobby-mendez-xBFTjrMIC0c-unsplash.jpg" class="img-3-2" alt="Three cocktails on a bar">
                    </div>
                </section>

                <!-- Offer -->
                <section class="card my-5">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/pablo-heimplatz-OSboZGvoEz4-unsplash.jpg" class="fit-cover" alt="A couple holding hands">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-5 d-flex flex-column align-items-start justify-content-center">
                                <h3 class="card-title">Couples retreat</h3>
                                <p class="card-text">
                                    Enjoy a relaxed weekend away together in our honeymoon suite,
                                    with extended room service options and a complimentary bottle
                                    of champagne.
                                </p>
                                <h5>
                                    <span class="fw-bold">$300</span> - <span class="my-text-primary">2 nights / 2 people</span>
                                </h5>
                                <p class="card-text"><small class="text-body-secondary">Valid from 15 September - 30 December</small></p>
                                <button type="button" class="btn my-btn-primary btn-sm ms-md-auto mt-auto">CLAIM OFFER</button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Amenities -->
                <section class="my-5 py-5">
                    <h3 class="text-center mb-5">Amenities</h3>
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
import Quickbook from './Quickbook.vue'

export default {
    name: 'HomePage',
    components: {
        Quickbook
    }
}
</script>

<style scoped>
/* Component styles go here */
</style>