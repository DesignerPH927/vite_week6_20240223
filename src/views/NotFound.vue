<template>
  <div class="backWrap">
    <div class="container">
      <div class="location">
        <p>404頁面,找不到網頁</p>
        <RouterLink to="/" style="font-size: 2rem;">回首頁</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.location {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  font-weight: bold;
}
.backWrap {
  widows: 100%;
  height: 100vh;
  background: url('https://img.freepik.com/free-vector/404-error-web-template-flat-style_23-2147757408.jpg?w=1500&t=st=1708499859~exp=1708500459~hmac=87841bf8ca32d94e419ab92eda39adbc08d6aba67cc68cc15fb2e2655b430022');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 35%;
}
</style>
