<template>
  <section class="container">
    <h3 class="sign-up-title">
      Create a new account
    </h3>
    <p class="sign-up-info">
      Sign up with Action 247 for the latest information about legal sports betting in Tennessee, and we'll let you know when we have free sports games with great cash prizes.
    </p>
    <SignUpForm/>
  </section>
</template>

<script>
    import SignUpForm from "@/components/auth/SignUpForm";

    export default {
        name: "sign-up",
        components: {
            SignUpForm
        },
    }
</script>
