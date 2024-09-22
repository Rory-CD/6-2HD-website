<template>
    <div>
        <!-- HEADER -->
        <header class="hero" style="background-image: url(/images/nils-stahl-BCkLxilDvJU-unsplash.jpg)">
            <div class="container-fluid h-100 d-flex flex-column overlay">
                <!-- Text container -->
                <div class="row d-flex flex-grow-1 align-items-center justify-content-center">
                    <div class="col-sm-8 col-xl-6 mx-auto text-center py-4 mt-4">
                        <h1 class="display-3 text-white pb-2 dm-regular">Events</h1>
                        <button type="button" class="btn my-btn-primary">ENQUIRE NOW</button>
                    </div>
                </div>
            </div>
        </header>

        <!-- MAIN -->
        <main>
            <div class="container">
                <!-- General info -->
                <section class="row g-3 my-2 my-lg-5">
                    <div class="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                        <h3 class="my-3">For any occasion</h3>
                        <p>
                            Finding a suitable event space can be difficult. Perhaps the dance
                            floor isn't large enough, the ceiling is too spherical, or the wait
                            staff are overly attentive. Here at the Javascript Hotel we have
                            solutions for every style of event, with a wide range of spaces,
                            themes, and facilities.
                        </p>
                    </div>
                    <div class="col-lg-3">
                        <img src="/images/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg" class="img-1-1" alt="A busy convention">
                    </div>
                    <div class="col-lg-3">
                        <img src="/images/axville-5WrxWltrCTg-unsplash.jpg" class="img-1-1" alt="A party with colourful lights">
                    </div>
                </section>

                <!-- Corporate events -->
                <section class="row pt-3">
                    <div class="col-12">
                        <h3 class="my-4">Corporate events</h3>
                    </div>
                    <div class="col-lg-4">
                        <img src="/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.jpg" class="img-3-2" alt="A business presentation">
                    </div>
                    <div class="col-lg-6 d-flex flex-column align-items-start justify-content-center mt-3 mt-lg-0">
                        <p>
                            Who says corporate events have to be boring? Our wait staff is
                            comprised of former Cirque Du Soleil performers, so you can enjoy
                            watching your boss get thrown a gourmet cocktail frankfurt from a
                            juggler walking atop a tightrope.
                        </p>
                        <p>
                            Need something more traditional? Our extensive range of outdated
                            projectors is bound to excite Powerpoint enthusiasts. Enjoy some
                            tepid bottled water straight from the mighty Barwon.
                        </p>
                    </div>
                </section>

                <!-- Private events -->
                <section class="row pt-3 my-lg-5">
                    <div class="col-lg-6 offset-lg-2 d-flex flex-column align-items-start justify-content-center">
                        <h3 class="my-3">Private events</h3>
                        <p>
                            Our event spaces are big enough to house even the mightiest wedding
                            reception. We offer a range of impractical but impressive displays
                            such as chocolate fountains, ice sculptures, VR wedding immersion
                            technology, and cakes made with fondant. 
                        </p>
                        <p>
                            Celebrate with friends and family here in the cultural heartland of
                            Victoria - Lara.
                        </p>
                    </div>
                    <div class="col-lg-4">
                        <img src="/images/al-elmes-ULHxWq8reao-unsplash.jpg" class="img-3-2" alt="People toasting at a private function">
                    </div>
                </section>

                <!-- Venues -->
                <section class="row py-5 my-lg-5">
                    <div class="col-12">
                        <h3 class="my-4">Spaces</h3>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="card">
                            <img src="/images/tommy-kwak-Ta3OhYMKCvA-unsplash.jpg" class="card-img-top img-3-2" alt="An empty event space with a large mirror">
                            <div class="card-body">
                                <h5 class="card-title">Studio 55</h5>
                                <p class="card-text">
                                    An artist's haven - the mirrored wall in this space lets
                                    you watch yourself looking awkward.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="card">
                            <img src="/images/gene-gallin-rm8xmllWShE-unsplash.jpg" class="card-img-top img-3-2" alt="An auditorium">
                            <div class="card-body">
                                <h5 class="card-title">The Auditorium</h5>
                                <p class="card-text">
                                    We built an entire auditorium underneath the hotel. Why?
                                    Because we can. And now you can enjoy it too.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="card">
                            <img src="/images/lan-deng-xRYWxfiQ0ag-unsplash.jpg" class="card-img-top img-3-2" alt="A large empty space with a big window">
                            <div class="card-body">
                                <h5 class="card-title">Windowpia</h5>
                                <p class="card-text">
                                    With its light and breezy atmosphere, Windowpia is the
                                    perfect space for a yoga convention, or a press conference.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Enquiry button -->
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn my-btn-primary mb-5">ENQUIRE NOW</button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'EventsPage'
}
</script>

<style scoped>
/* Component styles go here */
</style>