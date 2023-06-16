import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore("favoritos", () => {
  const favoritos = ref([]);
  const add = (poke) => favoritos.value.push(poke);
  //const remove = (item) => delete favoritos[item];
  const remove = (item) => {
    console.log(favoritos.value);
    delete favoritos.value[item];
    console.log(favoritos.value);
  };

  return {
    favoritos,
    add,
    remove,
  };
});
