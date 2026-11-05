import DefaultTheme from 'vitepress/theme'
import ProjectGrid from './components/ProjectGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
  },
}
