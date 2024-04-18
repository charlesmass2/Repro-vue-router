<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const queryParamExists = computed(() => {
  const { query } = router.currentRoute.value;
  return query.queryParam !== undefined;
});

const hrefWithQueryParam = computed(() => {
  const resolved = router.resolve({
    ...router.currentRoute.value,
    query: { queryParam: 1 },
  });
  return resolved.href;
});

const setQueryParam = async () => {
  await router.replace({ query: { ...router.currentRoute.value.query, queryParam: 1 } });
};
</script>

<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <div>
        <RouterLink :to="hrefWithQueryParam">Set query param</RouterLink>
      </div>
      <div v-if="queryParamExists">
        <div>Query params exists !</div>
      </div>
      <div>Href is {{ hrefWithQueryParam }}</div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
