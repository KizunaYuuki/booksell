<script >
import Nav from './components/TheWelcome.vue';
// import Card from './components/Cards.vue'
// import BookDetails from './components/Book_Details.vue'
// import UploadsFile from './components/UploadsFile.vue';
// import Catalog_management from './view/Catalog_Management.vue';
// import PromotionVue from './view/Promotion_Managemnet.vue';
// import PromotionForm from './components/PromotionForm.vue'
// import Account_Clients from './view/Clients_Management.vue';
// import Book_Receipt from './components/Book_Receipt.vue';
// import Order_Management from './view/Order_Management.vue';
// import Receipt_List from './view/Receipt_Management.vue';
// import Product_Management from './view/Product_Management.vue';
// import ChartsVue from './components/Charts.vue';
// import Statistical from './view/Statistical.vue';
// import TestTime from './components/testTime.vue';

import HomePage from './views/HomePage.vue';
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';
export default {
    components: {
        Nav,
        HeaderVue,
        HomePage,
        FooterVue,
        // Card, BookDetails, UploadsFile, Catalog_management, PromotionVue, Product_Management,
        // PromotionForm, Account_Clients, Book_Receipt, Order_Management, Receipt_List, ChartsVue, Statistical, TestTime
    },
}
</script>


<template>
    <div id="app">
        <!-- <Nav></Nav> -->
        <!-- <div class="container-sm" style="background-color: #FFFBE6 ;"> -->
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
        <!-- <Statistical /> -->
        <!-- <TestTime /> -->
        <!-- <router-view /> -->
        <!-- </div> -->

        <div class="bg-light">
            <header>
                <HeaderVue />
            </header>
            <main>
                <!-- <HomePage /> -->
                <router-view class="bg-light" style="background-color: #FFFBE6;" />
            </main>

            <footer>
                <FooterVue />
            </footer>
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
