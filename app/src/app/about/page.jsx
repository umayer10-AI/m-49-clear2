"use client";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
// import { redirect } from "next/navigation";
import React from 'react';
import { useForm } from "react-hook-form";

const About = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

    const a = async (v) => {
        console.log(v)

        const res = await fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(v)
        })

        const data = await res.json()
        console.log(data)

        if(data.ok){
            alert("Data Successfully")
            redirect("/")
        }

    }

    return (
        <div className='flex justify-center'>
            <Form className="w-full max-w-96" onSubmit={handleSubmit(a)}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" {...register("name", { required: true })}/>
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" {...register("email", { required: true })}/>
            <FieldError />
          </TextField>
          
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default About;