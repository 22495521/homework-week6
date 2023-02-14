<template>
   這是前台產品細節頁面
   <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{product.category}}</td>
              <td>{{product.title}}</td>
              <td class="text-end">{{product.origin_price}}</td>
              <td class="text-end">{{product.price}}</td>
              <td>
                <span class="text-success" v-if="product.is_enabled">啟用</span>
                <span v-else>未啟用</span>
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
      id: null,
      product: {}
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_API}/api/${VITE_APIPATH}/product/${this.id}`)
        .then((res) => {
          this.product = res.data.product
        })
        .catch((error) => {
          // 失敗傳送回login
          console.log(error)
        })
    }
  },
  mounted () {
    const { id } = this.$route.params
    this.id = id
    this.getProducts()
  }
}
</script>
