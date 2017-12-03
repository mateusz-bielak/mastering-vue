<template>
  <div>{{ items }}</div>
</template>

<script>
export default {
  data() {
    return {
      type: this.$route.params.type,
      items: [],
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.items = [];
      this.type = this.$route.params.type;
      const initial_ids = [1, 13, 14];

      for (const i in initial_ids) {
        const id = initial_ids[i];
        console.log('id', id);
        fetch(`https://swapi.co/api/${this.type}/${id}`, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => this.items.push(json));
          console.log(this.items);
      }
    }
  },
  created() {
    this.fetchItems();
  }
}
</script>
