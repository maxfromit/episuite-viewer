<script setup lang="ts">
defineProps<{
  label?: string
  value?: string | number | null
  isMolecularFormula?: boolean
}>()

const getLabelOrNA = (value?: string | number | null): string | number => {
  if (typeof value === 'number') {
    return formatValue(value, { decimalPlaces: 3 })
  }
  return value && value.trim().length > 0 ? value : 'N/A'
}

const formatChemicalFormula = (formula: string | undefined): string => {
  if (!formula) return ''

  return formula.replace(/(\d+)/g, '<sub>$1</sub>')
}
</script>

<template>
  <div class="flex flex-col wrap-anywhere">
    <div class="text-muted text-sm">{{ label }} <slot name="label" /></div>
    <div
      v-if="!isMolecularFormula"
      class="text-md font-semibold"
    >
      {{ getLabelOrNA(value) }}
    </div>
    <div
      v-if="isMolecularFormula && typeof value === 'string'"
      class="text-md font-semibold"
      v-html="formatChemicalFormula(value)"
    ></div>
  </div>
</template>
