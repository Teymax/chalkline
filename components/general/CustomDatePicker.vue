<template>
  <div class="custom-input-date-picker">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <ValidationProvider
          v-slot="{ errors }"
          :name="label"
          :rules="rules"
        >
          <v-text-field
            v-model="date"
            :label="label"
            append-icon="event"
            readonly
            class="custom-input"
            outlined
            :error-messages="errors[0]"
            :class="{
          'marked': ifValid(errors, date),
        }"
            v-bind="attrs"
            v-on="on"
          >
            <template v-slot:append>
              <img
                class="custom-input__icon"
                :height="ifValid(errors, date) ? '9' : iconHeight"
                :src="ifValid(errors, date) ? greenMark : defaultIco"
                :alt="alt"
              >
            </template>
          </v-text-field>
        </ValidationProvider>
      </template>
      <v-date-picker
        outlined
        ref="picker"
        v-model="date"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
    import {ValidationObserver, ValidationProvider} from "vee-validate"
    import greenMark from '@/assets/img/auth/greenMark.png'

    export default {
        name: "CustomDatePicker",
        components: {
            ValidationProvider,
            ValidationObserver
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            rules: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            defaultIco: {
                type: String,
                default: ''
            },
            iconHeight: {
                type: String,
                default: ''
            },
        },
        data: () => ({
            date: '',
            menu: false,
            greenMark
        }),
        watch: {
            menu(val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
            },
        },
        methods: {
            save(date) {
                this.$refs.menu.save(date)
            },
            ifValid(errors, inputVal) {
                return errors.length === 0 && inputVal.length !== 0;
            }
        },
    }
</script>
