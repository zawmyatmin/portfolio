<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-chip
        v-bind="activatorProps"
        color="surface-variant"
        text="About Me"
        variant="outlined"
        style="border-style: hidden"
      ></v-chip>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="About Me" style="background-color: #cec7bf">
        <v-card-text style="font-weight: 300">
          {{ textDate }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  props: {
    textDate: String,
    required: true,
  },
};
</script>
