<template>
    <div class="container mt-3 p-4">
        <h1 class="text-warning">Here are all the currently reported fires:</h1>
        <div>
            <div v-for="fire in fires" :key="fire" class="a-fire mb-2 p-3">
                <span>Fire reported at {{ fire.createdAt }}, </span>
                <span>Located at {{ fire.lat }}, {{ fire.lng }}</span>
                <button class="btn btn-primary" @click="showImage(fire._id)">
                    Image
                </button>
                <button
                    class="btn btn-secondary"
                    @click="showLocation(fire.lat, fire.lng)"
                >
                    Location
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Admin",

    data() {
        return { fires: null };
    },

    async mounted() {
        try {
            const res = await axios.get("http://localhost:5000/report");
            this.fires = res.data;
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        showImage(fireId) {
            window.open(`http://localhost:5000/img/${fireId}`, "_blank");
        },
        showLocation(lat, lng) {
            window.open(
                `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`
            );
        },
    },
};
</script>

<style scoped>
.container {
    background-color: #333333;
    border: solid;
    border-color: white;
    border-radius: 15px;
}

.a-fire {
    background-color: var(--bs-light);
    border: solid;
}
</style>
