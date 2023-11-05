import { defineStore } from 'pinia'
import type * as T from './types'

export default defineStore('main.store', {
  state () {
    return {
      navData: [{
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
      }] as T.NavData[],

      BossData: [{
        name: '발탄(노말)',
        boss: true,
        stage: 2,
      }, {
        name: '발탄(하드)',
        boss: true,
        stage: 2,
      }, {
        name: '비아키스(노말)',
        boss: true,
        stage: 2,
      }, {
        name: '비아키스(하드)',
        boss: true,
        stage: 2,
      }, {
        name: '쿠크세이튼(노말)',
        boss: true,
        stage: 3,
      }, {
        name: '아브렐슈드(노말)',
        boss: true,
        stage: 4,
      }, {
        name: '아브렐슈드(하드)',
        boss: true,
        stage: 4,
      }, {
        name: '일리아칸(노말)',
        boss: true,
        stage: 3,
      }, {
        name: '일리아칸(하드)',
        boss: true,
        stage: 3,
      }, {
        name: '카멘(노말)',
        boss: true,
        stage: 3,
      }, {
        name: '카멘(하드)',
        boss: true,
        stage: 4,
      }, {
        name: '카양겔(노말)',
        boss: false,
        stage: 3,
      }, {
        name: '카양겔(하드)',
        boss: false,
        stage: 3,
      }, {
        name: '상아탑(노말)',
        boss: false,
        stage: 4,
      }, {
        name: '상아탑(하드)',
        boss: false,
        stage: 4,
      },
      ] as T.BossData[],

      MainData: [{
        label: '영지 제작 효율',
        loginRequired: false,
        explain: '영지 제작 물품들의 효율을 계산해주는 페이지입니다.',
      }, {
        label: '레이드 보상 정리',
        loginRequired: false,
        explain: '군단장 및 어비스 보상을 정리해주는 페이지입니다.',
      }, {
        label: '호감도 계산기',
        loginRequired: false,
        explain: '호감도 보상 및 개수 등을 계산해주는 페이지입니다.',
      }, {
        label: '달력',
        loginRequired: false,
        explain: '로아 모험섬 및 이벤트 등을 보여주는 페이지입니다.',
      },
      ] as T.MainData[],

      WisdomProduceData: [{

      },
      ] as T.WisdomProduceData[],

      resource: [{
        image: 'https://user-images.githubusercontent.com/67012995/277149304-b585a494-557e-4a71-bc32-79d11d7b99b6.png',
      }, {
        image: 'https://user-images.githubusercontent.com/67012995/277149306-02e7e5b4-7b0f-4df3-811d-ed11c06e3876.png',
      }] as T.ResourceData[],

      currentIdx: 0,
    }
  },
  getters: {},

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
