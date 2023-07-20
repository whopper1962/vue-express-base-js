<template>
  <div>
    <h1 class="border-bottom my-4">Users</h1>
    <button class="btn btn-primary" @click="fetchUsers()">Get users</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await this.axios.get("/users");
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
