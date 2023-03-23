<template>
  <div class="inline px-6 py-2 mt-3">

      <button
        @click="open = true"
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Create Location
      </button>

      <div
        :class="`modal ${
          !open && 'opacity-0 pointer-events-none'
        } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
      >
        <div
          @click="open = false"
          class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        ></div>

        <div
          class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
        >
          <div
            class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
          >
            <svg
              class="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
            <span class="text-sm">(Esc)</span>
          </div>

          <!-- Add margin if you want to see some of the overlay behind the modal-->
          <div class="px-6 py-4 text-left modal-content">
            <!--Title-->
            <div class="flex items-center justify-between pb-3">
              <p class="text-2xl font-bold">Locations</p>
              <div class="z-50 cursor-pointer modal-close" @click="open = false">
                <svg
                  class="text-black fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  />
                </svg>
              </div>
            </div>

            <!--Body-->
            <p>
              Location allows you to allocate physical clusters and allocate them to
              individual workspaces
            </p>

            <v-row align="center">
              <v-col class="d-flex" md="8" sm="12" xs="12">
                <v-text-field
                  v-model="newLocation.metadata.name"
                  required
                  label="Location name"
                  hint="Location is unique name representing remote abstracted location"
              ></v-text-field>
              </v-col>
            </v-row>

            <!-- General object labels -->
            <div class="mt-4">
              <v-row align="center">
                <v-col class="d-flex" md="8" sm="12" xs="12">
                  <p>
                    Labels are used to identify SyncTargets and are used to group SyncTargets
                    using locations.
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn
                    outlined
                    class="primary--text"
                    :disabled="loading"
                    :loading="loading"
                    @click="addLabel(labels)"
                   >
                   Add label
                  </v-btn>
                </v-col>
              </v-row>
              <template v-for="(label, i) in labels" :key="`labels-${i}`">
                <v-row  >
                  <v-col cols="" sm="3">
                    <v-text-field
                      v-model="label.key"
                      label="Key"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="" sm="4">
                    <v-text-field
                      v-model="label.value"
                      label="Value"
                      outlined
                  ></v-text-field>
                  </v-col>
                  <v-col sm="1">
                    <div class="text-center">
                      <button
                        @click="deleteLabel(labels,i)"
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-red-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                        </svg>
                     </button>
                    </div>
                  </v-col>
                </v-row>
              </template>
            </div>

            <!-- Sync target selections labels -->
            <div class="mt-4">
              <v-row align="center">
                <v-col class="d-flex" md="8" sm="12" xs="12">
                  <p>
                    SyncTarget Labels are used to select sync target instances
                    from the SyncTarget pool and group them into a location.
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn
                    outlined
                    class="primary--text"
                    :disabled="loading"
                    :loading="loading"
                    @click="addLabel(instanceSelector)"
                   >
                   Add label
                  </v-btn>
                </v-col>
              </v-row>
              <template v-for="(label, i) in instanceSelector" :key="`labels-${i}`">
                <v-row  >
                  <v-col cols="" sm="3">
                    <v-text-field
                      v-model="label.key"
                      label="Key"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="" sm="4">
                    <v-text-field
                      v-model="label.value"
                      label="Value"
                      outlined
                  ></v-text-field>
                  </v-col>
                  <v-col sm="1">
                    <div class="text-center">
                      <button
                        @click="deleteLabel(instanceSelector,i)"
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-red-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                        </svg>
                     </button>
                    </div>
                  </v-col>
                </v-row>
              </template>
            </div>

            <!-- Sync target selections labels -->
            <div class="mt-4">
              <v-row align="center">
                <v-col class="d-flex" md="8" sm="12" xs="12">
                  <p>
                    Location instance labels are used to select location instances
                    from the available locations
                  </p>
                  <v-spacer></v-spacer>
                </v-col>
              </v-row>
                <v-row  >
                  <v-col cols="" sm="3">
                    <v-text-field
                      v-model="availableSelectorLabels.key"
                      label="Key"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="" sm="4">
                    <vue3-tags-input
                      :tags="availableSelectorLabels.values"
                      @on-tags-changed="handleChangeTag"
                      placeholder="selector values" />
                  </v-col>
              </v-row>
              <v-row  >
                  <v-col cols="" sm="6">
                    <v-text-field
                      v-model="availableSelectorLabels.description"
                      label="Key"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>

            </div>

            <div>
              <div v-if=error class="text-red-500">
                {{ error.message }}
              </div>
            </div>


            <!--Footer-->
            <div class="flex justify-end pt-2">
              <button
                @click="open = false"
                class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
              >
                Close
              </button>
              <button
               @click="onSubmit"
                class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">

