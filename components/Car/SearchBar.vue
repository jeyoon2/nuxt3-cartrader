<script setup>
const city = ref('');
const cityError = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>

<template>
  <div
    class="mx-auto flex w-[1000px] justify-between overflow-hidden rounded-full bg-white font-serif text-2xl drop-shadow-2xl"
  >
    <input
      type="text"
      class="w-full rounded-full px-5 py-3 text-2xl focus:outline-none"
      :class="cityError ? 'border border-red-500' : ''"
      placeholder="Search by city..."
      v-model="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Search</button>
  </div>
</template>
