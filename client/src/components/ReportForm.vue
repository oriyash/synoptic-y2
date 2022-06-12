<template>
    <form @submit.prevent="onSubmit()" class="mt-4 p-5">
        <div class="mb-3">
            <h1 class="text-danger">🔥Report a Fire🔥</h1>
        </div>
        <div class="mb-3">
            <label for="desc">Description</label>
            <textarea
                class="form-control"
                id="desc"
                v-model="desc"
                rows="6"
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
        <div v-if="lat && lng" class="mb-3">
            <span class="text-dark"
                >Your location:
                <span class="text-primary">{{ lat }}, {{ lng }}</span> will also
                be sent along this report</span
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
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "ReportForm",

    data() {
        return {
            desc: "",
            GOOGLEAPI:
                "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCsDgf3V1d_9auE_rNSY_grNGHL0fTlxiM",
            warning: "",
            lat: null,
            lng: null,
        };
    },
    methods: {
        async onSubmit() {
            if (lat && lng) {
                try {
                    const res = await axios.post(
                        "http://localhost:5000/report",
                        {
                            lat: this.lat,
                            lng: this.lng,
                            desc: this.desc,
                        }
                    );
                    console.log(res);
                } catch (error) {
                    console.log(error);
                    this.warning = "Server error, try again";
                }
            } else {
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

<style>
form {
    display: block;
    width: 30%;
    border: solid;
    background-color: var(--bs-light);
    border-radius: 5px;
}

#desc {
    height: 200%;
}
</style>
