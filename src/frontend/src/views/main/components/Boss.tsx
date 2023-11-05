import { defineComponent } from 'vue'
import useStore from '../index.store'

export const Boss = defineComponent({
  setup () {
    const store = useStore()
    return () => {
      const { BossData, currentIdx } = store
      return (
        <div class="max-w-[680px] mx-auto">
        </div>
      )
    }
  },
})
