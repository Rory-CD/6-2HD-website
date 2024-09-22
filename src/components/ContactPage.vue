<template>
    <div>
        <div class="container mt-5">
            <h1 class="display-5 dm-regular">Contact Us</h1>
        </div>

        <!-- MAIN -->
        <main>
            <div class="container">
                <section class="row my-5">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="row">
                            <div class="col-lg-6 d-flex flex-column">
                                <!-- Google Maps Embed -->
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.188592590357!2d144.4109441514204!3d-37.96609458997087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad41fbd10a8b4c9%3A0xa194d6a66fda350e!2s20%20Branch%20Rd%2C%20Lara%20VIC%203212!5e0!3m2!1sen!2sau!4v1725457839000!5m2!1sen!2sau"
                                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <p class="my-4">
                                    <strong>20 Branch Rd, Lara VIC 3212</strong><br>
                                    Ph 1300 555 555<br>
                                    contact@javascripthotel.com<br>
                                </p>
                            </div>
                            <!-- Contact form -->
                            <div class="col-lg-6">
                                <form id="contact-form" novalidate>
                                    <!-- Name -->
                                    <div class="col-12 mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" id="name" name="name" class="form-control" placeholder="Your name" required>
                                        <!-- Validation message -->
                                        <div id="name-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                    </div>

                                    <!-- Email -->
                                    <div class="col-12 mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" id="email" name="email" class="form-control" placeholder="you@domain.com" required>
                                        <!-- Validation message -->
                                        <div id="email-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                    </div>

                                    <!-- Message -->
                                    <div class="col-12 mb-5">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea id="message" name="message" class="form-control" placeholder="Your message" cols="40" rows="4" required></textarea>
                                        <!-- Validation message -->
                                        <div id="message-msg" class="col d-flex align-items-center validation-msg mt-1"></div>
                                    </div>

                                    <div class="col-12 mb-3">
                                        <input id="submitButton" class="btn my-btn-primary w-100" type="submit" onclick="validateContactForm(event)" value="SEND">
                                    </div>
                                </form>
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
    name: 'ContactPage'
}
</script>

<style scoped>
/* Component styles go here */
</style>