'use client'
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      subject,
      name,
      email,
      message,
      role,
    };

    try {
      const response = await fetch("https://formcarry.com/s/7JQ03hDE6Vb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("There was an error submitting the form.");
    }
  };

  if (error) {
    return (
      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <p className="text-base text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <p className="text-3xl font-bold">We've received your message, thank you for contacting us!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-base text-slate-600">
          Have a question or want to get in touch with our Formula SAE team? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            className="mt-1 block w-full"
            placeholder="Enter a subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="message" className="block text-sm font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="role" className="block text-sm font-medium">
            I am...
          </Label>
          <Select
            id="role"
            name="role"
            required
            className="mt-1 block w-full"
            onValueChange={setRole}
            value={role}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
              <SelectItem value="sponsor">Sponsor</SelectItem>
              <SelectItem value="press">Press</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-full sm:w-auto">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}