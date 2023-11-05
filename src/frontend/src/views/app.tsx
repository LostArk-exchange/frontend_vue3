import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { makeAPI } from '@/api/common'

export default defineComponent({
  name: 'App',
  setup () {
    console.log(process.env.HERE_TEST) // 출력됨

    ;(async () => {
      // env가 API_BASE_URL=https://reqres.in/ 세팅돼있는 상황
      const testAPI = await makeAPI('GET', 'api/', 'users?page=2')({})
      console.log(testAPI)
    })()

    return () => <RouterView />
  },
})
