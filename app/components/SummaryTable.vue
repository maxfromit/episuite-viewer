<script setup lang="ts">
import type { SubmitResponse } from '../types/episuite-api'
import type { TableColumn } from '@nuxt/ui'

defineProps<{
  summary: Summary[]
}>()

type Summary = {
  label?: string
  parameters?: Record<string, any>
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
    cell: ({ row }) => {
      row.getValue('estimatedValue')?.value
      const estimatedValue = row.getValue('estimatedValue')?.value
      return estimatedValue ? estimatedValue : ''
    },
    meta: {
      class: {
        th: 'align-top'
      }
    }
  },
  {
    accessorKey: 'experimentalValues',
    header: 'Experimental Values',
    cell: ({ row }) => {
      const experimentalValues = row.getValue(
        'experimentalValues'
      ) as Summary['experimentalValues']
      return experimentalValues
        ? experimentalValues.map((v) => v.value).join(', ')
        : ''
    },
    meta: {
      class: {
        th: 'align-top'
      }
    }
  },
  {
    accessorKey: 'references',
    header: 'References',
    cell: ({ row }) => {
      const experimentalValues = row?.original?.experimentalValues
      // const values = row.getValue(
      //   'experimentalValues'
      // ) as Summary['experimentalValues']
      return experimentalValues
        ? experimentalValues.map((v) => `${v.author} (${v.year})`).join('; ')
        : undefined
    },
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
    :data="summary"
    class="flex-1"
  >
    <template #label-cell="{ row }">
      {{ row.original?.label ? row.original?.label : '' }}
      <slot name="labelCell" />
    </template>

    <template #experimentalValues-cell="{ row }">
      {{ row?.original?.experimentalValues?.map((v) => v.value).join(', ') }}
    </template>

    <!-- <template #references-cell="{ row }">
      {{
        row?.original?.experimentalValues
          ?.map((v) => `${v.author} (${v.year})`)
          .join('; ')
      }}
    </template> -->
  </UTable>
</template>
