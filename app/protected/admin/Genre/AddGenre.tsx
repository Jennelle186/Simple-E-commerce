'use client'

import BackButton from "@/components/Backbutton";
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"


const formSchema = z.object({
    genreName: z.string().min(1, {
        message: 'Name of the genre is required.'
    }),
    description: z.string().min(1, {
        message: 'Description of the genre is required.'
    }),
})

const AddGenreForm = () => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            genreName: '',
            description: ''
        }
    });
    
    const handleSubmit = (data: z.infer<typeof formSchema>) => {
       toast({
            title: 'Genre has been updated successfully',
            description: `Updated at ${new Date()}`
       });
    }

    return (
        <div>
            <BackButton text="Go back to the Dashboard" link="/protected/admin"/>
            <h3 className="text-2xl mb-4"> Add Genre</h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="genreName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Genre</FormLabel>
                            <FormControl>
                                <Input 
                                    className="bg-slate-100 dark:bg-slate-500 border-0 
                                    focus-visible:ring-0 text-black 
                                    dark:text-white
                                    focus-visible:ring-offset-0" 
                                    placeholder="Enter Genre" 
                                    {...field} 
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="bg-slate-100 dark:bg-slate-500 border-0 
                                    focus-visible:ring-0 text-black 
                                    dark:text-white
                                    focus-visible:ring-offset-0" 
                                    placeholder="Enter description of the Genre" 
                                    {...field} 
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="w-full dark:bg-slate-800 dar:text-white">
                        Add Genre
                    </Button>
                </form>
            </Form>

        </div>
      );
}
 
export default AddGenreForm;