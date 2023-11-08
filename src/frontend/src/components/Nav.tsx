import { defineStore } from 'pinia'
import { defineComponent } from 'vue'

export type NavData = {
  label: string
  loginRequired: boolean
  emoji: string
}

const navData = [{
  label: '메인',
  loginRequired: false,
}, {
  label: '영지 제작 효율',
  loginRequired: false,
}, {
  label: '레이드 보상 정리',
  loginRequired: false,
}, {
  label: '호감도 계산기',
  loginRequired: false,
}, {
  label: '달력',
  loginRequired: false,
}]

const useStore = defineStore('Nav', {
  state: () => ({
    currentIdx: 0,
  }),
  actions: {
    moveTab (loginRequired:boolean, i:number) {
      if (loginRequired) {
        alert('로그인이 필요합니다.')
        return
      }
      this.currentIdx = i
    },
  },
})

export default defineComponent({
  setup () {
    const store = useStore()
    const active = 'font-bold !opacity-100'
    return () => {
      const { currentIdx, moveTab } = store
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
