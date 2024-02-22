<template>
  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"
    ref="toast">
      <div class="toast-header">
        <i class="bi bi-check-circle-fill fs-4 text-success me-2"></i>
        <strong class="me-auto text-success fs-4">提示訊息</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body fw-bold fs-5">
        {{toast_message}}
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap';

export default {
  data() {
    return {
      toast: '',
      toast_message: '',
    };
  },
  methods: {
    toast_Show(Msg) {
      this.toast_message = Msg;
      this.toast.show();
    },
  },
  mounted() {
    this.toast = new Toast(this.$refs.toast);
  },
};
</script>
