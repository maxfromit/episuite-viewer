<script setup lang="ts">
import type { SubmitResponse } from '~/types/episuite-api'

defineProps<{
  casArray: string[]
  analogs: SubmitResponse[]
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'load'): void
}>()
</script>

<template>
  <div class="flex max-h-80 min-h-0 flex-row overflow-y-auto">
    <template v-if="casArray && Array.isArray(casArray)">
      <UButton
        v-if="!loading && !analogs?.length"
        label="Load AIM Analogs"
        @click="emit('load')"
      />

      <template v-else>
        <div class="flex flex-1 flex-row gap-4 p-2">
          <div
            v-for="(analog, index) in casArray"
            :key="index"
            class="flex w-1/3 flex-col"
          >
            <LoadingCard
              v-if="!analogs[index]"
              :index="index"
              :length="casArray?.length"
              class="flex-1"
            />

            <MainCard
              v-if="analogs[index]"
              :chemical-properties="analogs[index]?.chemicalProperties"
              class="flex-1"
            >
              <template #specificProperties>
                <ChemicalProperty
                  label="dasda"
                  :value="analogs[index]?.logKow?.selectedValue?.value"
                />
              </template>
            </MainCard>
          </div>
        </div>
      </template>
    </template>
    <span v-else>No AIM Analogs Available</span>
  </div>
</template>
