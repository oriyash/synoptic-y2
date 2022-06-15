<template>
    <div class="container mt-3 p-4">
        <h1 class="text-danger mb-3">
            Here are all the currently reported fires:
        </h1>
        <div>
            <div v-for="fire in fires" :key="fire" class="a-fire mb-3 p-3">
                <span>{{ fire.desc }}</span> <br />
                <span>Fire reported at {{ fire.createdAt }}, </span>
                <span>Located at {{ fire.lat }}, {{ fire.lng }}</span> <br />
                <button class="btn btn-primary" @click="showImage(fire._id)">
                    Image
                </button>
                |
                <button
                    class="btn btn-secondary"
                    @click="showLocation(fire.lat, fire.lng)"
                >
                    Location
                </button>
                |
                <button class="btn btn-danger" @click="onDelete(fire._id)">
                    Delete
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
            this.fires = res.data.reverse();
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
        async onDelete(fireId) {
            try {
                await axios.delete(`http://localhost:5000/report/${fireId}`);
                try {
                    const res = await axios.get("http://localhost:5000/report");
                    this.fires = res.data.reverse();
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
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
    border-color: var(--bs-danger);
    border-radius: 10px;
}
</style>
