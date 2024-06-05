<template>
    <div class="container">
        <v-btn
            style="border-radius: 13px;"
            width="100"
            class="ml-10 mb-4 mt-n4 align-self-start"
            flat
        >
            Menu
        </v-btn>
        <v-card
            width="95%"
            height="85%"
            color="white"
            class="mx-auto"
            style="border-radius: 10px;"
        >
            <div
                class="d-flex justify-center pa-3"
                style="background-color: #ECF0F1; font-size: 30px;"
            >
                Cadastro Paciente
            </div>
            
            <v-text-field
                label="Nome Completo"
                class="ml-16 mr-16 mt-10 mb-n3"
                variant="outlined"
                density="compact"
            ></v-text-field>
            <v-text-field
                label="CPF"
                class="ml-16 mr-16 mb-n3"
                variant="outlined"
                density="compact"
            ></v-text-field>
            <v-text-field
                label="Tipo Sanguínio"
                class="ml-16 mr-16 mb-n3"
                variant="outlined"
                density="compact"
            ></v-text-field>
            <v-text-field
                label="Plano de saúde"
                class="ml-16 mr-16 mb-n3"
                variant="outlined"
                density="compact"
            ></v-text-field>
            <v-text-field
                label="Telefone"
                class="ml-16 mr-16 mb-n3"
                variant="outlined"
                density="compact"
            ></v-text-field>
            <v-text-field
                label="Data de nascimento"
                class="ml-16 mr-16 mb-n3"
                variant="outlined"
                density="compact"
            ></v-text-field>
            <v-text-field
                label="Endereço"
                class="ml-16 mr-16"
                variant="outlined"
                density="compact"
            ></v-text-field>
            <v-btn
            style="border-radius: 13px;"
            class="d-flex ml-10 mt-3"
            color="#58AF9B"
            flat
            >
                Cadastrar Paciente
            </v-btn>
        </v-card>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: 'PatientView',
    data: () => ({

    }),
    computed: {

    },
    methods: {

    }
});
</script>
  
<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #58AF9B;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
  