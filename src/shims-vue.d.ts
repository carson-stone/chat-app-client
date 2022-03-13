
declare module "*.vue" {
  import type { defineComponent } from "@vue/runtime-dom";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
