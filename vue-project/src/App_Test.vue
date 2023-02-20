
<script>
import axios from 'axios'

export default {
  data() {
    return {
      postData: {
        adminname: '',
        password: '',
      }
    }
  },
  methods: {
  	createPost() {
		axios
		  .post('http://localhost:3000/admin/auth/login', this.postData)
		  .then((response) => console.log('Logined'))
	}
  }
}
</script>

<template>
  <section>
    <form @submit.prevent="createPost">
      <div>
        <label for="adminname">Name: </label>
        <input type="text" id="adminname" v-model="postData.adminname">
      </div>
      <div>
        <label for="password">Password </label>
        <input type="password" id="password" v-model="postData.password">
      </div>
      <button>LOgin</button>
    </form>
  </section>
</template>





<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

/* Practice */
.red {
  color:red;
}

#container {
  
}

.wrapper {

}
</style>
