'use client'

import BackButton from "@/components/Backbutton";
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
import { toast, useToast } from "@/components/ui/use-toast"
import { formSchema } from "./formSchema";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

import { Textarea } from "@/components/ui/textarea";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { cn } from "@/lib/utils"
// import { bookFormat } from "./bookFormat";
import { Language, languages } from './languages';
import { Check, ChevronsUpDown } from "lucide-react";
import { CommandList } from "cmdk";


const AddBookForm = () => {

    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            isbn: 0,
            length:0,
            width: 0,
            height: 0,
            publisher: '',
            publicationDate: new Date(),
            pages: 0,
            genre: '',
            author: '',
            format: 'Hardcover',
            productLanguage: '',
            description: ''
        }
    })
    

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
       try{

        console.log(data, "add book data")

        toast({
            title: "Book has been updated successfully",
            description: `Updated at ${new Date()}`
        })

       }catch(error){
        toast({
            variant:"destructive",
            title: "Unable to add book",
            description: `${error}`
        })
       }
    }

    return ( 
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Book Information</h2>  
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-6 sm:col-span-3">
                    <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Title of the book</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter title of the book" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                </div>

                <div className="col-span-6 sm:col-span-3">
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">ISBN</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number"
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter ISBN" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                </div>
    
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <FormField
                            control={form.control}
                            name="length"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Length</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number"
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter length of the book" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                </div>
    
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <FormField
                            control={form.control}
                            name="width"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Width</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter width of the book" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <FormField
                            control={form.control}
                            name="height"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Height</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0" 
                                        placeholder="Enter height of the book" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                </div> 

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <FormField
                            control={form.control}
                            name="pages"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Pages (number) </FormLabel>
                                <FormControl>
                                    <Input 
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black 
                                        dark:text-white
                                        focus-visible:ring-offset-0 mt-4" 
                                        placeholder="Enter Page" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                    />
                </div>

                <div className="col-span-4">
                    <FormField
                        control={form.control}
                        name="productLanguage"
                        render={({ field }) => (
                            <FormItem className="flex flex-col mt-2">
                            <FormLabel>Language</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn("bg-slate-100 dark:bg-slate-500 border-0  focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0 mt-4" ,
                                        !field.value && "text-muted-foreground"
                                    )}
                                    >
                                    {field.value
                                        ? languages.find(
                                            (language: { value: string; }) => language.value === field.value
                                        )?.label
                                        : "Select language"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search language..." />
                                    <CommandList>
                                    <CommandEmpty>No language found.</CommandEmpty>
                                        <CommandGroup>
                                            {languages.map((language: Language) => (
                                                <CommandItem
                                                value={language.label}
                                                key={language.value}
                                                onSelect={() => {
                                                    form.setValue("productLanguage", language.value)
                                                }}
                                                >
                                                <Check
                                                    className={cn(
                                                    "mr-2 h-4 w-4",
                                                    language.value === field.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                    )}
                                                />
                                                {language.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
    
        
                <div className="col-span-6 sm:col-span-3">
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
                                        placeholder="Enter name of the publisher" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                    />
                </div>
    
                <div className="col-span-6 sm:col-span-3">
                    <FormField
                        control={form.control}
                        name="publicationDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel className="uppercase mt-2 text-xs font-bold text-zinc-500 dark:text-white">Publication Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                    variant={"outline"}
                                    className={cn("bg-slate-100 dark:bg-slate-500 border-0  focus-visible:ring-0 text-black  dark:text-white focus-visible:ring-offset-0" ,
                                        !field.value && "text-muted-foreground"
                                    )}
                                    >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                
                {/* PUT LANGUAGE AND GENRE HERE */}
            
                
             
                <div className="col-span-6">
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
                                        placeholder="Enter Description of the book" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                </div>
                </div>
            </div>

            </div>
                <Button className="w-full dark:bg-slate-800 dar:text-white items-center">
                       Add Book
                </Button>     
           
            </form>
        </Form>
     );
}
 
export default AddBookForm;