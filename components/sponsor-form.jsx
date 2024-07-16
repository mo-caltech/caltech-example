
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function SponsorForm() {
  return (
    (<div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold"></h1>
      </div>
      <form className="mt-8 space-y-6">
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
            placeholder="Enter a subject" />
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
              placeholder="Enter your name" />
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
              placeholder="Enter your email" />
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
            placeholder="Enter your message" />
        </div>
        <div>
          <Label htmlFor="role" className="block text-sm font-medium">
            I am...
          </Label>
          <Select id="role" name="role" required className="mt-1 block w-full">
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
    </div>)
  );
}
