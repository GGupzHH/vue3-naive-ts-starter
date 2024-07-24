
const component = {
  install: function(app: import('vue').App<any>): void {
    const components = import.meta.glob<DefineComponent>([
      '/src/components/*/index.vue',
      '/src/components/advanced/*.vue',
      '/src/components/Custom/*.vue',
      '/src/components/IconFont/select-icon.vue'
    ], { eager: true })
    console.log(components)
    for (const [, component] of Object.entries(components)) {
      app.component(component.default.name, component.default)
    }
  }
}

export default component
