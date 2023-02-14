<template>
    這是前台產品列表頁面
    <table class="table">
        <thead>
            <tr>
            <th scope="col">圖片</th>
            <th scope="col">商品名稱</th>
            <th scope="col">價格</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <td scope="row"><img :src="product.imageUrl" alt="" ></td>
            <td>{{product.title}}</td>
            <td>{{ product.price }}</td>
            <td>
                <RouterLink :to="`/PorductView/${product.id}`">訂單詳情</RouterLink>
                <button class="btn btn-primary" @click="addCart(product.id)">加到購物車</button>
            </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

const { VITE_APIPATH, VITE_API } = import.meta.env
export default {

  data () {
    return {
      products: []
    }
  },
  methods: {
    addCart (id) {
      const data = {
        data: {
          product_id: id,
          qty: 1
        }
      }
      this.$http.post(`${VITE_API}/api/${VITE_APIPATH}/cart`, data)
        .then((res) => {
          alert('成功加入購物車')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.axios.get(`${VITE_API}/api/${VITE_APIPATH}/products/all`).then((response) => {
      this.products = response.data.products
    })
  }
}
</script>

<style>
img {
    height: 100px;
    background-size: cover;
    background-position: center center;
}

td {
    width: 200px;
}
</style>
