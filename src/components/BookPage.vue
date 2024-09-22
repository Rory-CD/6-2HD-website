<template>
    <div>
        <div class="container mt-5">
            <h1 class="display-5 dm-regular">Booking</h1>
        </div>

        <!-- MAIN -->
        <main>
            <div class="container">
                <div class="row my-5">
                    <div class="col-xl-10 offset-xl-1">
                        <h4 id="book-heading" class="mb-4">Find available rooms</h4>
                        <div class="row mb-3">
                            <div class="col-12">
                                <!-- Progress bar -->
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div id="progress-bar" class="progress-bar bg-my-primary" style="width: 25%"></div>
                                </div>    
                            </div>
                        </div>
                        
                        <!-- Booking form -->
                        <form id="booking-form" novalidate>
                            <!-- Room selection -->
                            <div id="book-select-room">
                                <!-- Filter -->
                                <div class="row d-flex bg-light justify-content-center pt-2 pb-3 px-3 shadow">
                                    <div class="col-6 col-lg-3 mb-4 mb-lg-0">
                                        <label for="checkin" class="form-label small">Check-in</label>
                                        <input type="date" id="checkin" name="checkin" class="form-control" required>
                                    </div>
                                    <div class="col-6 col-lg-3 mb-4 mb-lg-0">
                                        <label for="checkout" class="form-label small">Check-out</label>
                                        <input type="date" id="checkout" name="checkout" class="form-control" required>
                                    </div>
                                    <div class="col-6 col-lg-2 mb-4 mb-lg-0">  
                                        <label for="adults" class="form-label small">Adults</label>
                                        <select id="adults" name="adults" class="form-select w-100" aria-label="Default select example">
                                            <option disabled selected>-</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                    <div class="col-6 col-lg-2 mb-4 mb-lg-0">
                                        <label for="children" class="form-label small">Children</label>
                                        <select id="children" name="children" class="form-select w-100" aria-label="Default select example">
                                            <option disabled selected>-</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-2 d-flex my-2 my-lg-0">
                                        <button type="button" class="btn my-btn-primary w-100 mt-auto">CHECK</button>
                                    </div>
                                </div>

                                <!-- Results -->
                                <section>
                                    <div class="card my-5">
                                        <div class="row g-0">
                                            <div class="col-md-5">
                                                <img src="/images/reisetopia-aI6Su7Mu9Ro-unsplash.jpg" class="fit-cover" alt="A warm hotel room">
                                            </div>
                                            <div class="col-md-7">
                                                <div class="card-body p-5 h-100 d-flex flex-column align-items-start justify-content-center">
                                                    <h5 class="card-title">JSON Suite</h5>
                                                    <h5>
                                                        <span class="fw-bold">$250</span> - <span class="my-text-primary">5 nights</span>
                                                    </h5>
                                                    <p class="card-text">
                                                        A favourite of many patrons, this suite is both prestigous and soothing.
                                                        Many who stay here claim to love the cozy feel, but we know the primary draw
                                                        is the oversized tassles.
                                                    </p>
                                                    <div class="d-flex pt-3 ms-md-auto mt-auto">
                                                        <button type="button" class="btn btn-sm my-btn-secondary me-3">ROOM DETAILS</button>
                                                        <button type="button" class="btn btn-sm my-btn-primary">SELECT ROOM</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card my-5">
                                        <div class="row g-0">
                                            <div class="col-md-5">
                                                <img src="/images/ish-consul-ccKvfKSKH-k-unsplash.jpg" class="fit-cover" alt="A hotel room with a view">
                                            </div>
                                            <div class="col-md-7">
                                                <div class="card-body p-5 h-100 d-flex flex-column align-items-start justify-content-center">
                                                    <h5 class="card-title">Script room</h5>
                                                    <h5>
                                                        <span class="fw-bold">$200</span> - <span class="my-text-primary">5 nights</span>
                                                    </h5>
                                                    <p class="card-text">
                                                        Ever wanted to stay in a room overlooking the majestic and breathtaking You
                                                        Yangs? Of course you have. Visitors staying in this room will enjoy a range
                                                        of perks including (but not limited to) multiple towels.
                                                    </p>
                                                    <div class="d-flex pt-3 ms-md-auto mt-auto">
                                                        <button type="button" class="btn btn-sm my-btn-secondary me-3">ROOM DETAILS</button>
                                                        <button type="button" class="btn btn-sm my-btn-primary">SELECT ROOM</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card my-5">
                                        <div class="row g-0">
                                            <div class="col-md-5">
                                                <img src="/images/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg" class="fit-cover" alt="A basic hotel room">
                                            </div>
                                            <div class="col-md-7">
                                                <div class="card-body p-5 h-100 d-flex flex-column align-items-start justify-content-center">
                                                    <h5 class="card-title">Let room</h5>
                                                    <h5>
                                                        <span class="fw-bold">$190</span> - <span class="my-text-primary">5 nights</span>
                                                    </h5>
                                                    <p class="card-text">
                                                        For the utilitarian visitor. Why bother with scenic views when you can watch
                                                        Married at First Sight on a big screen in bed? Living the dream.
                                                    </p>
                                                    <div class="d-flex pt-3 ms-md-auto mt-auto">
                                                        <button type="button" class="btn btn-sm my-btn-secondary me-3">ROOM DETAILS</button>
                                                        <button type="button" class="btn btn-sm my-btn-primary">SELECT ROOM</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            
                            <!-- Contact details -->
                            <div id="book-contact-details" class="row g-3 d-none">
                                <!-- Name -->
                                <div class="col-md-6">
                                    <label for="fname" class="form-label">First name</label>
                                    <input type="text" id="fname" name="fname" class="form-control" placeholder="Jane" required>
                                    <!-- Validation message -->
                                    <div id="fname-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                                <div class="col-md-6">
                                    <label for="lname" class="form-label">Last name</label>
                                    <input type="text" id="lname" name="lname" class="form-control" placeholder="Doe" required>
                                    <!-- Validation message -->
                                    <div id="lname-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>

                                <!-- Email -->
                                <div class="col-lg-4">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" id="email" name="email" class="form-control" placeholder="jane@domain.com" required>
                                    <!-- Validation message -->
                                    <div id="email-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>

                                <!-- Phone -->
                                <div class="col-md-6 col-lg-4">
                                    <label for="phone" class="form-label">Phone <span class="text-body-secondary">(Optional)</span></label>
                                    <input type="tel" id="phone" name="phone" class="form-control" placeholder="+61 xxx xxx xxx">
                                    <!-- Validation message -->
                                    <div id="phone-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <label for="mob" class="form-label">Mobile <span class="text-body-secondary">(Optional)</span></label>
                                    <input type="tel" id="mob" name="mob" class="form-control" placeholder="+61 xxx xxx xxx" pattern="^(?:04\d{8}|\+614\d{8})\s*$">
                                    <!-- Validation message -->
                                    <div id="mob-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>

                                <!-- Location -->
                                <div class="col-12">
                                    <label for="addr1" class="form-label">Address</label>
                                    <input type="text" id="addr1" name="addr1" class="form-control" placeholder="1234 Main St" required>
                                    <!-- Validation message -->
                                    <div id="addr1-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                                <div class="col-12">
                                    <label for="addr2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                                    <input type="text" id="addr2" name="addr2" class="form-control" placeholder="Apartment, studio, or floor">
                                    <!-- Validation message -->
                                    <div id="addr2-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                                <div class="col-md-6">
                                    <label for="city" class="form-label">City</label>
                                    <input type="text" id="city" name="city" class="form-control" placeholder="Shelbyville" required>
                                    <!-- Validation message -->
                                    <div id="city-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <label for="state" class="form-label">State</label>
                                    <select id="state" name="state" class="form-select" required>
                                        <option value="" disabled selected>Choose...</option>
                                        <option value="VIC">VIC</option>
                                        <option value="NSW">NSW</option>
                                        <option value="QLD">QLD</option>
                                        <option value="NT">NT</option>
                                        <option value="SA">SA</option>
                                        <option value="WA">WA</option>
                                        <option value="ACT">ACT</option>
                                        <option value="TAS">TAS</option>
                                    </select>
                                    <!-- Validation message -->
                                    <div id="state-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <label for="postcode" class="form-label">Postcode</label>
                                    <input type="number" id="postcode" name="postcode" class="form-control" required>
                                    <!-- Validation message -->
                                    <div id="postcode-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                            </div>
                            
                            <!-- Payment -->
                            <div id="book-payment" class="row gy-3 d-none">
                                <div class="col-lg-5">
                                    <label for="cc-name" class="form-label">Name on card</label>
                                    <input type="text" class="form-control" id="cc-name" placeholder="Jane Doe" required>
                                    <small class="text-body-secondary">Full name as displayed on card</small>
                                    <!-- Validation message -->
                                    <div id="cc-name-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                    
                                <div class="col-lg-4">
                                    <label for="cc-number" class="form-label">Credit card number</label>
                                    <input type="text" class="form-control" id="cc-number" placeholder="" required>
                                    <!-- Validation message -->
                                    <div id="cc-number-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                    
                                <div class="col-6 col-lg-2">
                                    <label for="cc-expiration" class="form-label">Expiration</label>
                                    <input type="text" class="form-control" id="cc-expiration" placeholder="XX/XX" required>
                                    <!-- Validation message -->
                                    <div id="cc-expiration-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                    
                                <div class="col-6 col-lg-1">
                                    <label for="cc-cvv" class="form-label">CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" placeholder="XXX" required>
                                    <!-- Validation message -->
                                    <div id="cc-cvv-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                </div>
                            </div>

                            <!-- Confirmation -->
                            <div id="book-confirm" class="row g-3 d-none">
                                <div class="col">
                                    <h4>Booking confirmed! Thank you</h4>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="row mt-5">
                                <div class="col-6 p-3">
                                    <button type="button" id="form-prev-btn" class="btn my-btn-secondary d-none w-100" onclick="changePage('prev')">BACK</button>
                                </div>
                                <div class="col-6 p-3">
                                    <button type="button" id="form-next-btn" href="#header" class="btn my-btn-primary w-100" onclick="changePage('next')">CONTINUE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'BookPage'
}
</script>

<style scoped>
/* Component styles go here */
</style>