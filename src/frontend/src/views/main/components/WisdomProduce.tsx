import { defineComponent } from 'vue'
import useStore from '../index.store'

export const WisdomProduce = defineComponent({
  setup () {
    const store = useStore()
    return () => {
      const { WisdomProduceData } = store
      return (
        <div class="max-w-[680px] mx-auto">
          <img src="" alt="" />
        </div>
      )
    }
  },
})
