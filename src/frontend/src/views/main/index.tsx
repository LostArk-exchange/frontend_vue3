import { defineComponent, ref } from 'vue'
import useStore from './index.store'
import { Navbar } from './components/Nav'
import { Main } from './components/Main'
import { WisdomProduce } from './components/WisdomProduce'
import { Boss } from './components/Boss'

export default defineComponent({
  setup () {
    const store = useStore()
    const block = '!block'

    return () => {
      const { currentIdx } = store
      return (
        <div class="bg-gray-100 h-screen">
          <Navbar />
          <Main class={`hidden ${currentIdx === 0 && block}`} />
          <WisdomProduce class={`hidden ${currentIdx === 1 && block}`} />
          <Boss class={`hidden ${currentIdx === 2 && block}`} />
        </div>
      )
    }
  },
})
