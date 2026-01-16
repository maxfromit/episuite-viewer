<script setup lang="ts">
import type { SubmitResponse } from '../types/episuite-api'

defineProps<{
  logKow: SubmitResponse['logKow']
  casArray: SubmitResponse['logKowAnalogs']
}>()

const tabs = [
  {
    label: 'Summary',
    slot: 'summary'
  },
  {
    label: 'Model Descriptors',
    slot: 'model-descriptors'
  },
  {
    label: 'Model Output',
    slot: 'model-output'
  },
  {
    label: 'AIM Analogs',
    slot: 'aim-analogs'
  }
]

const analogs = ref<SubmitResponse[]>([])
const loadingAnalogs = ref(false)

const loadKowAnalogs = (casArray: string[]) => {
  useLoadAnalogs(casArray, analogs, loadingAnalogs)
}
</script>

<template>
  <UPageCard>
    <template #title>
      <CardTitle
        title="Log K<sub>OW</sub>"
        description="Octanol-Water Partition Coefficient"
        guideUrl="https://episuite.dev/EpiWebSuite/#/help/kowwin"
      />
    </template>

    <UTabs
      :items="tabs"
      variant="link"
    >
      <template #summary>
        <SummaryTabLayout>
          <template #selectedValues>
            <SelectedValueCard
              label="Experimental Log K<sub>OW</sub>"
              :value="(logKow?.selectedValue as any)?.value"
            />
          </template>
          <template #table>
            <SummaryTable
              :summaryRows="[{ ...logKow, label: 'Log K<sub>OW</sub>' }]"
            />
          </template>
        </SummaryTabLayout>
      </template>

      <template #model-descriptors>
        <ModelDescriptorsTable
          :descriptors="(logKow?.estimatedValue as any)?.model?.factors"
          :aggregated="[
            {
              label: 'Log K<sub>OW</sub>',
              value: (logKow?.estimatedValue as any)?.model?.logKow
            }
          ]"
        />
      </template>

      <template #model-output>
        <pre>
            {{ (logKow?.estimatedValue as any)?.model?.output }}
        </pre>
      </template>

      <template #aim-analogs>
        <div class="max-h-80 min-h-0 overflow-y-auto">
          <template v-if="casArray && Array.isArray(casArray)">
            <UButton
              v-if="!loadingAnalogs && !analogs?.length"
              label="Load AIM Analogs"
              @click="loadKowAnalogs(casArray)"
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

                  <ChemicalPropertiesCard
                    v-if="analogs[index]"
                    :chemical-properties="analogs[index]?.chemicalProperties"
                    class="flex-1"
                  >
                    <template #specificProperties>
                      <ChemicalPropertyDisplay
                        label="Log K<sub>OW</sub>"
                        :value="
                          (analogs[index]?.logKow?.selectedValue as any)?.value
                        "
                      />
                    </template>
                  </ChemicalPropertiesCard>
                </div>
              </div>
            </template>
          </template>

          <span v-else>No AIM Analogs Available</span>
        </div>
      </template>
    </UTabs>
  </UPageCard>
</template>
