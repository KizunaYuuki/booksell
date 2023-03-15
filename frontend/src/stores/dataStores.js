// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    Books: [
      { id: "12as", name: 'Đất nhân tâmzzzzzzzzzzxxxxx', author: "vvv", price: 5000, gene: ["aaa", 'aab'], originalPrice: 5000, promotionTime: null, publisher: "123", tag: 'Hot', number: 5, numberPage: 100, size: "12x13", supplier: "ppp", publishing_year: "2001", des: "...", receiptDate: '2023-02-15T19:46' },
      { id: "12as1", name: 'conan2', author: "vvv12", price: 2200, gene: ["aaa"], originalPrice: 2200, promotionTime: null, publisher: "123", tag: 'New', number: 2, numberPage: 100, size: "12x13", supplier: "popo", publishing_year: "1988", des: "...", receiptDate: '2023-01-15T19:46' },
      { id: "12as13a", name: 'Doraemon', author: "zzz", price: 1000, gene: ["bbb"], originalPrice: 1000, promotionTime: null, publisher: "123", tag: 'Hot', number: 5, numberPage: 100, size: "12x13", supplier: "ppp", publishing_year: "2001", des: "...", receiptDate: '2023-03-15T19:46' },
      { id: "12asdd23", name: 'Toán', author: "vvv,qq", price: 4000, gene: ["cccc"], originalPrice: 4000, promotionTime: null, publisher: "123", tag: 'Sale', number: 5, numberPage: 100, size: "12x13", supplier: "ppp", publishing_year: "2001", des: "...", receiptDate: '2023-03-15T19:46' },
      { id: "12asdd1", name: 'Hóa', author: "vvvoo", price: 4500, gene: ["cccc"], originalPrice: 4500, promotionTime: null, publisher: "123", tag: 'Hot', number: 0, numberPage: 100, size: "12x13", supplier: "ppp", publishing_year: "2001", des: "...", receiptDate: '2023-01-15T19:46' },
      { id: "12asddg", name: 'Địa Lý', author: "vvv999", price: 4300, gene: ["cccc"], originalPrice: 4300, promotionTime: null, publisher: "123", tag: 'New', number: 0, numberPage: 100, size: "12x13", supplier: "ppp", publishing_year: "2001", des: "...", receiptDate: '2023-03-15T19:46' },
    ],
    Genes: [
      {
        id: "sdae3e",
        name: "A1",
        sub: [
          { id: "123", name: "aaa", },
          { id: "12345", name: "aab", },
        ]
      },
      {
        id: "231asđ",
        name: "B1",
        sub: [
          { id: "123b1", name: "bbb", },
          { id: "12345", name: "bbaba", },
        ]
      },
      {
        id: "s675675",
        name: "C1",
        sub: [
          { id: "123cc", name: "cccc", },
          { id: "1234c", name: "ccaabb", },
        ]
      },
    ],
    promotionList: [
      { id: "123", name: "123mmm", numberBook: 10, pricePro: 30, dateBegin: '2023-03-13T12:14', dateEnd: '2023-03-13T17:38', productList: ["12as", "12as13a"] },
      { id: "1256", name: "123mmmzzz", numberBook: 9, pricePro: 10, dateBegin: '2023-01-15T19:46', dateEnd: '2023-02-15T19:46', productList: ["12as", "12as13a"] },
      { id: "12890", name: "123mmm132", numberBook: 100, pricePro: 20, dateBegin: '2023-03-13T20:48', dateEnd: '2023-03-14T07:36', productList: ["12as", "12as13a"] },
    ],
    clientList: [
      { phone: '0101', name: 'A', address: ['12aaaaa', '22424dsacc'], sex: true, dateOfBirth: '23/2/1999', registerDate: '24/02/2022', status: true },
      { phone: '0234', name: 'B', address: ['12aaaaa', '22424dsacc'], sex: false, dateOfBirth: '23/6/1997', registerDate: '24/07/2022', status: false },
      { phone: '0101356', name: 'A', address: ['12aaaaa', '22424dsacc'], sex: true, dateOfBirth: '30/1/1999', registerDate: '24/2/2023', status: true },
      { phone: '03456', name: 'D', address: ['12aaaaa', '22424dsacc'], sex: true, dateOfBirth: '26/2/1998', registerDate: '24/2/2022', status: true },
      { phone: '05678', name: 'E', address: ['12aaaaa', '22424dsacc'], sex: true, dateOfBirth: '23/2/1999', registerDate: '24/2/2022', status: true },
      { phone: '0564421', name: 'F', address: ['12aaaaa', '22424dsacc'], sex: true, dateOfBirth: '23/2/1999', registerDate: '24/2/2022', status: true },
    ],
    supplierList: [
      { id: 'aetw12', name: 'qqqqq', address: "zzzzz", phone: "0010101" },
      { id: 'aetw124234', name: 'qqqqq1123', address: "zzzzzsadd", phone: "00101011233" },
      { id: 'aerew', name: 'qqửew213', address: "zzz234", phone: "00108098" },
      { id: 'aetsdas534', name: 'vvvv', address: "zzzzz", phone: "0979080" },
      { id: 'aetwqq23', name: 'qqqnnnn', address: "zznnn", phone: "001010199999" },
    ],
    orderConfirmation: [
      {
        id: '23awadad', orderDate: '23/11/2022', nameCustomer: 'NVA', phone: '01020230', address: '123da', orderProduct: [
          { id: '22das2', name: 'Doreamon', number: 1, price: 1000, pricePro: 900 },
          { id: '22das2ad', name: 'Doreamon2', number: 2, price: 1100, pricePro: 0 },
          { id: '22das2235', name: 'Doreamon4', number: 1, price: 1200, pricePro: 1000 },
        ], transportFee: 300, payments: 'Thanh toán khi nhận hàng', totalProduct: 4100, totalPayment: 4400, status: 'Chờ xác nhận'
      },
      {
        id: '23awa', orderDate: '23/12/2022', nameCustomer: 'NVB', phone: '01020567', address: '123dae5ye', orderProduct: [
          { id: '22das2', name: 'Conan', number: 1, price: 1000, pricePro: 900 },
          { id: '22das2ad', name: 'Doreamon', number: 2, price: 1100, pricePro: 0 },
        ], transportFee: 300, payments: 'Đã thanh toán', totalProduct: 3100, totalPayment: 3400, status: 'Chờ xác nhận'
      },
    ],
    orderList: [
      {
        id: '23awadadưer', orderDate: '23/10/2022', nameCustomer: 'NVE', phone: '01021111', address: '123da', orderProduct: [
          { id: '22das2', name: 'Doreamon', number: 1, price: 1000, pricePro: 900 },
          { id: '22das2ad', name: 'Doreamon2', number: 2, price: 1100, pricePro: 0 },
          { id: '22das2235', name: 'Doreamon4', number: 1, price: 1200, pricePro: 1000 },
        ], transportFee: 300, payments: 'Thanh toán khi nhận hàng', totalProduct: 4100, totalPayment: 4400, status: 'Đã hủy'
      },
      {
        id: '23awa', orderDate: '23/12/2022', nameCustomer: 'NVB', phone: '01020567', address: '123dae5ye', orderProduct: [
          { id: '22das2', name: 'Conan', number: 1, price: 1000, pricePro: 900 },
          { id: '22das2ad', name: 'Doreamon', number: 2, price: 1100, pricePro: 0 },
        ], transportFee: 300, payments: 'Đã thanh toán', totalProduct: 3100, totalPayment: 3400, status: 'Đã nhận hàng'
      },
    ],
    receiptList: [
      { id: '2312ada', date: '23/06/2022', supplier: 'AA', totalPrice: 200000, own: 0 },
      { id: '2312ada546', date: '23/07/2022', supplier: 'AAB', totalPrice: 300000, own: 100000 },
      { id: '2312ada213', date: '14/08/2022', supplier: 'AA', totalPrice: 500000, own: 0 },
      { id: '2312adaxvc', date: '20/09/2022', supplier: 'AACC', totalPrice: 800000, own: 500000 },

    ],
    tagList: [
      { id: '1233dasd', name: 'Hot' },
      { id: '1233dabb', name: 'New' },
      { id: '1233da443', name: 'Sale' },
    ],
  }),

  getters: {
    getBooks: state => state.Books,
    getGenes: state => state.Genes,
    getPromotionList: state => state.promotionList,
    getClientList: state => state.clientList,
    getOrderConfirmation: state => state.orderConfirmation,
    getOrderList: state => state.orderList,
    getReceiptList: state => state.receiptList,
    getTagList: state => state.tagList
  },

  actions: {
    updateBook(id) {
      this.$patch((state) => {
        for (var book of state.Books) {
          if (id === book.id) {
            book.price = book.originalPrice
            book.promotionTime = null
            break;
          }
        }
      })
    },
    updateProBook(id, price, time) {
      this.$patch((state) => {
        for (var book of state.Books) {
          if (id === book.id) {
            book.price = book.price - (book.originalPrice * price / 100);
            book.promotionTime = time
            break;
          }
        }
      })
    },
  }
})
