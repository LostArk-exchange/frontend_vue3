import { defineComponent } from 'vue'
import useStore from '../index.store'

export const Navbar = defineComponent({
  setup () {
    const store = useStore()
    const active = 'font-bold !opacity-100'
    return () => {
      const { navData, moveTab, currentIdx } = store
      return (
        <div class="bg-[#A1C652]">
          <div class="max-w-[680px] mx-auto">
            <ul class="flex">
              {navData.map(({ label, loginRequired }, i, arr) => {
                return (
                  <li
                    class={`
                      px-3 py-5 cursor-pointer text-center text-sm text-white opacity-50
                      ${currentIdx === i && active}
                    `}
                    style={{
                      width: 100 / arr.length + '%',
                    }}
                    onClick={() => {
                      moveTab(loginRequired, i)
                    }}
                  >
                    {label}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    }
  },
})
