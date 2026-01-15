export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    pageCard: {
      slots: {
        title: 'text-primary font-bold',
        wrapper: '-items-start',
        body: 'flex flex-col'
      }
    },

    tabs: {
      slots: {
        content: 'px-4 overflow-x-auto'
      }
    },

    button: {
      slots: {
        base: 'cursor-pointer'
      }
    }
  }
})
