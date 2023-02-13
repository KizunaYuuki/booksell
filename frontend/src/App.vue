<!-- <script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/admin/manage/user')
      .then((response) => {
        this.posts = response.data
        console.log(this.posts)
      })
  }
}
</script> -->


<!-- <template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post._id }} {{ post.phoneNumber }}</h2>
    <p>{{ post.address[0].description }}</p>
  </div>
</template> -->

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postData: {
        firstname: '',
        phoneNumber: '',
        password: '',
      }
    }
  },
  methods: {
  	createPost() {
		axios
		  .post('http://localhost:3000/user/register', this.postData)
		  .then((response) => console.log(response))
	}
  }
}
</script>

<template>
  <section>
    <form @submit.prevent="createPost">
      <div>
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" v-model="postData.firstname">
      </div>
      <div>
        <label for="phoneNumber">phoneNumber: </label>
        <input type="text" id="phoneNumber" v-model="postData.phoneNumber">
      </div>
      <div>
        <label for="password">Password </label>
        <input type="password" id="password" v-model="postData.password">
      </div>
      <button>Create Post</button>
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
</style>
