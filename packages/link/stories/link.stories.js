import LlxLink from '../src/link.vue'

export default {
  title: 'LlxLink',
  component: LlxLink
}

export const Link = _ => ({
  components: { LlxLink },
  template: `
    <div>
      <llx-link href="https:/www.baidu.com" disabled>
        百度
      </llx-link>
    </div>
    `
})