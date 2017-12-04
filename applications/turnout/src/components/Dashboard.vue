<template>
  <div>
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <AddEvent />
    <hr>
    {{ $store.state.events }}
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp';
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
  },
  mounted() {
    eventsRef.on('value', snap => {
      const events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch('setEvents', events)
    });
  },
}
</script>
