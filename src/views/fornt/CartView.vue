<template>
    這是前台購物車頁面
    <div class="container">
        <table class="table align-middle">
                <thead>
                  <tr>
                    <th></th>
                    <th>品名</th>
                    <th style="width: 150px">數量/單位</th>
                    <th>單價</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="cart.carts">
                    <tr v-for="item in cart.carts " :key="item+'1211'">
                      <td>
                        <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCart(item.id)">
                          <i class="fas fa-spinner fa-pulse"></i>
                          x
                        </button>
                      </td>
                      <td>
                        {{ item.product.category }}
                      </td>
                      <td>
                        <div class="input-group input-group-sm">
                          <div class="input-group mb-3">
                            <input
                                 min="1" type="number" class="form-control" v-model="item.qty" @change="changeItemQty(item)">
                            <span class="input-group-text" id="basic-addon2">{{  item.product.unit  }}</span>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        {{ item.product.price }}
                      </td>
                    </tr>
                  </template>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-end">總計</td>
                    <td class="text-end">{{cart.total }}</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end text-success">折扣價</td>
                    <td class="text-end text-success">{{ cart.final_total }}</td>
                  </tr>
                </tfoot>
              </table>

    </div>
</template>

<script>
const { VITE_APIPATH, VITE_API } = import.meta.env
export default {

  data () {
    return {
      cart: {
        carts: ''
      }
    }
  },
  methods: {
    getCartData () {
      this.$http.get(`${VITE_API}/api/${VITE_APIPATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteCart (id) {
      this.$http.delete(`${VITE_API}/api/${VITE_APIPATH}/cart/${id}`)
        .then((res) => {
          this.getCartData()
          alert('刪除產品')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    changeItemQty (item) {
      const { id, qty } = item

      const data = {
        data: {
          product_id: item.product_id,
          qty
        }
      }
      this.$http.put(`${VITE_API}/api/${VITE_APIPATH}/cart/${id}`, data)
        .then((res) => {
          this.getCartData()
          alert('更新數量')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getCartData()
  }

}
</script>
