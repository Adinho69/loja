<template>
  <v-app id="inspire">
    <v-app-bar app color="#FFFFFF" elevation="0">
      <v-toolbar-title class="font-weight-thin">AMBER</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-avatar v-if="$store.state.logado" size="50px" color="#EEEEEE">
        <v-icon>mdi-account</v-icon>
      </v-avatar>

      <v-list-item-icon v-else>
        <v-btn plain color="blue" to="/signin">Sign In</v-btn>
        <v-btn plain color="red" to="/signup">Sign Up</v-btn>
      </v-list-item-icon>
    </v-app-bar>

    <v-main>
      <!--  -->
      <v-row class="mt-0">
        <v-col md="1" class="pa-0">
          <v-navigation-drawer class="pa-0" color="#212121" bottom>
            <v-avatar
              color="#FF0000"
              :size="70"
              class="d-block text-center mx-auto my-9"
            ></v-avatar>
            <v-list>
              <v-list-item
                :to="item.link"
                v-for="(item, i) in navBar"
                :key="i"
                class="mx-auto"
              >
                <v-icon class="mx-auto" width="20px" color="#1A237E">{{
                  item.icon
                }}</v-icon></v-list-item
              >
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col md="11" class="pa-0">
          <div class="home">
            <router-view></router-view>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  //
};
</script>

<script>
export default {
  name: "App",

  data() {
    return {
      navBar: [{ icon: "mdi-home-outline", link: "/" }],
    };
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>