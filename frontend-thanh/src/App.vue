<script >
import Nav from './components/TheWelcome.vue';
import Card from './components/Cards.vue'
import BookDetails from './components/Book_Details.vue'
import UploadsFile from './components/UploadsFile.vue';
import Catalog_management from './components/catalog_management.vue';
export default {
  components: {
    Nav, Card, BookDetails, UploadsFile, Catalog_management
  },
}
</script>


<template>
  <div id="app">
    <Nav></Nav>
    <div class="container-lg" style="margin-top: 20px;">
      <!-- <Card></Card> -->
      <BookDetails></BookDetails>
      <!-- <UploadsFile /> -->
      <!-- <Catalog_management /> -->
    </div>

  </div>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* @media (min-width: 1024px) {
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
} */
</style>
