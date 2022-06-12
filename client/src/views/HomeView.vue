<template>
    <div class="d-flex flex-column m-2 p-3">
        <div>
            <router-link to="/admin" class="btn btn-warning"
                >I am an admin</router-link
            >
        </div>
        <ReportForm />
    </div>
</template>

<script>
import ReportForm from "@/components/ReportForm.vue";

export default {
    data() {
        return {};
    },
    components: {
        ReportForm,
    },
};
</script>

<style>
.d-flex {
    border: solid;
    background-color: var(--bs-success);
    border-radius: 15px;
    justify-content: center;
}
</style>
