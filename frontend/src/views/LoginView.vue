<template>
  <div>
    <form>
      <h1 class="border-bottom my-4">Login</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          autocomplete
          v-model="password"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="login()">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const requestBody = {
          email: this.email,
          password: this.password,
        };
        const { data } = await this.axios.post("/login", requestBody);
        console.log("GENERATED TOKEN:", data);
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", data);
        this.$router.push({
          name: "homeView",
        });
      } catch {
        alert("Authorization failed!");
      }
    },
  },
};
</script>
