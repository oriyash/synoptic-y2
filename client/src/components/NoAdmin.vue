<template>
    <div class="container text-dark m-4 p-3">
        <h2 class="mb-1">👨🏼‍🚒 Fire Ranger Login 👨🏼‍🚒</h2>
        <section class="w-100 d-flex mt-3">
            <form style="width: 30rem" @submit.prevent="onSubmit(pword)">
                <div class="mb-3">
                    <input
                        class="form-control"
                        type="text"
                        value="Fire Ranger Admin"
                        disabled
                    />
                </div>
                <div class="mb-3">
                    <input
                        class="form-control"
                        placeholder="Admin Password"
                        type="password"
                        v-model="pword"
                    />
                </div>
                <div class="mb-3">
                    <button class="btn btn-success" type="submit">Login</button>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import { AdminStore } from "@/store/store.js";
import { mapActions } from "pinia";

export default {
    name: "NoAdmin",
    data() {
        return {
            pword: "",
        };
    },
    methods: {
        ...mapActions(AdminStore, ["onSubmit"]),
    },
};
</script>

<style scoped>
.container {
    background-color: white;
    border: solid;
    border-radius: 15px;
}

section {
    height: 20vh;
    /* justify-content: center; */
}
</style>
