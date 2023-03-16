<template>
    <div class="row">
        <div class="leftMenu col-sm-2" id="jobMenu">
            <ul>
                <li ng-click="Tile" class="Tile">
                    <p>TÀI KHOẢN</p>
                </li>
                <li v-for="(item, index) in items" :key="index" @click="selectItem(index)" :class="{red: index === selectedIndex}">{{ item }}</li>
            </ul>
        </div>
        <div v-show="selectedIndex === 0" class=" col-sm">Thông tin tài khoản
        <Info/>
        </div>
        <div v-show="selectedIndex === 1" class="col-sm" >
          <Address/>
        </div>
        
        <div v-show="selectedIndex === 2" class="col-sm">Đơn hàng của tôi
            <Order/>
        </div>
        
    </div>
       

</template>


  
<script>

  import Info from "../components/Info.vue";
  import Order from "../components/Order.vue";
  import Address from "./AddressAcc.vue";

  export default {
    components: {
    Info,
    Order,
    Address
},
    data() {
      return {
        items: ["Thông tin tài khoản", "Sổ địa chỉ", "Đơn hàng của tôi"],
        selectedIndex: 0,
      };
    },
    methods: {
      selectItem(index) {
        this.selectedIndex = index;
      }
    }
  };
</script>
<style>
    
    .Tile{
        color: red;
        pointer-events: none;
        font-weight: bold;
    }
    .leftMenu {
        display: block;
        text-align: center;
        float: left;
        height: auto;
        
        
        
    
    }

    .leftMenu ul {
        margin-top: 0;
        list-style: none;
        padding: 0;
    }

    .leftMenu li {
        text-align: left;
        border-bottom: 1px solid #58626B;
        padding-bottom: 18px;
        padding-top: 18px;
        cursor: pointer;
        font-size: 14px;
    }

    .leftMenu li:hover {
        background-color: #5d9eca;
    }

    .leftMenu li p {
        margin: 0;
        
    }
    .red {
        color: red;
    }
</style>
  
