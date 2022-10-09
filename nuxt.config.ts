// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/normalize.css"],
    app: {
        head: {
          titleTemplate: "%s -益肾",
          title: "宁波启星网络科技有限公司",
          charset: "utf-8",
          htmlAttrs: {
            lang: "zh-CN",
          },
          meta: [
            { name: "keywords", content: "宁波启星网络科技有限公司" },
            { name: "description", content: "宁波启星网络科技有限公司" },
          ],
          
        },
      },
})