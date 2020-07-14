<template>
  <div class="custom-input">
    <ValidationProvider
      v-slot="{ errors }"
      :name="label"
      :rules="rules"
    >
      <v-text-field
        class="custom-input"
        outlined
        :label="label"
        :color="ifValid(errors, inputVal) ? '#00B669' : '#8B98AB'"
        :type="type"
        v-model="inputVal"
        :class="{
          'marked': ifValid(errors, inputVal),
        }"
        append-icon="mdi-map-marker"
        :error-messages="errors[0]"
      >
        <template v-slot:append>
          <img
            class="custom-input__icon"
            :height="ifValid(errors, inputVal) ? '9' : iconHeight"
            :src="ifValid(errors, inputVal) ? greenMark : defaultIco"
            :alt="alt"
          >
        </template>
      </v-text-field>
    </ValidationProvider>
  </div>
</template>

<script>
    import greenMark from '@/assets/img/auth/greenMark.png'
    import empty from '@/assets/img/auth/empty.png'
    import {ValidationObserver, ValidationProvider} from "vee-validate"

    export default {
        name: "CustomInput",
        components: {
            ValidationProvider,
            ValidationObserver
        },
        data: () => ({
            greenMark
        }),
        props: {
            label: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            defaultIco: {
                type: String,
                default: empty
            },
            alt: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            rules: {
                type: String,
                default: ''
            },
            iconHeight: {
                type: String,
                default: ''
            }
        },
        computed: {
            inputVal: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                }
            }
        },
        methods: {
            ifValid(errors, inputVal) {
                return errors.length === 0 && inputVal.length !== 0;
            }
        }
    }
</script>
