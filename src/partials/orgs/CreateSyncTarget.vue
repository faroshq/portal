<template>
  <div class="inline px-6 py-2 mt-3">

      <button
        @click="open = true"
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Create SyncTarget
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
              <p class="text-2xl font-bold">SyncTarget</p>
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
            <p class="flex justify-end pt-2 py-2" >
              SyncTargets represents a physical kubernetes cluster which acts as a source or destination for sync operations.
              It is provider for compute resources and storage.
            </p>

            <!-- SyncTarget name -->
            <div class="grid grid-cols-4 gap-4">
              <div>
                <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Sync target name"
                v-model="newSyncTarget.metadata.name"
                required
                label="SyncTarget name"
                hint="SyncTarget is unique name representing remote k8s cluster"
                />
              </div>
            </div>

            <div class="mt-4">
              <p>
                Labels are used to identify SyncTargets and are used to group SyncTargets
                using locations.
              </p>
              <button
                class="px-4 py-2 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
                @click="addLabel(labels)"
                >
                Add label
              </button>
              <template v-for="(label, i) in labels" :key="`labels-${i}`">
                <div class="grid grid-cols-3 gap-1 py-2">
                  <div>
                    <input
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="label.key"
                        label="Key"
                        outlined
                      />
                  </div>
                  <div>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="label.value"
                      label="Value"
                      outlined
                    />
                  </div>
                <div>
                  <button
                    class="px-6 py-2 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
                    @click="deleteLabel(i)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </button>
                </div>
              </div>
            </template>
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
import { V1alpha1SyncTarget } from "@/api/kcp";
import { WorkspacedSyncTarget } from "@/store/synctargets/types";

export default defineComponent({
    name: "CreateSyncTarget",

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
        newSyncTarget: {
          metadata: {
            name: "",
            labels: {},
          },
        } as V1alpha1SyncTarget,
      }
    },

    computed: {
      ...mapGetters("synctargetModule", {
        error: "error",
        loading: "loading",
      }),
    },

    methods: {
      ...mapActions("synctargetModule", [
        "createSyncTargetActions",
      ]),
      ...mapActions("notificationModule", [
        "setNotification",
      ]),

      onSubmit() {
        let payload: WorkspacedSyncTarget
        payload = {} as WorkspacedSyncTarget
        payload.synctarget = this.newSyncTarget
        payload.workspace = this.workspace

        // convert labels to payload
        payload.synctarget.metadata.labels = {}
        for (let i = 0; i < this.labels.length; i++) {
          if (this.labels[i].key != "") {
            payload.synctarget.metadata.labels[this.labels[i].key] = this.labels[i].value
          }
        }

        this.createSyncTargetActions(payload).then(() => {
          if (this.error == "") {
            this.setNotification("SyncTarget "+payload.synctarget.metadata?.name+" created successfully")
            this.open = false;
            this.newSyncTarget = {} as V1alpha1SyncTarget;
          }
        });
      },
      // addLabels add empty line to labels UI for more labels
      addLabel(labels: any) {
        labels.push({key: "", value: ""})
      },
      // deleteLabel deletes label from labels UI
      deleteLabel(index: number) {
        this.labels.splice(index, 1)
      },
    },
  })

  </script>
  <style>
    .modal {
      transition: opacity 0.25s ease;
    }
    .md\:max-w-md {
      max-width: 75rem;
    }

  </style>
