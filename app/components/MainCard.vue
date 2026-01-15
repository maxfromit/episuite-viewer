<script setup lang="ts">
import type { SubmitResponse } from '../types/episuite-api'

const { chemicalProperties } = defineProps<{
  chemicalProperties?: SubmitResponse['chemicalProperties']
}>()

const smiles = computed(() => {
  return chemicalProperties?.smiles ?? null
})

const { data: url, pending: pending } = useFetch(
  'https://episuite.dev/EpiWebSuite/api/draw-chemical',
  {
    query: { smiles },
    responseType: 'blob',
    transform: (blob: Blob) => (blob ? URL.createObjectURL(blob) : null),
    lazy: true,
    server: false
  }
)
</script>

<template>
  <UPageCard>
    <template #title> {{ chemicalProperties?.name }} </template>

    <USkeleton
      v-if="pending"
      class="bg-muted/20 h-48 w-48"
    />
    <img
      v-if="url && !pending"
      :src="url"
      alt="Chemical Structure"
      class="max-w-3/4"
    />
    <div class="flex flex-col gap-3">
      <ChemicalProperty
        label="Systematic Name"
        :value="chemicalProperties?.systematicName"
      />
      <ChemicalProperty
        label="CAS RN"
        :value="chemicalProperties?.cas"
      />
      <ChemicalProperty
        label="Molecular Formula"
        :value="chemicalProperties?.molecularFormula"
        isMolecularFormula
      />
      <ChemicalProperty
        label="Molecular Mass"
        :value="chemicalProperties?.molecularWeight"
      />
      <ChemicalProperty
        label="SMILES"
        :value="chemicalProperties?.smiles"
      />
      <slot name="specificProperties" />
    </div>
  </UPageCard>
</template>
