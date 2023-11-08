import Navbar from '@/components/Nav'
import Page from '@/components/Page'
import { defineComponent } from 'vue'
import { Boss } from './components/Boss'
import { Main } from './components/Main'
import { WisdomProduce } from './components/WisdomProduce'
import useStore from './index.store'

export default defineComponent({
  setup () {
    const store = useStore()
    const block = '!block'

    return () => {
      const { currentIdx } = store
      return [
        <Navbar />,
        <Page>
          <Main class={`hidden ${currentIdx === 0 && block}`} />
          <WisdomProduce class={`hidden ${currentIdx === 1 && block}`} />
          <Boss class={`hidden ${currentIdx === 2 && block}`} />
        </Page>,
      ]
    }
  },
})
