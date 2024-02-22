<template>
  <div class="container">
    <h1>後台頁面</h1>
    <RouterLink to="/admin/items">後台產品列表</RouterLink> |
    <RouterLink to="/admin/orders">後台訂單列表</RouterLink> |
    <RouterLink to="/">回前台</RouterLink>
  </div>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;
export default {
  methods: {
    checkAdmin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)zack0111\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.post(`${VITE_URL}/api/user/check`)
        .then(() => {
          Swal.fire({
            // position: "top-end",
            icon: 'success',
            title: '驗證成功',
            showConfirmButton: false,
            timer: 1500,
          });
          // alert('驗證成功', res); // eslint-disable-line no-alert
        })
        .catch(() => {
          Swal.fire({
            // position: "top-end",
            icon: 'error',
            title: '驗證失敗',
            showConfirmButton: false,
            timer: 1500,
          });
          // alert('驗證失敗', err.response); // eslint-disable-line no-alert
          this.$router.push('/login');
        });
    },
  },
  mounted() {
    this.checkAdmin();
  },
};
</script>
