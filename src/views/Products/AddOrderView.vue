<template>
  <div class="form-container">
    <form @submit="submitHandler">
      <p class="label">Выберите продукцию</p>
      <select class="input" v-model="formState.title">
        <option v-for="product in products" :key="product.id">{{ product.title }}</option>
      </select>
      <p class="label">Введите количество</p>
      <input class="input" type="text" v-model="formState.quantity" />
      <button class="button" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, reactive } from 'vue';
import { Product } from '@/typespaces/interfaces/product.interface';
import { useStore } from 'vuex';
import { OrdersActionTypes } from '@/store/modules/orders/action-types';

const formState = reactive({
  title: '',
  quantity: '',
});

const store = useStore();
const products: ComputedRef<Product[]> = computed(() => store.getters.getProducts);

const submitHandler = (event: Event) => {
  event.preventDefault();
  store.dispatch(OrdersActionTypes.CREATE_ORDER, { title: formState.title, quantity: formState.quantity });
};

</script>

<style scoped>
.form-container {
  max-width: 400px;
}

.label {
  padding: 0;
  margin-bottom: 21px;
}

.input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
}

.button {
  margin-top: 21px;
  width: 100%;
  padding: 12px 0;
  color: #ffffff;
  background: var(--main-blue);
  border: none;
  border-radius: 5px;
}
</style>
