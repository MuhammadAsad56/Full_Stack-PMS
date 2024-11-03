"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the schema with Zod
const formSchema = z.object({
  username: z.string().min(4,{message: "Username must be at least 4 characters."}).max(50),
  bio: z.string().min(15).max(120),
  hospital: z.string().min(4).max(50),
  days: z.array(z.string()), // Specify array elements are strings
  fees: z.string(),
  gender: z.string(),
  appointmentDate: z.date(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  number: z.string(),
  email: z.string().email(),
  address: z.string(),
});

export function ApplyDoctorForm() {
  // Initialize the form with useForm and Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "",
      appointmentDate: new Date(),
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      email: "",
      address: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="py-10">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter username" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="hospital"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter hospital name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="days"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available Days</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter available days" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="fees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fees</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter consultation fees" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter gender" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="appointmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Appointment Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="date"
                      placeholder="Select appointment date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter degree" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialization</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter specialization" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter experience in years" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter contact number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter email address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Enter bio" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
