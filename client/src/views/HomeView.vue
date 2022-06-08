<template>
    <div class="container">
        <form @submit.prevent="onSubmit()">
            <label for="desc">Describe el fuego</label><br />
            <input type="text" v-model="desc" /> <br />
            <button type="submit" class="btn btn-success mt-1">Submit</button>
            <div>{{ warning }}</div>
        </form>
        <h2>Your location is:</h2>
        <span>{{ lat }}, {{ lng }}</span>
    </div>
</template>

<script>
import axios from "axios";

export default {
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
            try {
                const res = await axios.post("http://localhost:5000/report", {
                    lat: this.lat,
                    lng: this.lng,
                    desc: this.desc,
                });
                console.log(res);
            } catch (error) {
                console.log(error);
                this.warning = "Server error, try again";
            }
        },
    },
    async mounted() {
        try {
            console.log("this is runnning");
            const location = await axios.post(this.GOOGLEAPI);
            console.log(location);
            this.lat = location.data.location.lat;
            this.lng = location.data.location.lng;
            console.log(`${this.lat}, ${this.lng}`);
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style></style>
