<template>
    <form class="row d-flex bg-my-secondary text-white justify-content-center mt-sm-4 mt-lg-0 pt-2 pb-3 px-3 shadow">
        <!-- Check in -->
        <div class="col-6 col-lg-3 mb-2 my-lg-0">
            <label for="checkin" class="form-label small">Check-in</label>
            <input type="date" id="checkin" name="checkin" class="form-control" required>
        </div>

        <!-- Check out -->
        <div class="col-6 col-lg-3 mb-2 mb-lg-0">
            <label for="checkout" class="form-label small">Check-out</label>
            <input type="date" id="checkout" name="checkout" class="form-control" required>
        </div>

        <!-- Adults -->
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

        <!-- Children -->
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

        <!-- Button -->
        <div class="col-12 col-lg-2 d-flex my-2 my-lg-0">
            <button type="button" class="btn my-btn-primary w-100 mt-auto">CHECK</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Quickbook'
}
</script>

<style scoped>
/* Component styles go here */
</style>