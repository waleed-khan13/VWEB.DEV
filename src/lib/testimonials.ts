
export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  imageId: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    quote: "VWEB.DEV transformed our vision into a stunning reality. Their team is professional, skilled, and an absolute pleasure to work with. The results exceeded all our expectations.",
    imageId: "testimonial-1",
  },
  {
    id: "test2",
    name: "John Smith",
    title: "CTO, TechForward",
    quote: "The technical expertise at VWEB.DEV is second to none. They tackled our complex requirements with ease and delivered a robust, scalable solution on time and on budget.",
    imageId: "testimonial-2",
  },
  {
    id: "test3",
    name: "Emily White",
    title: "Product Manager, NextGen Apps",
    quote: "Working with VWEB.DEV felt like a true partnership. Their proactive communication and attention to detail made the entire development process seamless and efficient.",
    imageId: "testimonial-3",
  },
  {
    id: "test4",
    name: "Michael Brown",
    title: "Founder, Creative Co.",
    quote: "Their design team is exceptional. They took our initial concept and turned it into a beautiful, user-friendly interface that our customers love. Highly recommended!",
    imageId: "testimonial-4",
  }
];
