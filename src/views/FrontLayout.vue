<template>
    這是前台頁面
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><router-link to="/FrontPage">回首頁</router-link></a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/PorductsView">產品列表</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/CartView">購物車</router-link></a>
      </li>
    </ul>
  </div>
</nav>
<RouterView />
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
export default {
  components: {
    RouterView,
    RouterLink
  }
}
</script>
