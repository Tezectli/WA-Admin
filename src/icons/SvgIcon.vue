<template>
  <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName">
    </use>
  </svg>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRefs,
  onMounted,
  computed
} from "@vue/composition-api";
export default {
  name: "svgIcon",
  props: {
    iconClass: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    // console.log(props.iconClass);
    // console.log(props.className);
    // const msg = ref("测试测试！！！");
    // const count = ref(10);
    //计算属性得出最终结果
    const iconName = computed(() => `#icon-${props.iconClass}`);
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      } else {
        return `svg-icon`;
      }
    });

    return {
      iconName,
      svgClass
    };
  }
};
</script>
<style lang="scss"scoped>
.svg-icon {
  //   display: flex;
  //   flex-direction: row;
  width: 1em;
  height: 1em;
  //   font-size: 15px;
  //   padding-right: 20px;
  fill: currentColor;
  color: rgb(231, 22, 22);
}
</style>