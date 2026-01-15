<template>
  <div class="flex flex-col items-center gap-2 lg:flex-row">
    <div class="lg:max-w-1/3">
      <slot name="selectedValues" />
    </div>
    <div class="flex min-w-0 flex-1 overflow-x-auto">
      <slot name="table" />
    </div>
  </div>
</template>
