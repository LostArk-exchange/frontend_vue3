import { defineComponent } from 'vue'

export default defineComponent({
  setup (_, { slots }) {
    return () => {
      return (
        <div class="flex flex-col min-h-screen mx-auto max-w-4xl">
          <div class="flex-grow">
            {slots.default?.()}
          </div>
        </div>
      )
    }
  },
})
