export default function (context, inject) {
  inject('nuxt-module-template', {})
  context.app['nuxt-module-template'] = {}
}
