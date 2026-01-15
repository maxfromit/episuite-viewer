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
        body: 'flex flex-col',
        container: 'min-w-0'
      }
    },

    tabs: {
      slots: {
        root: 'overflow-x-auto',
        content: 'px-4 py-2'
      }
    },

    button: {
      slots: {
        base: 'cursor-pointer'
      }
    }
  }
})
