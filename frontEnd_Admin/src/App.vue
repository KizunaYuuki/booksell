<script >
import Nav from './components/TheWelcome.vue';
import Card from './components/Cards.vue'
import BookDetails from './components/Book_Details.vue'
import UploadsFile from './components/UploadsFile.vue';
import Catalog_management from './components/catalog_management.vue';
import PromotionVue from './components/Promotion.vue';
import PromotionForm from './components/PromotionForm.vue'
import Account_Clients from './components/Account_Clients.vue';
import Book_Receipt from './components/Book_Receipt.vue';
import Order_Management from './components/Order_Management.vue';
import Receipt_List from './components/Receipt_List.vue';
import Product_Management from './components/Product_Management.vue';
import ChartsVue from './components/Charts.vue';
import Statistical from './components/Statistical.vue';
export default {
  components: {
    Nav, Card, BookDetails, UploadsFile, Catalog_management, PromotionVue, Product_Management,
    PromotionForm, Account_Clients, Book_Receipt, Order_Management, Receipt_List, ChartsVue, Statistical
  },
}
</script>


<template>
  <div id="app">
    <Nav></Nav>
    <div class="container-sm" style="margin-top: 20px; background-color: #FFFBE6 ;">
      <!-- <Product_Management /> -->
      <!-- <BookDetails></BookDetails> -->
      <!-- <UploadsFile /> -->
      <!-- <Catalog_management /> -->
      <!-- <PromotionVue /> -->
      <!-- <PromotionForm /> -->
      <!-- <Account_Clients /> -->
      <!-- <Book_Receipt /> -->
      <!-- <Order_Management /> -->
      <!-- <Receipt_List /> -->
      <!-- <ChartsVue /> -->
      <Statistical />
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
