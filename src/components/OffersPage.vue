<template>
    <div>
        <div class="container mt-5 mb-4">
            <h1 class="display-5 dm-regular">Current offers</h1>
        </div>

        <!-- MAIN -->
        <main>
            <div class="container">
                <!-- Offer 1 -->
                <div class="card mb-5">
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
                </div>

                <!-- Offer 2 -->
                <div class="card mb-5">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body p-5 d-flex flex-column align-items-start justify-content-center">
                                <h3 class="card-title">Culinary delight package</h3>
                                <p class="card-text">
                                    Like a good feed? This overnight stay will keep your tummy
                                    full and your pockets empty. Our chefs work 36 hour days to
                                    prepare this ultimate foodie package.
                                </p>
                                <ul>
                                    <li>5kg porterhouse steak</li>
                                    <li>Stack of 7 chicken parmigianas</li>
                                    <li>Bathtub full of soup</li>
                                    <li>After dinner mint</li>
                                </ul>
                                <h5>
                                    <span class="fw-bold">$500 per person</span> - <span class="my-text-primary">1 night</span>
                                </h5>
                                <p class="card-text"><small class="text-body-secondary">Valid until Oct 2029</small></p>
                                <button type="button" class="btn my-btn-primary btn-sm me-md-auto mt-auto">CLAIM OFFER</button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="/images/jed-owen-O4wSmNb6w18-unsplash.jpg" class="fit-cover" alt="A huge spread of food">
                        </div>
                    </div>
                </div>

                <!-- Offer 3 -->
                <div class="card mb-5">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/tim-cooper-f172UzpPhJ0-unsplash.jpg" class="fit-cover" alt="A playground with slides">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-5 d-flex flex-column align-items-start justify-content-center">
                                <h3 class="card-title">Family fun fridays</h3>
                                <p class="card-text">
                                    Kick up your feet and watch the kids enjoy our massive
                                    indoor play centre.
                                </p>
                                <ul>
                                    <li>2x play centre tickets</li>
                                    <li>All you can eat kids buffet</li>
                                    <li>Unlimited drinks</li>
                                </ul>
                                <h5>
                                    <span class="fw-bold">$175</span> - <span class="my-text-primary">2 adults / 2 children</span>
                                </h5>
                                <p class="card-text"><small class="text-body-secondary">Valid until 29 January</small></p>
                                <button type="button" class="btn my-btn-primary btn-sm ms-md-auto mt-auto">CLAIM OFFER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'OffersPage'
}
</script>

<style scoped>
/* Component styles go here */
</style>