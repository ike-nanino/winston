'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';



const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
    service: '',
  });
  
  // Static English translations
  const translations = {
    form: {
      title: "Contact Us",
      subtitle: "Fill out the form below and our team will get back to you shortly",
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        caseType: "Case Type",
        message: "Message"
      },
      placeholders: {
        firstName: "Enter your first name",
        lastName: "Enter your last name",
        email: "Enter your email",
        phone: "Enter your phone number",
        caseType: "Select your case type",
        message: "Tell us about your legal needs"
      },
      validation: {
        firstName: "First name must be at least 2 characters",
        lastName: "Last name must be at least 2 characters",
        email: "Please enter a valid email address",
        phone: "Phone number must be at least 6 characters",
        caseTypeRequired: "Please select a case type",
        message: "Message must be at least 10 characters",
        consent: "You must consent to our privacy policy"
      },
      caseOptions: [
        { value: "corporate", label: "Corporate Law" },
        { value: "litigation", label: "Litigation" },
        { value: "real-estate", label: "Real Estate" },
        { value: "ip", label: "Intellectual Property" },
        { value: "employment", label: "Employment Law" },
        { value: "other", label: "Other Legal Matter" }
      ],
      submitButton: "Send Message"
    },
    info: {
      title: "Contact Information",
      addressTitle: "Our Office",
      phoneTitle: "Phone",
      emailTitle: "Email",
      hoursTitle: "Office Hours",
      hours: "Monday-Friday: 9:00 AM - 5:00 PM\nSaturday: By Appointment Only\nSunday: Closed"
    },
    hero: {
      title: "Contact Morgan & Associates",
      subtitle: "Reach out to our legal team for expert consultation"
    },
    cta: {
      title: "Schedule a Confidential Consultation",
      description: "Our experienced attorneys are ready to discuss your legal needs",
      primaryButton: "Call Now: (443) 781-2428",
      secondaryButton: "Schedule Online Meeting"
    }
  };

  // Create schema with static error messages
  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: translations.form.validation.firstName,
    }),
    lastName: z.string().min(2, {
      message: translations.form.validation.lastName,
    }),
    email: z.string().email({
      message: translations.form.validation.email,
    }),
    phone: z.string().min(6, {
      message: translations.form.validation.phone,
    }),
    caseType: z.string({
      required_error: translations.form.validation.caseTypeRequired,
    }),
    message: z.string().min(10, {
      message: translations.form.validation.message,
    }),
    consent: z.boolean().refine(value => value === true, {
      message: translations.form.validation.consent,
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      caseType: "",
      message: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        toast.success("Message sent successfully!");
        setFormData({ firstName: '', lastName: '', email: '', phone: '', caseType:'', message: '', service: '' });
      } else {
        const resData = await response.json();
        setError(resData.message || 'Failed to send message.');
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError('An error occurred.');
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };


  // Animation refs
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, threshold: 0.1 });
  
  const infoRef = useRef(null);
  const isInfoInView = useInView(infoRef, { once: true, threshold: 0.1 });
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Contact Info Items
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: translations.info.addressTitle,
      content: "175 Bloor Street East Suite 302 South Tower Toronto"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: translations.info.phoneTitle,
      content: "(929) 266 7028"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: translations.info.emailTitle,
      content: "info@winstonco.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: translations.info.hoursTitle,
      content: translations.info.hours
    },
    {
    icon: <Globe className="h-6 w-6" />,
    title: "Winston & CO. Law Firm",
    content: "www.winstoncofirm.com"
  }
  ];

  return (

    <>
    <Head>
              <title>Contact Us</title>
              <meta name="description" content="Get in touch with Winston & Co. for expert legal consultation and support." />
            </Head>
    
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
     <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/images/contact.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        {/* <div className="absolute inset-0 bg-dark right-[680px] hidden lg:flex"></div> */}
        <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-madder mb-4">
              Contact Us
            </h1>
            <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">
              Get In Touch
            </h1>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div 
              ref={formRef}
              className="bg-white p-6 md:p-10 rounded-lg shadow-lg"
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-2">{translations.form.title}</h2>
              <p className="text-gray-600 mb-8">{translations.form.subtitle}</p>
              
              <Form {...form}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.form.fields.firstName}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={translations.form.placeholders.firstName} 
                              {...field}  
                              name="firstName" 
                              value={formData.firstName} 
                              onChange={handleChange} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.form.fields.lastName}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={translations.form.placeholders.lastName} 
                              {...field} 
                              name="lastName" 
                              value={formData.lastName} 
                              onChange={handleChange} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.form.fields.email}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={translations.form.placeholders.email} 
                              {...field} 
                              name="email" 
                              value={formData.email} 
                              onChange={handleChange} 
                            />
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
                          <FormLabel>{translations.form.fields.phone}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={translations.form.placeholders.phone} 
                              {...field}  
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleChange} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="caseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{translations.form.fields.caseType}</FormLabel>
                        <Select 
                          onValueChange={(value) => {
                            handleServiceChange(value);
                            field.onChange(value);
                          }} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={translations.form.placeholders.caseType} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {translations.form.caseOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{translations.form.fields.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={translations.form.placeholders.message} 
                            className="min-h-[120px]" 
                            {...field}
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-madder hover:bg-madder/80 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : translations.form.submitButton}
                  </Button>

                  {success && <p className="text-green-500">Your message has been sent successfully!</p>}
                </form>
              </Form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              ref={infoRef}
              className="lg:pl-8"
              initial="hidden"
              animate={isInfoInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold mb-8"
                variants={fadeInUp}
              >
                {translations.info.title}
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
                variants={staggerContainer}
              >
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col"
                    variants={fadeInUp}
                  >
                    <div className="mb-4 text-madder">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </motion.div>
                ))}
              </motion.div>

                          <div className="mt-12 flex justify-center">
  <Image 
    src="/images/canada.png" 
    alt="Canada Map" 
    width={200} 
    height={100} 
    className=""
  />
</div>
           
            </motion.div>



          </div>
        </div>
      </section>
      
     
    </div>

    </>
  );
};

export default ContactPage;