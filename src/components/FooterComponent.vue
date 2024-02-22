<template>
  <nav class="navbar navbar-expand-lg bg-color">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Week6</a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link">登入後台</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.bg-color{
  background: #993300 !important;
}
.nav-link {
  color: #fff !important;
}
</style>
