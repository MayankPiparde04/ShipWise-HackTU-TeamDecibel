import { AnimatedTestimonials } from "./Animated-testimonials";
import img1 from "../assets/frontpage/ai dimension detection.png";
import img2 from "../assets/frontpage/ai for bill.png";
import img3 from "../assets/frontpage/buffer suggestion.png";
import img4 from "../assets/frontpage/delivery optimization.png";
import img5 from "../assets/frontpage/ev routing.png";
import img6 from "../assets/frontpage/optimal packing.png";
import img7 from "../assets/frontpage/orientation check.png";
import img8 from "../assets/HeroLogo.webp";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src : img6,
      // src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=10&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src : img4,
      // src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=10&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src : img6,
      // src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=10&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src : img2,
      // src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=10&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src : img5,
      // src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=10&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