import { defineComponent, } from "vue";
import { mapGetters, mapActions } from "vuex";
import { V1alpha1Workspace } from "@/api/faros";
import { WorkspacedLocation } from "@/store/locations/types";
import { V1alpha1Location } from "@/api/kcp";
import { V1alpha1GroupVersionResource } from "@/api/kcp/models/V1alpha1LocationSpec";
import Vue3TagsInput from 'vue3-tags-input';

export default defineComponent({
    name: "CreateLocation",
    components: {
      Vue3TagsInput,
    },

    props: {
      workspace: {
        type: V1alpha1Workspace,
        required: true,
      },
    },

    data () {
      return {
        open: false,
        // placeholders for creation
        labels: [
          {
            key: "",
            value: "",
          },
        ],
        // instanceSelector is used to identify SyncTargets and are used to group SyncTargets using locations.
        instanceSelector:[
          {
            key: "",
            value: "",
          },
        ],
        // availableSelectorLabels is used to identify location when targeting locations synctargets
        availableSelectorLabels:{
            key: "",
            values: [],
            description:  "",
        },
        newLocation: {
          metadata: {
            name: "",
            labels: {},
          },
          spec: {},
        } as V1alpha1Location,
      }
    },

    computed: {
      ...mapGetters("locationModule", {
        error: "error",
        loading: "loading",
      }),
    },

    methods: {
      ...mapActions("locationModule", [
        "createLocationActions",
      ]),
      ...mapActions("notificationModule", [
        "setNotification",
      ]),

      onSubmit() {
        let payload: WorkspacedLocation
        payload = {} as WorkspacedLocation
        payload.location = this.newLocation
        payload.workspace = this.workspace

        // defaulting for undefined. TODO: move to a better place
        const labels: { [key: string] : string; } = {};
        const syncTargetLabels: { [key: string] : string; } = {};
        payload.location.metadata.labels = labels
        payload.location.spec.instanceSelector = {}
        payload.location.spec.instanceSelector.matchLabels = syncTargetLabels
        // TODO: hardcoded for now
        payload.location.spec.resource = {
          group: "workload.kcp.io",
          resource: "synctargets",
          version: "v1alpha1",

        } as V1alpha1GroupVersionResource
        // convert to payload
        for (let i = 0; i < this.labels.length; i++) {
          if (this.labels[i].key != "") {
            payload.location.metadata.labels[this.labels[i].key] = this.labels[i].value
          }
        }

        for (let i = 0; i < this.instanceSelector.length; i++) {
          if (this.instanceSelector[i].key != "") {
            payload.location.spec.instanceSelector.matchLabels[this.instanceSelector[i].key] = this.instanceSelector[i].value
          }
        }

        // convert locationSelector to payload
        if (payload.location.spec.availableSelectorLabels == undefined) {
          payload.location.spec.availableSelectorLabels = []
        }

        payload.location.spec.availableSelectorLabels.push({
          key: this.availableSelectorLabels.key,
          values: this.availableSelectorLabels.values,
          description: this.availableSelectorLabels.description,
        })

        this.createLocationActions(payload).then(() => {
          if (this.error == "") {
            this.setNotification("Location "+payload.location.metadata?.name+" created successfully")
            this.open = false;
            this.newLocation = {} as V1alpha1Location
          }
        });
      },
      // addLabels add empty line to labels UI for more labels
      addLabel(labels: any) {
        labels.push({key: "", value: ""})
      },
      // deleteLabel deletes label from labels UI
      deleteLabel(obj: any, index: number) {
        obj.splice(index, 1)
      },
      handleChangeTag(tags: any) {
        this.availableSelectorLabels.values = tags
      },
    },

  })

  </script>
  <style>
    .modal {
      transition: opacity 0.25s ease;
    }

  </style>
