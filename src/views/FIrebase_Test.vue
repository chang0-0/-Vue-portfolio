<template>
  <div class="Firebody">
    <v-card>
      <h1>Fire Base Test</h1>
    </v-card>
    <div class="input_div">
      <v-text-field
        label="Main input"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-text-field label="Another input"></v-text-field>
      <v-btn color="white" class="black" depressed outlined>Test Button</v-btn>
    </div>
  </div>
</template>
<script>
//import db from "../fb";
//import { doc, setDoc } from "firebase/firestore";
</script>

<style lang="scss">
.Firebody {
  position: relative;
  align-content: center;
  justify-content: center;
  text-align: center;

  .input_div {
    position: absolute;
    right: 40%;
    align-content: center;
    justify-content: center;
    padding: 40px;
    width: 540px;
  }
}
</style>
