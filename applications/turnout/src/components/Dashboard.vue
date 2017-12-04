<template>
  <div>
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <AddEvent />
    <hr>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';
import AddEvent from './AddEvent';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
  }
}
</script>
