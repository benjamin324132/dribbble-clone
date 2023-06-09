"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Inputs";
import { useState } from "react";
import axios from "axios";
import { Shot } from "@/types/types";
import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";

interface UploadFormProps {
  shot?: Shot;
}

const UploadForm: React.FC<UploadFormProps> = ({ shot }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, setValue, watch, formState:{
    errors
  } } =
    useForm<FieldValues>({
      defaultValues: {
        img: shot?.img || "",
        name: shot?.name || "",
        description: shot?.description || "",
      },
    });

  const img = watch("img");

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);
    try {
      if (shot) {
        const { data } = await axios.put(`/api/shots/${shot._id}`, {
          img: values.img,
          name: values.name,
          description: values.description,
        });
      } else {
        const { data } = await axios.post("/api/shots", {
          img: values.img,
          name: values.name,
          description: values.description,
        });
        reset();
      }
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
      {!img ? (
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0]) {
              res[0].fileUrl;
              setValue("img", res[0].fileUrl);
            }
          }}
          onUploadError={(error: Error) => {
            console.log(`ERROR! ${error.message}`);
          }}
        />
      ) : (
        <Image src={img} alt="Shot image" width={600} height={600} />
      )}
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
      {errors && <h3>{errors.root?.message}</h3>}
      <button
        disabled={isLoading}
        className="w-full bg-[#ea4c89] py-2 px-3 rounded-md text-white font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        {shot ? "Edit" : "Save"}
      </button>
    </form>
  );
};

export default UploadForm;
