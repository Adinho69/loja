<template>
  <div class="signup">
    <v-form>
      <v-card height="">
        <v-row align-content-xl="center" justify="center">
          <v-card-title class="mx-auto">Cadastro</v-card-title>
        </v-row>
        <v-row class="mx-10" align-content-xl="center" justify="center">
          <v-col md="6">
            <v-text-field
              required
              label="Primeiro nome"
              v-model="dados.fistName"
              outlined
            />
          </v-col>

          <v-col md="6">
            <v-text-field
              label="Ultimo nome"
              v-model="dados.lastName"
              outlined
            />
          </v-col>
        </v-row>

        <v-row class="mx-10" align-content-xl="center" justify="center">
          <v-col md="12">
            <v-text-field
              required
              :rules="emailRules"
              hint="email@email.com"
              label="Email"
              v-model="cadastro.email"
              outlined
            />
          </v-col>
        </v-row>

        <v-row class="mx-10" align-content-xl="center" justify="center">
          <v-col md="6">
            <v-text-field
              hint="min. 8 caracteres(letras minusculas e maisculas, um caractere)"
              label="Senha"
              v-model="cadastro.senha1"
              type="password"
              required
              outlined
            />
          </v-col>

          <v-col md="6">
            <v-text-field
              label="Confime sua senha"
              v-model="cadastro.senha2"
              type="password"
              required
              outlined
            />
          </v-col>
        </v-row>

        <v-row class="mx-10" align-content-xl="center" justify="center">
          <v-col md="12">
            <v-text-field
              hint="xxx.xxx.xxx-xx"
              label="CPF"
              v-model="dados.cpf"
              required
              outlined
            />
          </v-col>
        </v-row>

        <v-row class="mx-10" align-content-xl="center" justify="center">
          <v-col md="8">
            <v-text-field
              hint="(DDD) 99999-9999"
              label="Telefone"
              v-model="dados.phone"
              required
              outlined
            />
          </v-col>

          <v-col md="4">
            <v-text-field
              hint="xx/xx/xxxx"
              label="Data de nascimento"
              v-model="dados.dateYer1"
              outlined
            />
          </v-col>
        </v-row>

        <v-row class="mx-10" align-content-xl="center" justify="center">
          <v-col width="113px" md="3">
            <v-btn
              @click="cadastrar"
              class="mx-auto"
              x-large
              dark
              color="#1A237E"
              >Enviar</v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </div>
</template>




<script>
import supabase from "@/services/supabase.js";

export default {
  data() {
    return {
      cadastro: {
        email: "",
        senha1: "",
        senha2: "",
      },
      dados: {
        fistName: "",
        lastName: "",
        cpf: "",
        phone: "",
        dateYer1: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      senhaRules: [
        (v) => !!v || "Senha is required",
        (v) => /.+.+/.test(v) || "Senha deve conter ao menos um caractere",
      ],
    };
  },
  methods: {
    async cadastrar() {
      if (this.cadastro.senha1 === this.cadastro.senha2) {
        let { user, error } = await supabase.auth.signUp({
          email: this.cadastro.email,
          password: this.cadastro.email,
        });
        console.log("User");
        console.log(error);
        console.log(user);

        if (error === null) {
          const { data, error1 } = await supabase.from("users").insert([
            {
              id: user.id,
              fist_name: this.dados.fistName,
              last_name: this.dados.lastName,
              date_yer: this.dados.dateYer1,
              cpf: this.dados.cpf,
              phone: this.dados.phone,
            },
          ]);
          console.log("User");
          console.log(error1);
          console.log(data);
        }
      } else {
        window.alert("Aas senhas nao sao iguais!");
      }
    },
  },
};
</script>
















<style scoped>
.signup {
  height: 80vh;
  width: 80vh;
  background-color: #eeeeee;
  margin: 30px;
  border-radius: 20px;
}
.title {
  font-size: 3.75rem;
}
</style>