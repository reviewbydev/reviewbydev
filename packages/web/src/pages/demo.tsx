import { Component, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

@Component({})
export default class DemoPage extends Vue {
  head (): MetaInfo {
    return {
      title: 'Demo',
    }
  }

  render () {
    return (
      <div class='ma-3'>
        <h1 class='display-3'>Demo</h1>
      </div>
    )
  }
}
