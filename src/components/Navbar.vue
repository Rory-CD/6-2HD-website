<template>
    <nav class="navbar navbar-expand-xl py-4 px-5">

        <!-- Nav toggle -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-xl-flex mt-2 mt-xl-0" id="navbarSupportedContent"> 

            <!-- Brand -->
            <a class="col-12 col-lg-3" @click="updatePage('HomePage')" role="button">
                <div class="logo">
                    <img id="logo" src="/images/logo-light.svg" class="my-4 my-lg-2 me-lg-4" alt="Javascript Hotel Logo" width="200px">
                </div>
            </a> 

            <!-- Menu -->
            <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                <li class="nav-item">
                    <a class="nav-link" @click="updatePage('AccommodationPage')" role="button">ACCOMMODATION</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        EAT/DRINK
                    </a>
                    <ul class="dropdown-menu flat shadow">
                        <li><a class="dropdown-item" @click="updatePage('DinerPage')" role="button">The DOM Diner</a></li>
                        <li><a class="dropdown-item" @click="updatePage('BarPage')" role="button">Boolean Bar</a></li>
                    </ul>
                </li>                  
                <li class="nav-item">
                    <a class="nav-link" @click="updatePage('EventsPage')" role="button">EVENTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="updatePage('AmenitiesPage')" role="button">AMENITIES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="updatePage('OffersPage')" role="button">OFFERS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="updatePage('ContactPage')" role="button">CONTACT</a>
                </li>
            </ul>

            <!-- Search / Book -->
            <div class="d-lg-flex col-lg-3 justify-content-lg-end">

                <!-- Search bar (mobile) -->
                <form class="search-bar-mob d-flex" role="search">
                    <input type="search" class="form-control flat" placeholder="Search..." aria-label="Search">
                    <button type="button" class="btn my-btn-primary">GO</button>
                </form>

                <!-- Search icon (Large screens only) -->
                <div class="dropdown me-4 search-dropdown">
                    <button class="transparent p-2 dropdown-toggle text-nav" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31.121 31.121">
                            <g data-name="Group 1" transform="translate(-365 116)">
                                <g class="ellipse" data-name="Ellipse 1" transform="translate(365 -116)" fill="none" stroke="#fff" stroke-width="5">
                                <circle cx="12.5" cy="12.5" r="12.5" stroke="none"/>
                                <circle cx="12.5" cy="12.5" r="10" fill="none"/>
                                </g>
                                <line class="line" data-name="Line 1" x2="10" y2="10" transform="translate(384 -97)" fill="none" stroke="#fff" stroke-width="6"/>
                            </g>
                            </svg>                                      
                    </button>

                    <!-- Search dropdown -->
                    <form class="dropdown-menu dropdown-menu-end transparent search-bar" role="search">
                        <div class="d-flex">
                            <input type="search" class="form-control flat" placeholder="Search..." aria-label="Search">
                            <button type="button" class="btn my-btn-primary">GO</button>
                        </div>
                    </form>
                </div>
                
                <!-- Book button -->
                <a @click="updatePage('BookPage')" role="button" class="btn my-btn-primary book-button">BOOK</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
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