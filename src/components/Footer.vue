<template>
    <div class="footer container-fluid bg-dark text-white">
        <div class="row py-3">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <a @click="updatePage('HomePage')" role="button" class="nav-link text-white px-2">Home</a>
                </li>
                <li class="nav-item">
                    <a @click="updatePage('AccomodationPage')" role="button" class="nav-link text-white px-2">Accommodation</a>
                </li>
                <li class="nav-item">
                    <a @click="updatePage('DinerPage')" role="button" class="nav-link text-white px-2">The DOM Diner</a>
                </li>
                <li class="nav-item">
                    <a @click="updatePage('BarPage')" role="button" class="nav-link text-white px-2">Boolean Bar</a>
                </li>
                <li class="nav-item">
                    <a @click="updatePage('EventsPage')" role="button" class="nav-link text-white px-2">Events</a>
                </li>
                <li class="nav-item">
                    <a @click="updatePage('AmenitiesPage')" role="button" class="nav-link text-white px-2">Amenities</a>
                </li>
                <li class="nav-item">
                    <a @click="updatePage('OffersPage')" role="button" class="nav-link text-white px-2">Offers</a>
                </li>
                <li class="nav-item">
                    <a @click="updatePage('ContactPage')" role="button" class="nav-link text-white px-2">Contact</a>
                </li>
            </ul>
            <p class="text-center">© 2024 Javascript Hotel</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
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