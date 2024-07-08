'use client'

import BackButton from "@/components/Backbutton";
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: 'First name is required.'
    }),
    lastName: z.string().min(1, {
        message: 'Description of the genre is required.'
    }),
    publisher: z.string().min(1, {
        message: 'Name of the publisher is required.'
    })
})

const AddAuthorForm= () => {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            publisher: ''
        }
    });
    
    const handleSubmit = (data: z.infer<typeof formSchema>) => {
       
        try{

        console.log(data, "add author data")
        toast({
            title: 'Author has been added successfully',
            description: `Updated at ${new Date()}`
       });

       }catch(error){
            toast({
                variant: "destructive",
                title: 'Unable to add author',
                description: `${error}`
            });
       }
       
     
    }

    return (
        <div>
             <BackButton text="Go back to the Dashboard" link="/protected/admin"/>
             <h3 className="text-2xl mb-4"> Add Author</h3>

             <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">First Name</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter author's first name" 
                                        {...field} 
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
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Last Name</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter author's last name" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="publisher"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Publisher</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter author's last name" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    <Button className="w-full dark:bg-slate-800 dar:text-white">
                        Add Author
                    </Button>
                </form>
             </Form>
        </div>
      );
}
 
export default AddAuthorForm;