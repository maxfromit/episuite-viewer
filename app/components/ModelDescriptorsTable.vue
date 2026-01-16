<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const { descriptors } = defineProps<{
  descriptors: ModelDescriptor[]
  aggregated?: {
    label: string
    value: number
    units?: string | 'celsius' | 'kelvins'
  }[]
}>()

type ModelDescriptor = {
  type?: string
  description?: string
  fragmentCount?: number
  coefficient?: number
  totalCoefficient?: number
  trainingCount?: number
  validationCount?: number
}

const hasTrainingCount = computed(() => {
  return descriptors.every((d) => d.trainingCount !== undefined)
})

const hasValidationCount = computed(() => {
  return descriptors.every((d) => d.validationCount !== undefined)
})

const columns = computed((): TableColumn<ModelDescriptor>[] => {
  const baseColumns: TableColumn<ModelDescriptor>[] = [
    {
      accessorKey: 'type',
      header: 'Value',
      meta: {
        class: {
          th: 'align-top',
          td: 'font-semibold whitespace-normal'
        }
      }
    },
    {
      accessorKey: 'description',
      header: 'Description',
      meta: {
        class: {
          th: 'align-top'
        }
      }
    },
    {
      accessorKey: 'fragmentCount',
      header: 'Number',
      cell: ({ row }) => row.getValue('fragmentCount'),
      meta: {
        class: {
          th: 'align-top text-right',
          td: 'text-right'
        }
      }
    },
    {
      accessorKey: 'coefficient',
      header: 'Coefficient',
      cell: ({ row }) => formatValue(row.getValue('coefficient')),
      meta: {
        class: {
          th: 'align-top text-right',
          td: 'text-right'
        }
      }
    },
    {
      accessorKey: 'totalCoefficient',
      header: 'Contribution',
      cell: ({ row }) => formatValue(row.getValue('totalCoefficient')),
      meta: {
        class: {
          th: 'align-top text-right',
          td: 'text-right'
        }
      }
    }
  ]

  if (hasTrainingCount.value) {
    baseColumns.push({
      accessorKey: 'trainingCount',
      header: 'Training Count',
      meta: {
        class: {
          th: 'align-top text-right',
          td: 'text-right'
        }
      }
    })
  }
  if (hasValidationCount.value) {
    baseColumns.push({
      accessorKey: 'validationCount',
      header: 'Validation Count',
      meta: {
        class: {
          th: 'align-top text-right',
          td: 'text-right'
        }
      }
    })
  }
  return baseColumns
})
</script>

<template>
  <UTable
    :columns="columns"
    :data="descriptors"
  >
    <template
      v-if="aggregated"
      #body-bottom
    >
      <tr
        v-for="item in aggregated"
        :key="item.label"
      >
        <td :colspan="columns.length">
          <div class="flex flex-row items-center justify-between p-4">
            <div
              class="text-muted text-sm font-semibold"
              v-html="item?.label"
            />
            <div class="text-muted text-sm">
              {{ formatValue(item?.value, { units: item?.units }) }}
            </div>
          </div>
        </td>
      </tr>
    </template>
  </UTable>
</template>
