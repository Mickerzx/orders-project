<template>
  <div class="container">
    <add-order-view />
    <div>
      <table class="order-table">
        <tr>
          <th>Название товара</th>
          <th>Количество</th>
          <th>Стоимость</th>
        </tr>

        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td>{{ product.id }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
// Core
import { computed, ComputedRef, onMounted } from 'vue';
import { useStore } from 'vuex';

// ActionTypes
import { OrdersActionTypes } from '@/store/modules/orders/action-types';
import { Product } from '@/typespaces/interfaces/product.interface';
import AddOrderView from '@/views/Products/AddOrderView.vue';

const store = useStore();
const products: ComputedRef<Product[]> = computed(() => store.getters.getProducts);

onMounted(() => {
  store.dispatch(OrdersActionTypes.FETCH_PRODUCTS);
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 400px auto;
  gap: 50px;
}

.order-table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid;
  text-align: center;
  font: var(--regular);
  word-break: break-all;
}

.order-table td {
  border: 1px solid;
  padding: 13px 5px;
  word-wrap: break-word;
}

.order-table th {
  border: 1px solid;
  padding: 7px 0;
}
</style>
