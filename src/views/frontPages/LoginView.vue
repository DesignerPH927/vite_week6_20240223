<template>
  <!-- vue-loading-overlay -->
  <VueLoading
    :active="isLoading"
    :color="color"/>
  <div class="wrap">
    <div class="login_wrap">
      <span class="message">
        <i class="bi bi-house-fill"
        @click="backHomePages"
        ></i>
      </span>
      <div class="login_form">
        <div class="form_text">admin</div>
        <form action="#">
          <div class="form_inputBox">
            <span class="icon">
              <i class="bi bi-person-fill"></i>
            </span>
            <input type="email" class="form_input"
            placeholder=" " required maxlength="30"
            v-model="login.username">
            <span class="ok">格式正確</span>
            <label class="form_label">Email</label>
          </div>
          <div class="form_inputBox">
            <span class="icon">
              <i class="bi bi-lock-fill"></i>
            </span>
            <input type="password" class="form_input
            pwd"
            placeholder=" " required maxlength="30"
            v-model="login.password">
            <span class="eye_Icon">
              <i class="bi bi-eye-slash eyeIcon"></i>
            </span>
            <label class="form_label">Password</label>
          </div>
          <div class="btnWrap">
            <button class="btnClick" type="button"
            @click="reset">
              reset
            </button>
            <button class="btnClick" type="button"
            @click="loginAdmin">
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
      isLoading: true,
      color: '#993300',
    };
  },
  methods: {
    loginAdmin() {
      if (this.login.username === '' || this.login.password === '') {
        alert('不可以空白'); // eslint-disable-line no-alert
        return;
      }
      this.isLoading = true;
      this.$http.post(`${VITE_URL}/admin/signin`, this.login)
        .then((res) => {
          // console.log('已登入', res); // eslint-disable-line no-console
          const { token, expired } = res.data;
          document.cookie = `zack0111=${token}; expires=${new Date(expired)};`;
          this.$router.push('/admin/items');
        })
        .catch(() => {
          Swal.fire({
            // position: "top-end",
            icon: 'error',
            title: '登入失敗',
            showConfirmButton: true,
            // timer: 1500,
          });
          // alert('未登入', err.response); // eslint-disable-line no-alert
        });
    },
    reset() {
      this.login.username = '';
      this.login.password = '';
    },
    backHomePages() {
      this.$router.push('/');
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    const eyeIcon = document.querySelector('.eyeIcon');
    const pwd = document.querySelector('.pwd');
    eyeIcon.addEventListener('click', () => {
      eyeIcon.classList.toggle('bi-eye');
      if (eyeIcon.classList.toggle('bi-eye-slash')) {
        pwd.type = 'password';
      } else {
        pwd.type = 'text';
      }
    });
  },
};
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(../../assets/img/bg_02.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 30%;
}

.login_wrap {
  position: relative;
  width: 400px;
  height: 430px;
  border: 2px solid #333;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
  overflow: hidden;
  margin: 20px;
}

.message {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: #ff4a29;
  color: #fff;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
}

.login_form {
  width: 100%;
  padding: 40px;
}

.form_text {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #ff4a29;
  letter-spacing: 2px;
  text-transform: capitalize;
  -webkit-text-stroke: 1px #ffe033;
}
.form_inputBox {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #000;
  margin: 50px 0;
}

.form_input {
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: .5px;
  margin-left: 12%;
  padding-right: 25%;
}
.ok {
  position: absolute;
  bottom: -30px;
  right: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #0e3;
}

.form_label {
  position: absolute;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  color: #000;
  transition: .3s ease;
  pointer-events: none;
}

.icon {
  position: absolute;
  top: 10px;
  left: 0;
  font-size: 1.5rem;
}

.eye_Icon {
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 1.5rem;
  cursor: pointer;
}
.btnWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
}
.btnClick {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  transition: .3s ease;
}
.btnClick:hover {
  background: #000;
  color: #fff;
}

.form_input:focus ~ .form_label {
  top: -10px;
  font-size: 1rem;
}

.form_input:not(:placeholder-shown).form_input:not(:focus) ~ .form_label {
  top: -10px;
  font-size: 1rem;
  color: #ff4a29;
}

.form_input:valid ~ .ok {
  display: block;
}

.form_input:invalid ~ .ok {
  display: none;
}
</style>
