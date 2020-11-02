<template>
  <transition name="slide">
    <div class="modal" v-show="show">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:void(0)" class="icon-close" @click="handleClose"/>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <!-- <slot name="footer"></slot> -->
          <div class="btn-group">
            <a href="javascript:void(0)" class="btn" @click="handleConfirm">确定</a>
            <a href="javascript:void(0)" class="btn btn-default" @click="handleCancel">取消</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型 小、中、大、表单
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框标题
    title: {
      type: String,
      default: ''
    },
    btnType: {
      type: Number,
      default: 1
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('submit')
    },
    handleCancel() {
      this.$emit('close')
    },
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/config.scss";
@import "../assets/styles/mixin.scss";
@import "../assets/styles/modal.scss";
</style>