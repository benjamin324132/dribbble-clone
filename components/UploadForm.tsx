"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Inputs";
import { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      img: "",
      name: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/shots", {
        img: values.img,
        name: values.name,
        description: values.description,
      });

      console.log(data);
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto py-8 mt-10 flex flex-col gap-y-4"
    >
      <Input
        id="img"
        disabled={isLoading}
        {...register("img", { required: true })}
        placeholder="Image url"
      />
      <Input
        id="name"
        disabled={isLoading}
        {...register("name", { required: true })}
        placeholder="Name"
      />
      <Input
        id="description"
        disabled={isLoading}
        {...register("description", { required: false })}
        placeholder="Description"
      />
      <button
        disabled={isLoading}
        className="w-full bg-[#ea4c89] py-2 px-3 rounded-md text-white font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        Save
      </button>
    </form>
  );
};

export default UploadForm;
