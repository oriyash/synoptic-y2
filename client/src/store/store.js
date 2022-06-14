import { defineStore } from "pinia";
import axios from "axios";

export const AdminStore = defineStore("admin", {
    state: () => ({
        backend: axios.create({
            baseURL: "http://localhost:5000",
            timeout: 1000,
        }),
        admin: false,
    }),

    actions: {
        async onSubmit(pword) {
            try {
                const res = await this.backend.post("/admin", { pword: pword });

                if (res.status === 202) {
                    this.admin = true;
                } else {
                    this.admin = false;
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
});
