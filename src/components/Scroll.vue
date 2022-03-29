<template>
  <div class="scroll">
    <div
      ref="controller"
      class="scroll__controller"
      :style="{
        height: controller_height + 'px',
        top: controller_position + 'px',
      }"
    ></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "@vue/composition-api";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = require("@/store").default;
    const controller_height = ref(0);
    const controller_position = ref(0);

    const controller = ref(null);

    let scroll_state = {
      prev_pos: 0,
      current_pos: 0,
      active: false,
      current_delta: 0,
      touches: {
        prev: 0,
        current_pos: 0,
      },
    };

    let setUpTouchEventListeners = () => {
      window.addEventListener("touchstart", (e) => {
        scroll_state.touches.current_pos = e.touches[0].clientY;
      });

      window.addEventListener("touchmove", (e) => {
        scroll_state.touches.prev = scroll_state.touches.current_pos;
        scroll_state.touches.current_pos = e.touches[0].clientY;

        store.commit("scroll/updateScrollAnimToPosition", {
          delta: scroll_state.touches.prev - scroll_state.touches.current_pos,
        });
      });

      window.addEventListener("touchend", (e) => {
        scroll_state.touches.prev = 0;
        scroll_state.touches.current_pos = 0;
      });

      window.addEventListener("touchcancel", (e) => {
        scroll_state.touches.prev = 0;
        scroll_state.touches.current_pos = 0;
      });
    };

    let setUpControllerEventListeners = () => {
      let _controller = controller.value;

      _controller.onmousedown = (e) => {
        scroll_state.prev_pos = e.clientY;
        scroll_state.current_pos = e.clientY;
        scroll_state.active = true;
      };

      window.onmouseup = (e) => {
        scroll_state.prev_pos = 0;
        scroll_state.current_pos = 0;
        scroll_state.active = false;
      };

      window.onmousemove = (e) => {
        if (scroll_state.active) {
          scroll_state.prev_pos = scroll_state.current_pos;
          scroll_state.current_pos = e.clientY;

          let delta =
            ((scroll_state.current_pos - scroll_state.prev_pos) /
              window.innerHeight) *
            document.body.scrollHeight;

          store.commit("scroll/updateScrollAnimToPosition", {
            delta: delta,
          });
        }
      };
    };

    onMounted(() => {
      setUpControllerEventListeners();
      setUpTouchEventListeners();
    });

    let countControllerProperties = () => {
      scroll_state.current_delta +=
        (1 +
          20 *
            ((scroll_state.current_pos - scroll_state.prev_pos) /
              window.innerHeight) -
          scroll_state.current_delta) /
        40;
      controller_height.value =
        window.innerHeight *
        (window.innerHeight / document.body.scrollHeight) *
        scroll_state.current_delta;

      controller_position.value =
        (window.innerHeight - controller_height.value) *
        (window.scrollY / (document.body.scrollHeight - window.innerHeight));
    };

    let draw = () => {
      countControllerProperties();

      window.requestAnimationFrame(draw);
    };

    draw();

    return {
      controller_height,
      controller_position,
      controller,
    };
  },
});
</script>
