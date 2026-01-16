<script setup lang="ts">
const { data, pending } = useEpiSuiteApi('002921-88-2')
</script>

<template>
  <UContainer v-if="!pending">
    <div
      v-if="data"
      class="flex flex-col justify-center gap-4 py-4 sm:py-6 lg:flex-row lg:px-15 lg:py-10"
    >
      <div class="flex flex-col gap-4 lg:max-w-1/3">
        <ChemicalPropertiesCard
          :chemical-properties="data?.chemicalProperties"
        />
      </div>

      <div class="flex flex-col gap-4 lg:max-w-2/3">
        <LogKowCard
          :log-kow="data?.logKow"
          :cas-array="data?.logKowAnalogs"
        />

        <MPBPCard
          :melting-point="data?.meltingPoint"
          :boiling-point="data?.boilingPoint"
          :cas-array="data?.analogs"
        />
      </div>
    </div>
  </UContainer>

  <USkeleton
    v-else
    class="flex min-h-dvh items-center justify-center"
  >
    <div class="text-primary font-bold">Loading Results...</div>
  </USkeleton>
</template>
