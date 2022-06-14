<template>
    <form @submit.prevent="onSubmit()" class="mt-2 p-3">
        <div class="mb-3">
            <h1 class="text-danger">🔥Report a Fire🔥</h1>
        </div>
        <div class="mb-3">
            <label for="desc">Description</label>
            <textarea
                class="form-control"
                id="desc"
                rows="6"
                name="desc"
                required
            />
        </div>
        <div class="mb-3">
            <label for="pic">Attach a picture</label><br />
            <span class="text-info mt-1">This picture is required</span>
            <input
                type="file"
                name="pic"
                id="pic"
                class="form-control"
                required
            />
        </div>
        <div class="mb-1">
            <input
                class="form-control"
                type="text"
                :value="lat ? `Latitude: ${lat}` : 'Could not get Latitude'"
                disabled
            />
        </div>
        <div class="mb-3">
            <input
                class="form-control"
                type="text"
                :value="lng ? `Longitude: ${lng}` : 'Could not get Longitude'"
                disabled
            />
        </div>
        <div v-if="lat && lng" class="mb-3">
            <span class="text-danger"
                >Your location: will also be sent along this report</span
            >
        </div>
        <div v-else class="mb-3">
            <span class="text-danger">Your location could not be aquired</span>
        </div>
        <div v-if="lat && lng" class="mb-3">
            <button class="btn btn-success" type="submit">Submit</button>
        </div>
        <div v-else class="mb-3">
            <span class="text-danger"
                >Cannot Submit without location refresh please.</span
            >
        </div>
        <div v-if="warning" class="mb-3 text-danger">{{ warning }}</div>
        <div v-if="success" class="mb-3 text-success">{{ success }}</div>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "ReportForm",

    data() {
        return {
            GOOGLEAPI:
                "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCsDgf3V1d_9auE_rNSY_grNGHL0fTlxiM",
            warning: "",
            success: "",
            lat: null,
            lng: null,
        };
    },
    methods: {
        async onSubmit() {
            if (this.lat && this.lng) {
                try {
                    const formData = new FormData(
                        document.querySelector("form")
                    );

                    formData.append("lat", this.lat);
                    formData.append("lng", this.lng);

                    const res = await axios.post(
                        "http://localhost:5000/report",
                        formData,
                        { headers: { "Content-Type": "multipart/form-data" } }
                    );

                    if (res.status === 201) {
                        this.success = "This fire was reported";
                    }
                } catch (error) {
                    console.log(error);
                    this.warning = "Server error, try again";
                }
            }
        },
    },
    async mounted() {
        try {
            const location = await axios.post(this.GOOGLEAPI);
            this.lat = location.data.location.lat;
            this.lng = location.data.location.lng;
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style scoped>
form {
    display: block;
    width: 30%;
    border: solid;
    border-color: var(--bs-success);
    background-color: var(--bs-light);
    border-radius: 5px;
}
</style>
