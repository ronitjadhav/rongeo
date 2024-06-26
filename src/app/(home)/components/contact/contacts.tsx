"use client";

import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';
import { Label } from "@/app/(home)/components/ui/label";
import { Input } from "@/app/(home)/components/ui/input";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [input, setInput] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState({ email: false, required: false });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        checkRequired();
    };

    const checkRequired = () => {
        setError({ ...error, required: !input.name || !input.email || !input.message });
    };

    const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        checkRequired();

        if (error.required || error.email) {
            toast.error('Please fill in all required fields correctly.');
            return;
        }

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            toast.error('Email service configuration is missing.');
            return;
        }

        try {
            const emailRes = await emailjs.send(serviceID, templateID, input, publicKey);

            if (emailRes.status === 200) {
                toast.success('Message sent successfully!');
                setInput({ name: '', email: '', message: '' });
            }
        } catch (err) {
            const error = err as any; // Typecast err to any
            toast.error(error?.text || error.message || 'Failed to send message');
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="max-w-lg mx-auto mt-12 p-6 bg-white dark:bg-black shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Contact Me</h1>
            <form onSubmit={handleSendMail} className="space-y-4">
                <LabelInputContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                    />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                    />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                        id="message"
                        name="message"
                        value={input.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Your message"
                    />
                </LabelInputContainer>
                <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Send <TbMailForward className="ml-2" />
                </button>
            </form>
        </div>
    );
}

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
