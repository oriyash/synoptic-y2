<template>
    <div class="text-dark">
        <Admin v-if="store.admin" />
        <NoAdmin v-else />
    </div>
</template>

<script>
import Admin from "@/components/Admin.vue";
import NoAdmin from "@/components/NoAdmin.vue";
import { AdminStore } from "@/store/store.js";

export default {
    data() {
        return {
            store: AdminStore(),
        };
    },
    components: {
        Admin,
        NoAdmin,
    },
};
</script>

<style></style>
