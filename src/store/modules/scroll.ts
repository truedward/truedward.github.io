import IStoreScrollState from "@/interfaces/ScrollState";
import { Module } from "vuex";

const scroll: Module<IStoreScrollState, {}> = {
  namespaced: true,
  state: {
    scroll_current_position: 0,
    scroll_anim_to_pos: 0,
  },
  mutations: {
    updateScrollAnimToPosition(state, { delta }: { delta: number }) {
      if (state.scroll_anim_to_pos + delta < 0) {
        state.scroll_anim_to_pos = 0;

        return;
      }

      if (
        state.scroll_anim_to_pos + delta >
        document.body.scrollHeight - window.innerHeight
      ) {
        state.scroll_anim_to_pos =
          document.body.scrollHeight - window.innerHeight;

        return;
      }

      if (
        state.scroll_anim_to_pos + delta >= 0 &&
        state.scroll_anim_to_pos + delta <=
          document.body.scrollHeight - window.innerHeight
      )
        state.scroll_anim_to_pos += delta;
    },
    scrollToPosition(state, { position }: { position: number }) {
      if (position < 0) {
        state.scroll_anim_to_pos = 0;
        return;
      }

      if (position > document.body.scrollHeight - window.innerHeight) {
        state.scroll_anim_to_pos =
          document.body.scrollHeight - window.innerHeight;
        return;
      }

      if (
        position >= 0 &&
        position <= document.body.scrollHeight - window.innerHeight
      )
        state.scroll_anim_to_pos = position;
    },
  },
  actions: {
    setUpEventListeners(context) {
      window.addEventListener("wheel", (e) => {
        context.commit("updateScrollAnimToPosition", { delta: e.deltaY });
      });
    },
    setUp(context) {
      context.dispatch("setUpEventListeners");

      let draw = () => {
        context.state.scroll_current_position +=
          (context.state.scroll_anim_to_pos -
            context.state.scroll_current_position) /
          20;

        window.scrollTo({
          top: context.state.scroll_current_position,
        });

        window.requestAnimationFrame(draw);
      };

      draw();
    },
  },
};

export default scroll;
