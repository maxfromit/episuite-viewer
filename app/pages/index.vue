<script setup lang="ts">
import type { SubmitResponse } from '../types/episuite-api'

const data = toRef(rawData)
// type SubmitResponse =
//   paths['/api/submit']['get']['responses']['200']['content']['application/json']

// const { data, pending } = useEpiSuiteApi('002921-88-2')

// const { data: data, loading: pending } = loadElement('002921-88-2')

// const { data, pending } = useFetch<SubmitResponse>(
//   'https://episuite.dev/EpiWebSuite/api/submit',
//   {
//     query: { cas: '002921-88-2' },
//     lazy: true,
//     server: false
//   }
// )

const mainData = computed(() => data.value?.chemicalProperties)

const logKowTabs = [
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

const mpbpTabs = [
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

const logKowAnalogs = ref<SubmitResponse[]>([])
const loadingLogKowAnalogs = ref(false)

const otherAnalogs = ref<SubmitResponse[]>([])
const loadingOtherAnalogs = ref(false)

const loadKowAnalogs = (casArray: string[]) => {
  useLoadAnalogsCompo(casArray, logKowAnalogs, loadingLogKowAnalogs)
}

const loadAnalogs = (casArray: string[]) => {
  useLoadAnalogsCompo(casArray, otherAnalogs, loadingOtherAnalogs)
}
</script>

<template>
  <UContainer v-if="!pending">
    <div
      v-if="data"
      class="flex flex-col justify-center gap-4 py-4 sm:py-6 lg:flex-row lg:px-15 lg:py-10"
    >
      <div class="flex flex-col gap-4 lg:max-w-1/3">
        <MainCard :chemical-properties="mainData" />
      </div>

      <div class="flex flex-col gap-4 lg:max-w-2/3">
        <UPageCard>
          <template #title>
            <CardTitle
              description="Octanol-Water Partition Coefficient"
              url="https://episuite.dev/EpiWebSuite/#/help/kowwin"
            >
              <template #title> Log K<sub>OW</sub> </template>
            </CardTitle>
          </template>

          <UTabs
            :items="logKowTabs"
            variant="link"
          >
            <template #summary>
              <SummaryTab>
                <template #selectedValues>
                  <SelectedValueCard
                    :value="data?.logKow?.selectedValue.value.toFixed(2)"
                  >
                    <template #label>
                      <span> Experimental Log K<sub>OW</sub> </span>
                    </template>
                  </SelectedValueCard>
                </template>
                <template #table>
                  <SummaryTable :summary="[data?.logKow]">
                    <template #labelCell> Log K<sub>OW</sub></template>
                  </SummaryTable>
                </template>
              </SummaryTab>
            </template>

            <template #model-descriptors>
              <ModelDescriptorsTable
                :descriptors="data?.logKow?.estimatedValue?.model?.factors"
                :aggregated="[
                  { value: data?.logKow?.estimatedValue?.model?.logKow }
                ]"
              >
                <template #aggregatedLabel> Log K<sub>OW</sub> </template>
              </ModelDescriptorsTable>
            </template>

            <template #model-output>
              <pre
                >{{ data?.logKow?.estimatedValue?.model?.output }}
                  </pre
              >
            </template>

            <template #aim-analogs>
              <div class="max-h-80 min-h-0 overflow-y-auto">
                <template
                  v-if="
                    data?.logKowAnalogs && Array.isArray(data?.logKowAnalogs)
                  "
                >
                  <UButton
                    v-if="!loadingLogKowAnalogs && !logKowAnalogs?.length"
                    label="Load AIM Analogs"
                    @click="loadKowAnalogs(data?.logKowAnalogs)"
                  />

                  <template v-else>
                    <div class="flex flex-1 flex-row gap-4 p-2">
                      <div
                        v-for="(analog, index) in data?.logKowAnalogs"
                        :key="index"
                        class="flex w-1/3 flex-col"
                      >
                        <LoadingCard
                          v-if="!logKowAnalogs[index]"
                          :index="index"
                          :length="data?.logKowAnalogs?.length"
                          class="flex-1"
                        />

                        <MainCard
                          v-if="logKowAnalogs[index]"
                          :chemical-properties="
                            logKowAnalogs[index]?.chemicalProperties
                          "
                          class="flex-1"
                        >
                          <template #specificProperties>
                            <ChemicalProperty
                              :value="
                                logKowAnalogs[index]?.logKow?.selectedValue
                                  ?.value
                              "
                            >
                              <template #label>
                                <span> Log K<sub>OW</sub> </span>
                              </template>
                            </ChemicalProperty>
                          </template>
                        </MainCard>
                      </div>
                    </div>
                  </template>
                </template>

                <span v-else>No AIM Analogs Available</span>
              </div>
            </template>
          </UTabs>
        </UPageCard>

        <UPageCard>
          <template #title>
            <CardTitle
              title="MPBP"
              description="Melting Point and Boiling Point"
              url="https://episuite.dev/EpiWebSuite/#/help/mpbpvp"
            />
          </template>

          <UTabs
            :items="mpbpTabs"
            variant="link"
          >
            <template #summary>
              <SummaryTab>
                <template #selectedValues>
                  <SelectedValueCard
                    label="Experimental Melting Point"
                    :value="String(data?.meltingPoint?.selectedValue.value)"
                  />
                  <SelectedValueCard
                    label="Estimated Boiling Point"
                    :value="String(data?.boilingPoint?.selectedValue.value)"
                  />
                </template>
                <template #table>
                  <SummaryTable
                    :summary="[
                      { ...data?.meltingPoint, label: 'Melting Point' },
                      { ...data?.boilingPoint, label: 'Boiling Point' }
                    ]"
                  />
                </template>
              </SummaryTab>
            </template>

            <template #model-descriptors>
              <div class="space-y-4 py-2">
                <div class="space-y-1">
                  <div class="text-primary text-sm font-bold">
                    Melting Point (Adapted Joback / Gold-Ogle Methods)
                  </div>
                  <ModelDescriptorsTable
                    :descriptors="
                      data?.meltingPoint?.estimatedValue?.model?.factors
                    "
                    :aggregated="[
                      {
                        label: 'Adapted Joback',
                        value:
                          data?.meltingPoint?.estimatedValue?.model
                            ?.meltingPointAdaptedJoback
                      },
                      {
                        label: 'Gold-Ogle',
                        value:
                          data?.meltingPoint?.estimatedValue?.model
                            ?.meltingPointGoldOgle
                      },
                      {
                        label: 'Mean Value',
                        value:
                          data?.meltingPoint?.estimatedValue?.model
                            ?.meltingPointMean
                      },
                      {
                        label: 'Selected Melting Point (Weighted Mean)',
                        value: data?.meltingPoint?.estimatedValue?.value
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
                      data?.boilingPoint?.estimatedValue?.model?.factors
                    "
                    :aggregated="[
                      {
                        label: 'Uncorrected Value',
                        value:
                          data?.boilingPoint?.estimatedValue?.model
                            ?.boilingPointKelvinsUncorrected
                      },
                      {
                        label: 'Corrected Value',
                        value:
                          data?.boilingPoint?.estimatedValue?.model
                            ?.boilingPointKelvinsCorrected
                      },
                      {
                        label: 'Boiling Point',
                        value:
                          data?.boilingPoint?.estimatedValue?.model
                            ?.boilingPointCelsius
                      }
                    ]"
                  />
                </div>
              </div>
            </template>

            <template #aim-analogs>
              <div class="max-h-80 min-h-0 overflow-y-auto">
                <template v-if="data?.analogs && Array.isArray(data?.analogs)">
                  <UButton
                    v-if="!loadingOtherAnalogs && !otherAnalogs?.length"
                    label="Load AIM Analogs"
                    @click="loadAnalogs(data?.analogs)"
                  />

                  <template v-else>
                    <div class="flex flex-1 flex-row gap-4 p-2">
                      <div
                        v-for="(analog, index) in data?.analogs"
                        :key="index"
                        class="flex w-1/3 flex-col"
                      >
                        <LoadingCard
                          v-if="!otherAnalogs[index]"
                          :index="index"
                          :length="data?.analogs?.length"
                          class="flex-1"
                        />

                        <MainCard
                          v-if="otherAnalogs[index]"
                          :chemical-properties="
                            otherAnalogs[index]?.chemicalProperties
                          "
                          class="flex-1"
                        >
                          <template #specificProperties>
                            <ChemicalProperty
                              label="Melting Point"
                              :value="
                                otherAnalogs[index]?.meltingPoint?.selectedValue
                                  ?.value
                              "
                            />
                            <ChemicalProperty
                              label="Boiling Point"
                              :value="
                                otherAnalogs[index]?.boilingPoint?.selectedValue
                                  ?.value
                              "
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
          </UTabs>
        </UPageCard>
      </div>
    </div>

    <div
      v-if="!data"
      class="text-primary py-10 text-center font-bold"
    >
      No Data Available
    </div>
  </UContainer>

  <USkeleton
    v-if="pending"
    class="flex min-h-[calc(100vh-var(--ui-header-height))] items-center justify-center"
  >
    <div class="text-primary font-bold">Loading Results...</div>
  </USkeleton>
</template>
