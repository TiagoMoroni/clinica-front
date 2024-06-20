<template>
    <div class="container">
        <v-btn @click="$router.push('home')" style="border-radius: 13px" width="100" class="ml-10 mb-4 mt-n4 align-self-start" flat>
            Menu
        </v-btn>
        <v-card width="95%" height="85%" color="white" class="mx-auto">
            <v-data-table :items="lstPatient"></v-data-table>
        </v-card>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from 'vuex';

export default defineComponent({
    name: "PatientList",
    data: () => ({}),
    computed: {
        ...mapState('patient', ['lstPatient']),
    },
    methods: {
        ...mapActions('patient', ['listAll']),
    },
    async mounted() {
        await this.listAll();
    }
});
</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #58af9b;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>