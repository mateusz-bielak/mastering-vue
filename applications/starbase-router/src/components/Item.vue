<template>
  <div class="col-md-4" @click="switchItem">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{newItem.name}}</h4>
        <div v-for="(value, key, index) in newItem" :key="index">
          <div v-if="index < 5">
            <strong>{{ key }}</strong>: {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'type'],
  data() {
    return {
      newItem: {}
    }
  },
  methods: {
    switchItem() {
      const random_id = Math.floor(Math.random() * 63) + 1;
      fetch(`https://swapi.co/api/${this.type}/${random_id}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => this.newItem = json);
    }
  },
  created() {
    this.newItem = this.item;
  }
}
</script>
