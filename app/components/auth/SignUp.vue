<script setup lang="ts">
import User from "~/assets/icons/user.svg";
import Pass from "~/assets/icons/password.svg";
import Email from "~/assets/icons/email.svg";

interface RegistrationForm {
    name: string;
    email: string;
    password: string;
}

const formData = ref<RegistrationForm>({
    name: "",
    email: "",
    password: "",
});

const isPasswordVisible = ref(false);
const errorMessage = ref();
const activeField = ref<keyof RegistrationForm | null>(null);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationErrors = computed(() => {
    return {
        name: formData.value.name.length < 2,
        password: formData.value.password.length < 6,
        email: !emailRegex.test(formData.value.email),
    };
});

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};

async function handleRegister() {
    if (!validationErrors.value) return;

    try {
        await useApi("/auth/register", {
            method: "POST",
            body: formData.value,
        });

        formData.value = {name: "", email: "", password: ""};
        alert("Sign-up successful");
        await navigateTo("/sign-in");
    } catch (error: any) {
        errorMessage.value = error.data?.detail || "Sign-up failed";
        alert("Sign-up failed");
    }
}
</script>

<template>
    <AuthForm action="/sign-up" method="POST">
        <AuthFormTitle>Sign Up To Eatly</AuthFormTitle>

        <AuthFormBtns />

        <AuthOr />

        <AuthFormField>
            <label class="form__label visually-hidden" for="name">Full Name</label>
            <User class="form__field-icon" />
            <AuthFormInput v-model="formData.name" @focus="activeField = 'name'" @blur="activeField = null" type="text" id="name" name="username" placeholder="full name" autocomplete="name" />
            <transition name="fade">
                <p class="inputError" v-if="activeField === 'name' && validationErrors.name">Name must be at least 2 characters long.</p>
            </transition>
        </AuthFormField>

        <AuthFormField>
            <label class="form__label visually-hidden" for="email">Email</label>
            <Email class="form__field-icon" />
            <AuthFormInput v-model="formData.email" @focus="activeField = 'email'" @blur="activeField = null" type="email" autocomplete="off" id="email" name="email" placeholder="enter your email" />
            <transition name="fade">
                <p class="inputError" v-if="activeField === 'email' && validationErrors.email">Invalid email</p>
            </transition>
        </AuthFormField>

        <AuthFormField class="form__field--last">
            <label class="form__label visually-hidden" for="password">Password</label>
            <Pass />
            <div>
                <AuthFormInput
                    v-model="formData.password"
                    @focus="activeField = 'password'"
                    @blur="activeField = null"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    id="password"
                    name="password"
                    placeholder="Password"
                    autocomplete="new-password" />

                <AuthEye :is-visible="isPasswordVisible" @toggle="togglePasswordVisibility" />
            </div>
            <transition name="fade">
                <p class="inputError" v-if="activeField === 'password' && validationErrors.password">Password must be at least 6 characters long</p>
            </transition>
        </AuthFormField>

        <BaseDefaultBtn class="form__submit" @click.prevent="handleRegister" type="button" style="width: 100%; margin-bottom: 15px; text-transform: uppercase">Sign Up</BaseDefaultBtn>

        <AuthFormSwitch :switch="false" />
    </AuthForm>
</template>

<style scoped lang="scss">
.inputError {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin: 0 auto;
}

@include tablet-small {
    .inputError {
        font-size: 10px;
    }
}
</style>
