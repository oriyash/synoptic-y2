<template>
    <div class="text-light">
        <Admin v-if="admin" />
        <NoAdmin v-else />
        <button class="btn btn-success" @click="auth()">
            {{ admin ? "Log Out" : "Login" }}
        </button>
    </div>
</template>

<script>
import Admin from "@/components/Admin.vue";
import NoAdmin from "@/components/NoAdmin.vue";

export default {
    data() {
        return {
            admin: null,
        };
    },
    components: {
        Admin,
        NoAdmin,
    },
};
</script>

<style></style>
