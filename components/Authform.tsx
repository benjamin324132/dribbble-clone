"use client";

import { useState } from "react";
import Heading from "./Heading";
import Input from "./Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import DribbbleIcon from "@/icons/dribbble";

interface AuthFormProps {
  isRegister?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);
    if (isRegister) {
      try {
        const { data } = await axios.post("/api/users", {
          name: values.name,
          email: values.email,
          password: values.password,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.ok) {
          router.refresh();
          router.replace("/");
        }

        if (callback?.error) {
          console.log(callback?.error);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-xl p-4">
      <div className="grid place-items-center mb-4">
        <Link href="/">
          <DribbbleIcon />
        </Link>
      </div>
      <Heading
        center
        title={isRegister ? "Sign up" : "Log in"}
        subtitle={`${
          isRegister ? "Sign up" : "Log in"
        } into your account and start sharing your work`}
      />
      <form
        className="mt-4 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isRegister ? (
          <Input
            id="name"
            placeholder="Name"
            disabled={isLoading}
            {...register("name", { required: isRegister })}
          />
        ) : null}
        <Input
          id="email"
          placeholder="Email"
          disabled={isLoading}
          {...register("email", { required: true })}
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          disabled={isLoading}
          {...register("password", { required: true })}
        />
        <button
          disabled={isLoading}
          className="w-full bg-[#ea4c89] py-2 px-3 rounded-md text-white font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isRegister ? "Sign up" : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
