
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { testimonials as initialTestimonials, Testimonial } from "@/lib/testimonials";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ name: "", title: "", quote: "" });
  const testimonialImages = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-'));
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewTestimonial(prev => ({...prev, [id]: value }));
  }

  const handleAddTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.title || !newTestimonial.quote) {
        toast({
            variant: "destructive",
            title: "Missing Information",
            description: "Please fill out all fields to add a testimonial.",
        });
        return;
    }

    const newEntry: Testimonial = {
      id: `test-${Date.now()}`,
      imageId: `testimonial-${(testimonials.length % 4) + 1}`, // Cycle through placeholder images
      ...newTestimonial
    };

    setTestimonials(prev => [...prev, newEntry]);
    
    toast({
        title: "Success!",
        description: "New testimonial has been added.",
    });

    setIsDialogOpen(false);
    setNewTestimonial({ name: "", title: "", quote: "" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Testimonials</h1>
          <p className="text-muted-foreground mt-2">
            Manage your client testimonials.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Testimonial</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" placeholder="Jane Doe" value={newTestimonial.name} onChange={handleInputChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" placeholder="CEO, Innovate Inc." value={newTestimonial.title} onChange={handleInputChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="quote" className="text-right mt-2">
                  Quote
                </Label>
                <Textarea id="quote" placeholder="A glowing review..." value={newTestimonial.quote} onChange={handleInputChange} className="col-span-3 min-h-[100px]" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image
                </Label>
                 <p className="col-span-3 text-sm text-muted-foreground">
                    A placeholder will be assigned automatically.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddTestimonial}>Save Testimonial</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Quote</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map((testimonial) => {
               const image = testimonialImages.find(img => img.id === testimonial.imageId);
               return (
                  <TableRow key={testimonial.id}>
                    <TableCell>
                      <Avatar>
                        {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} />}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{testimonial.name}</TableCell>
                    <TableCell>{testimonial.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{testimonial.quote}</TableCell>
                  </TableRow>
               )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
