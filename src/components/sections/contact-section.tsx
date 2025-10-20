
"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { realms } from "@/lib/realms";
import { Mail, Send, Loader2, PlusCircle, MinusCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  companyName: z.string().min(1, "Company name is required."),
  phone: z.string().min(1, "Phone number is required."),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().min(1, "Please select a budget."),
  website: z.string().url("Please enter a valid URL."),
  socialMedia: z.array(z.object({
    value: z.string().url({ message: "Please enter a valid URL." }),
  })).min(1, "At least one social media link is required."),
  inspirationLinks: z.array(z.object({
    value: z.string().url({ message: "Please enter a valid URL." }),
  })).min(1, "At least one inspiration link is required."),
   projectDeliverables: z.array(z.string()).refine(value => value.length > 0, {
    message: "Please select at least one deliverable.",
  }),
  projectTimeline: z.string().min(1, "Please select a timeline."),
  referralSource: z.string().min(1, "Please let us know how you found us."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const budgetOptions = [
  "<$1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

const timelineOptions = [
    "Flexible",
    "Within 3 Months",
    "Urgent (Next 4-6 weeks)",
];

const referralOptions = [
    "Google / Search Engine",
    "Social Media",
    "Referral",
    "Blog Post",
    "Other",
];


export function ContactSection() {
  const { toast } = useToast();
  const { ref, isInView } = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const searchParams = useSearchParams();

  const allSubServices = realms.flatMap(realm => realm.sections.map(section => section.sectionTitle));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      phone: "",
      service: "",
      budget: "",
      website: "",
      socialMedia: [{ value: "" }],
      inspirationLinks: [{ value: "" }],
      projectDeliverables: [],
      projectTimeline: "",
      referralSource: "",
      message: "",
    },
  });

  useEffect(() => {
    // This effect runs only on the client, after hydration
    const service = searchParams.get('service');
    const deliverables = searchParams.get('deliverables');
    const budget = searchParams.get('budget');
    const timeline = searchParams.get('timeline');
    const message = searchParams.get('message');
    
    if (service) form.setValue('service', service);
    if (timeline) form.setValue('projectTimeline', timeline);
    if (message) form.setValue('message', message);
    
    if (deliverables) {
        try {
            const parsedDeliverables = JSON.parse(deliverables);
            if(Array.isArray(parsedDeliverables)) {
                form.setValue('projectDeliverables', parsedDeliverables);
            }
        } catch(e) {
            console.error("Failed to parse deliverables from URL", e);
        }
    }
    
    if (budget) {
        const [min] = budget.split('-').map(Number);
        const matchedBudget = budgetOptions.find(option => {
            if (option.startsWith('<')) {
                const limit = parseInt(option.replace(/<|\$|,/g, ''));
                return min < limit;
            }
            if (option.endsWith('+')) {
                const limit = parseInt(option.replace(/\+|,|\$/g, ''));
                return min >= limit;
            }
            const [optionMin] = option.split(' - ').map(o => parseInt(o.replace(/\$|,/g, '')));
            return min >= optionMin;
        });
        if(matchedBudget) form.setValue('budget', matchedBudget);
    }
  }, [searchParams, form]);
  
  const { fields: socialFields, append: appendSocial, remove: removeSocial } = useFieldArray({
    control: form.control,
    name: "socialMedia"
  });
  
  const { fields: inspirationFields, append: appendInspiration, remove: removeInspiration } = useFieldArray({
    control: form.control,
    name: "inspirationLinks"
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We&apos;ll get back to you soon.",
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contact" ref={ref} className={cn("py-20 md:py-32 bg-secondary/50 section-reveal", { 'is-visible': isInView })}>
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
                <Mail className="w-12 h-12 text-primary" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Let&apos;s Build Together</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                Have a project in mind? Fill out the form below and we&apos;ll get back to you to discuss your vision.
            </p>
            </div>
            <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                            <AccordionItem value="item-1">
                            <AccordionTrigger className="text-2xl font-headline font-semibold">1. Basic Information</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-8 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Your Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Your Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Innovate Inc." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+1 (555) 123-4567" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                            <AccordionTrigger className="text-2xl font-headline font-semibold">2. Company & Project Details</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-8 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Company Website</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://yourcompany.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="referralSource"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>How did you hear about us?</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                            <SelectValue placeholder="Select a source" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {referralOptions.map((option) => (
                                            <SelectItem key={option} value={option}>
                                                {option}
                                            </SelectItem>
                                            ))}
                                        </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                </div>
                                <div className="space-y-4">
                                    <FormLabel>Social Media Links</FormLabel>
                                    <FormDescription>Please provide links to your company's social media profiles.</FormDescription>
                                    {socialFields.map((field, index) => (
                                    <FormField
                                        key={field.id}
                                        control={form.control}
                                        name={`socialMedia.${index}.value`}
                                        render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center gap-2">
                                            <FormControl>
                                                <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                                            </FormControl>
                                            <Button type="button" variant="ghost" size="icon" onClick={() => removeSocial(index)} disabled={socialFields.length <= 1}>
                                                <MinusCircle className="h-5 w-5 text-destructive" />
                                            </Button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    ))}
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendSocial({ value: "" })}
                                    >
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add Social Link
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    <FormLabel>Inspiration Links</FormLabel>
                                    <FormDescription>Share any links to websites or apps that inspire you.</FormDescription>
                                    {inspirationFields.map((field, index) => (
                                    <FormField
                                        key={field.id}
                                        control={form.control}
                                        name={`inspirationLinks.${index}.value`}
                                        render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center gap-2">
                                            <FormControl>
                                                <Input placeholder="https://inspiration.com" {...field} />
                                            </FormControl>
                                            <Button type="button" variant="ghost" size="icon" onClick={() => removeInspiration(index)} disabled={inspirationFields.length <= 1}>
                                                <MinusCircle className="h-5 w-5 text-destructive" />
                                            </Button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    ))}
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendInspiration({ value: "" })}
                                    >
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add Inspiration Link
                                    </Button>
                                </div>
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                            <AccordionTrigger className="text-2xl font-headline font-semibold">3. Project Specifics</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-8 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                    control={form.control}
                                    name="service"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Primary Service of Interest</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a primary service" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {realms.map((realm) => (
                                                <SelectItem key={realm.slug} value={realm.title}>
                                                {realm.title}
                                                </SelectItem>
                                            ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Estimated Budget</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a budget range" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {budgetOptions.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                {option}
                                                </SelectItem>
                                            ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="projectTimeline"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                        <FormLabel>Project Timeline</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a timeline" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {timelineOptions.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                {option}
                                                </SelectItem>
                                            ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="projectDeliverables"
                                    render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                        <FormLabel className="text-base">What specific services are you looking for?</FormLabel>
                                        <FormDescription>
                                            Select all that apply to your project. This helps us understand your needs better.
                                        </FormDescription>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {allSubServices.map((serviceTitle) => (
                                        <FormField
                                            key={serviceTitle}
                                            control={form.control}
                                            name="projectDeliverables"
                                            render={({ field }) => {
                                            return (
                                                <FormItem
                                                key={serviceTitle}
                                                className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground"
                                                >
                                                <FormControl>
                                                    <Checkbox
                                                    checked={field.value?.includes(serviceTitle)}
                                                    onCheckedChange={(checked) => {
                                                        return checked
                                                        ? field.onChange([...(field.value || []), serviceTitle])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== serviceTitle
                                                            )
                                                            )
                                                    }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {serviceTitle}
                                                </FormLabel>
                                                </FormItem>
                                            )
                                            }}
                                        />
                                        ))}
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Message</FormLabel>
                                        <FormControl>
                                        <Textarea
                                            placeholder="Tell us more about your project, goals, and any specific requirements you have..."
                                            className="min-h-[150px]"
                                            {...field}
                                        />
                                        </FormControl>
                                        <FormDescription>The more detail, the better!</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        
                        <div className="text-center pt-8">
                            <Button type="submit" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                                </>
                            ) : (
                                <>
                                Send Message <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                            </Button>
                        </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
