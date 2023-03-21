<template>
  <div class="inline px-6 py-2 mt-3">

      <button
        @click="this.open = true"
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Create Location
      </button>

      <div
        :class="`modal ${
          !this.open && 'opacity-0 pointer-events-none'
        } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
      >
        <div
          @click="this.open = false"
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
              <div class="z-50 cursor-pointer modal-close" @click="this.open = false">
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

            <form
              :obj="this.form"
              >
                <label class="text-xs">Name</label>

                <div class="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    v-model="this.form.name"
                    class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  />

              </div>
            </form>

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
import { WorkspacedLocation } from "@/store/workspaces/types";
import { V1alpha1Location } from "@/api/kcp";

  export default defineComponent({
    name: "CreateLocation",

    props: {
      workspace: {
        type: V1alpha1Workspace,
        required: true,
      },
    },

    data () {
      return {
        open: false,
        form:  {
          name: "",
        },
      }
    },

    computed: {
      ...mapGetters("workspaceModule", {
        error: "error",
        loading: "loading",
      }),
    },

    methods: {
      ...mapActions("workspaceModule", [
        "createLocationActions",
      ]),
      ...mapActions("notificationModule", [
        "setNotification",
      ]),

      onSubmit() {
        let obj : V1alpha1Location =  {
          metadata: {
            name: this.form.name,
          },
        };

        let payload: WorkspacedLocation
        payload = {} as WorkspacedLocation
        payload.location = obj
        payload.workspace = this.workspace

        this.createLocationActions(payload).then(() => {
          if (this.error == "") {
            this.setNotification("Location "+obj.metadata?.name+" created successfully")
            this.open = false;
            this.form.name = "";
          }
        });
      },
    },

  })

  </script>
  <style>
    .modal {
      transition: opacity 0.25s ease;
    }
  </style>
