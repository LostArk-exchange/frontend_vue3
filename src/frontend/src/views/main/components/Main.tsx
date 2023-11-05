import { defineComponent } from 'vue'
import useStore from '../index.store'

export const Main = defineComponent({
  setup () {
    const store = useStore()
    return () => {
      const { MainData, moveTab } = store
      return (
        <div class="max-w-[680px] mx-auto">
          <ul class="flex">
            {MainData.map(({ label, loginRequired, explain }, i, arr) => {
              return (
                <li
                class="mt-20 h-6 mx-2"
                style={{
                  width: 100 / arr.length + '%',
                }}
                onClick={() => {
                  moveTab(loginRequired, i + 1)
                }}>
                    <div class="text-center w-full bg-white shadow-2xl shadow-slate-300 rounded-xl p-2 hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring focus:bg-slate-300">
                      <div>
                        <img src="" alt="" />
                      </div>
                      <div class="text-lg">
                        {label}
                      </div>
                      <div class="text-xs mt-2 text-gray-900">
                        {explain}
                      </div>
                    </div>
                  </li>
              )
            })}
          </ul>
        </div>
      )
    }
  },
})
