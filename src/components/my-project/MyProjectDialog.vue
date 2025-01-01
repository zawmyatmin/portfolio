<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-chip
        v-bind="activatorProps"
        color="surface-variant"
        text="Projects"
        variant="outlined"
        style="border-style: groove"
      ></v-chip>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="My Projects" style="background-color: #cec7bf">
        <v-chip-group>
          <v-chip
            style="margin-left: 1rem"
            href="https://github.com/zawmyatmin/SchoolAdministrationSystem"
          >
            School Administration System
          </v-chip>
        </v-chip-group>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
