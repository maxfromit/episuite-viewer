<script setup lang="ts">
import type { SubmitResponse } from '../types/episuite-api'

defineProps<{
  meltingPoint: SubmitResponse['meltingPoint']
  boilingPoint: SubmitResponse['boilingPoint']
  casArray: SubmitResponse['analogs']
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
    label: 'AIM Analogs',
    slot: 'aim-analogs'
  }
]

const analogs = ref<SubmitResponse[]>([])
const loadingAnalogs = ref(false)

const loadAnalogs = (casArray: string[]) => {
  useLoadAnalogs(casArray, analogs, loadingAnalogs)
}
</script>

<template>
  <UPageCard>
    <template #title>
      <CardTitle
        title="MPBP"
        description="Melting Point and Boiling Point"
        guide-url="https://episuite.dev/EpiWebSuite/#/help/mpbpvp"
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
              label="Experimental Melting Point"
              :value="(meltingPoint?.selectedValue as any)?.value"
              :units="(meltingPoint?.selectedValue as any)?.units"
            />
            <SelectedValueCard
              label="Estimated Boiling Point"
              :value="(boilingPoint?.selectedValue as any)?.value"
              :units="(boilingPoint?.selectedValue as any)?.units"
            />
          </template>
          <template #table>
            <SummaryTable
              :summary-rows="[
                { ...meltingPoint, label: 'Melting Point' },
                { ...boilingPoint, label: 'Boiling Point' }
              ]"
            />
          </template>
        </SummaryTabLayout>
      </template>

      <template #model-descriptors>
        <div class="space-y-4 py-2">
          <div class="space-y-1">
            <div class="text-primary text-sm font-bold">
              Melting Point (Adapted Joback / Gold-Ogle Methods)
            </div>

            <ModelDescriptorsTable
              :descriptors="
                (meltingPoint?.estimatedValue as any)?.model?.factors
              "
              :aggregated="[
                {
                  label: 'Adapted Joback',
                  value: (meltingPoint?.estimatedValue as any)?.model
                    ?.meltingPointAdaptedJoback,
                  units: (meltingPoint?.estimatedValue as any)?.units
                },
                {
                  label: 'Gold-Ogle',
                  value: (meltingPoint?.estimatedValue as any)?.model
                    ?.meltingPointGoldOgle,
                  units: (meltingPoint?.estimatedValue as any)?.units
                },
                {
                  label: 'Mean Value',
                  value: (meltingPoint?.estimatedValue as any)?.model
                    ?.meltingPointMean,
                  units: (meltingPoint?.estimatedValue as any)?.units
                },
                {
                  label: 'Selected Melting Point (Weighted Mean)',
                  value: (meltingPoint?.estimatedValue as any)?.value,
                  units: (meltingPoint?.estimatedValue as any)?.units
                }
              ]"
            />
          </div>

          <div class="space-y-1">
            <div class="text-primary text-sm font-bold">
              Boiling Point (Adapted Stein and Brown Method)
            </div>
            <ModelDescriptorsTable
              :descriptors="
                (boilingPoint?.estimatedValue as any)?.model?.factors
              "
              :aggregated="[
                {
                  label: 'Uncorrected Value',
                  value: (boilingPoint?.estimatedValue as any)?.model
                    ?.boilingPointKelvinsUncorrected,
                  units: 'kelvins'
                },
                {
                  label: 'Corrected Value',
                  value: (boilingPoint?.estimatedValue as any)?.model
                    ?.boilingPointKelvinsCorrected,
                  units: 'kelvins'
                },
                {
                  label: 'Boiling Point',
                  value: (boilingPoint?.estimatedValue as any)?.model
                    ?.boilingPointCelsius,
                  units: (boilingPoint?.estimatedValue as any)?.units
                }
              ]"
            />
          </div>
        </div>
      </template>

      <template #aim-analogs>
        <div class="max-h-80 min-h-0 overflow-y-auto">
          <template v-if="casArray && Array.isArray(casArray)">
            <UButton
              v-if="!loadingAnalogs && !analogs?.length"
              label="Load AIM Analogs"
              @click="loadAnalogs(casArray)"
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
                        label="Melting Point"
                        :value="
                          (analogs[index]?.meltingPoint?.selectedValue as any)
                            ?.value
                        "
                      />
                      <ChemicalPropertyDisplay
                        label="Boiling Point"
                        :value="
                          (analogs[index]?.boilingPoint?.selectedValue as any)
                            ?.value
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
