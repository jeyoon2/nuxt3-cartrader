<template>
  <div>
    <NavBar />

    <div class="xs:px-8 mx-auto mt-4 w-3/5 max-w-7xl space-y-4 px-4 pb-16 sm:px-10 lg:px-16">
      <div class="mt-32 flex">
        <CarSideBar />
        <NuxtPage />
        <!-- NuxtPage 컴포넌트에 [[make]].vue가 렌더링됨 -->
      </div>
    </div>
  </div>
</template>
