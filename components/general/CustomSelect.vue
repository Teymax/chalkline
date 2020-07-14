<template>
  <div class="custom-input custom-input-select">
    <ValidationProvider
      v-slot="{ errors }"
      :name="label"
      :rules="rules"
    >
      <v-select
        v-model="inputVal"
        :items="items"
        menu-props="auto"
        :label="label"
        class="custom-input"
        append-icon="keyboard_arrow_down"
        outlined
        color="#8B98AB"
        :error-messages="errors[0]"
        :class="{
          'marked': inputVal.length > 0,
        }"
      >
      </v-select>
    </ValidationProvider>
  </div>
</template>

<script>
    import {ValidationObserver, ValidationProvider} from "vee-validate"
    export default {
        name: "CustomSelect",
        components: {
            ValidationProvider,
            ValidationObserver
        },
        props: {
            items: {
                type: Array,
                default: () => []
            },
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
    }
</script>
