<script setup lang="ts">
import Pass from "~/assets/icons/password.svg";
import Email from "~/assets/icons/email.svg";
import {useAuthStore} from "~/store/UseAuthStore";

interface SignInForm {
    email: string;
    password: string;
}

const authStore = useAuthStore();
const isPasswordVisible = ref(false);
const formData = ref<SignInForm>({
    email: "",
    password: "",
});

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};

async function handleSignIn() {
    try {
        const data = await useApi<{access_token: string; user: any}>("/auth/login", {
            method: "POST",
            body: formData.value,
        });

        authStore.setToken(data.access_token);
        authStore.setUser(data.user);
        formData.value = {email: "", password: ""};
        alert("Sign-in successful");
        await navigateTo("/dashboard");
    } catch (error: any) {
        alert("Sign-in failed");
        console.log(error);
    }
}
</script>

<template>
    <AuthForm action="/sign-in" method="POST" @submit.prevent="handleSignIn">
        <AuthFormTitle>Sign In To Eatly</AuthFormTitle>

        <AuthFormBtns />

        <AuthOr />

        <AuthFormField>
            <label class="form__label visually-hidden" for="email">Email</label>
            <Email class="form__field-icon" />
            <AuthFormInput v-model="formData.email" type="email" autocomplete="off" id="email" name="email" placeholder="enter your email" />
        </AuthFormField>

        <AuthFormField class="form__field--last">
            <label class="form__label visually-hidden" for="password">Password</label>
            <Pass class="form__field-icon" />
            <div>
                <AuthFormInput v-model="formData.password" :type="isPasswordVisible ? 'text' : 'password'" id="password" name="password" placeholder="Password" autocomplete="new-password" />

                <AuthEye :is-visible="isPasswordVisible" @toggle="togglePasswordVisibility" />
            </div>

            <NuxtLink class="form__reset" to="/reset">Forgot Password ?</NuxtLink>
        </AuthFormField>

        <BaseDefaultBtn class="form__submit" type="submit" style="width: 100%; margin-bottom: 15px; text-transform: uppercase">Sign In</BaseDefaultBtn>

        <AuthFormSwitch :switch="true" />
    </AuthForm>
</template>

<style scoped lang="scss">
.form__reset {
    position: absolute;
    bottom: 10px;
    right: 0;
    transform: translateY(calc(100% + 12px));
    color: rgba(108, 95, 188, 0.7);
    font-family: Poppins;
    font-size: 15.564px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@include tablet {
    .form__reset {
        font-size: 12px;
    }
}
</style>
