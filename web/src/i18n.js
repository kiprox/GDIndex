import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en'
import id from './locales/id-ID'
import zhTW from './locales/zh-TW'
import zhCN from './locales/zh-CN'

Vue.use(VueI18n)

export default new VueI18n({
	locale: navigator.language,
	fallbackLocale: 'en',
	messages: {
		en,
		'id-ID': id,
		'zh-TW': zhTW,
		'zh-HK': zhTW,
		'zh-CN': zhCN,
		zh: zhCN,
		id: id,
	},
})
