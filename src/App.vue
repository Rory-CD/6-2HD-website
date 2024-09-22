<template>
	<div>
		<div id="navigation" class="p-0">
			<Navbar @update-page="updatePage" :class=navType />
		</div>
		<HomePage v-show="currentPage === 'HomePage'" />
		<AccommodationPage @update-page="updatePage" v-show="currentPage === 'AccommodationPage'" />
		<AmenitiesPage v-show="currentPage === 'AmenitiesPage'" />
		<BarPage v-show="currentPage === 'BarPage'" />
		<BookPage v-show="currentPage === 'BookPage'" />
		<ContactPage v-show="currentPage === 'ContactPage'" />
		<DinerPage v-show="currentPage === 'DinerPage'" />
		<EventsPage v-show="currentPage === 'EventsPage'" />
		<OffersPage v-show="currentPage === 'OffersPage'" />
		<RoomPage v-show="currentPage === 'RoomPage'" />
		<Footer @update-page="updatePage" />
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AccommodationPage from './components/AccommodationPage.vue'
import AmenitiesPage from './components/AmenitiesPage.vue'
import BarPage from './components/BarPage.vue'
import BookPage from './components/BookPage.vue'
import ContactPage from './components/ContactPage.vue'
import DinerPage from './components/DinerPage.vue'
import EventsPage from './components/EventsPage.vue'
import OffersPage from './components/OffersPage.vue'
import HomePage from './components/HomePage.vue'
import RoomPage from './components/RoomPage.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	data() {
		return {
			currentPage: 'HomePage',
			// List of pages which use an overlaid nav
			overlayNavPages: ['HomePage', 'AccommodationPage', 'BarPage', 'DinerPage', 'EventsPage'],
		}
	},
	computed: {
		navType() {
			return this.overlayNavPages.includes(this.currentPage) ? 'nav-overlay' : 'nav-solid'; // Update nav style
		}
	},
	methods: {
		updatePage(newPage) {
			this.currentPage = newPage;		// Updates page based on event from child components
		}
	},
	components: {
		Navbar,
		HomePage,
		AccommodationPage,
		AmenitiesPage,
		BarPage,
		BookPage,
		ContactPage,
		DinerPage,
		EventsPage,
		OffersPage,
		RoomPage,
		Footer
	}
}
</script>

<style scoped>
/* App-specific styles go here */
</style>
