<template>
    <v-form class="sign-up-form" onsubmit="signUp">
      <CustomInput
        label="E-mail"
        v-model="form.email"
        type="email"
        :default-ico="mailIco"
        alt="email"
        rules="email|required"
        icon-height="11"
      />
      <CustomInput
        label="Password"
        v-model="form.password"
        type="password"
        :default-ico="lockIco"
        alt="password"
        rules="password|required"
        icon-height="14"
      />
      <CustomInput
        label="Username"
        v-model="form.username"
        type="text"
        :default-ico="userIco"
        alt="username"
        rules="required"
        icon-height="14"
      />
      <p class="sign-up-description">
        This will be used to identify you on the leaderboard.
      </p>
      <CustomInput
        label="First name"
        v-model="form.firstName"
        type="text"
        alt="First Name"
        rules="required"
        icon-height="1"
      />
      <CustomInput
        label="Last name"
        v-model="form.lastName"
        type="text"
        alt="Last Name"
        rules="required"
        icon-height="1"
      />
      <CustomSelect
        label="State of residence"
        rules="required"
        v-model="form.state"
        :items="items"
      />
      <p class="sign-up-description">
        You must reside in one of the states listed above.
      </p>
      <CustomDatePicker
        label="Date of birth"
        rules="required"
        v-model="form.dateOfBirth"
        alt="Date of birth"
        :default-ico="dateIco"
        icon-height="13"
      />
      <p class="sign-up-description">
        You must be at least 21 years of age to register.
      </p>
      <v-checkbox
        v-model="checkbox"
        label="I'd like to hear about offers from Action 247."
      ></v-checkbox>
      <v-btn @click="signUp">asd</v-btn>
    </v-form>
</template>

<script>
  import mailIco from '@/assets/img/auth/mailIco.png'
  import lockIco from '@/assets/img/auth/lockIco.png'
  import userIco from '@/assets/img/auth/userIco.png'
  import dateIco from '@/assets/img/auth/dateIco.png'
  import CustomInput from '@/components/general/CustomInput'
  import CustomSelect from '@/components/general/CustomSelect'
  import CustomDatePicker from '@/components/general/CustomDatePicker'

    export default {
        name: "SignUpForm",
        components: {
            CustomInput,
            CustomSelect,
            CustomDatePicker
        },
        methods: {
            signUp() {
                console.log(this.form.email);
            }
        },
        data: () => ({
            mailIco,
            lockIco,
            userIco,
            dateIco,
            email: '',
            password: '',
            errors: [],
            items: [
                'asd',
                'dsa',
                'ddd'
            ],
            checkbox: false,
            form: {
                email: '',
                password: '',
                username: '',
                firstName: '',
                lastName: '',
                state: '',
                dateOfBirth: '',
            }
        })
    }
</script>
