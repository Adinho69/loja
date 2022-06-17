<template>
  <div class="signup">
    <v-card height="100%" class="signin-card">
      <v-col md="8">
        <v-row justify="center">
          <v-avatar size="200px" color="">
            <img
              src="https://eusouandroid.co/wp-content/uploads/2018/08/amber-ark-mobile-png.png"
            />
          </v-avatar>
        </v-row>
        <v-row justify="center">
          <v-card-title primary-title> Entrar </v-card-title>
        </v-row>
        <v-row justify="center">
          <v-text-field
            required
            outlined
            label="Email"
            placeholder="teste@email.com"
          ></v-text-field>
        </v-row>
        <v-row justify="center">
          <v-text-field
            type="password"
            required
            outlined
            label="Senha"
            placeholder="********"
          ></v-text-field>
        </v-row>

        <v-row justify="center">
          <v-btn dark x-large @click="login" color="#1A237E">Entrar</v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn text color="blue">Esqueceu sua senha?</v-btn>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    // login() {
    //   this.$store.commit("setLogado", true);
    // },
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
.signin-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>