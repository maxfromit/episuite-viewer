<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

defineProps<{
  summaryRows: Summary[]
}>()

type Summary = {
  label: string
  parameters?: Record<string, unknown>
  estimatedValue?: { value: number }
  experimentalValues?: {
    author: string
    value: number
    year: number
  }[]
}

const columns: TableColumn<Summary>[] = [
  {
    accessorKey: 'label',
    header: ' ',
    meta: {
      class: {
        td: 'font-semibold whitespace-normal'
      }
    }
  },
  {
    accessorKey: 'estimatedValue',
    header: 'Estimated Value',
    cell: ({ row }) =>
      formatValue(
        (row.getValue('estimatedValue') as Summary['estimatedValue'])?.value
      ),
    meta: {
      class: {
        th: 'align-top text-right',
        td: 'text-right'
      }
    }
  },
  {
    accessorKey: 'experimentalValues',
    header: 'Experimental Values',
    cell: ({ row }) =>
      (row.getValue('experimentalValues') as Summary['experimentalValues'])
        ?.map((v) => v.value)
        .join(', '),
    meta: {
      class: {
        th: 'align-top text-right',
        td: 'text-right'
      }
    }
  },
  {
    accessorKey: 'references',
    header: 'References',
    cell: ({ row }) =>
      (row.getValue('experimentalValues') as Summary['experimentalValues'])
        ?.map((v) => `${v.author} ${v.year ? `(${v.year})` : ''}`)
        .join(', '),
    meta: {
      class: {
        th: 'align-top'
      }
    }
  }
]
</script>

<template>
  <UTable
    :columns="columns"
    :data="summaryRows"
    class="flex-1"
  >
    <template #label-cell="{ row }">
      <span v-html="row?.original?.label" />
    </template>
  </UTable>
</template>
