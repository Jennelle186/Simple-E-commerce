import * as z from 'zod';

export const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required."
    }),
    isbn: z.coerce
        .number({
        required_error: "ISBN is required",
        invalid_type_error: "ISBN must be a number",
        })
        .int()
        .positive()
        .min(1, { message: "ISBN should be at least 1" }),
    length: z.coerce
        .number({
        required_error: "ISBN is required",
        invalid_type_error: "ISBN must be a number",
        })
        .int()
        .positive()
        .min(1, { message: "ISBN should be at least 1" }),
    width: z.coerce
        .number({
        required_error: "Width of the book is required",
        invalid_type_error: "Width must be a number",
        })
        .int()
        .positive()
        .min(1, { message: "Width should be at least 1" }),
    height: z.coerce
        .number({
        required_error: "Heigh of the book is required",
        invalid_type_error: "Height must be a number",
        })
        .int()
        .positive()
        .min(1, { message: "Height should be at least 1" }),
    publisher: z.string().min(1, {
        message: "Publisher is required."
    }),
    publicationDate: z.date({ message: "Invalid date stirng."}),
    pages: z.coerce
        .number({
        required_error: "Pages of the book is required",
        invalid_type_error: "Page must be a number",
        })
        .int()
        .positive()
        .min(1, { message: "Page should be at least 1" }),
    genre: z.string().min(1, {
        message: "Genre is required."
    }),
    author: z.string().min(1, {
        message: "Author is required."
    }),
    format: z.enum(['Hardcover', 'Paperback', 'Board Book', 'Spiral-bound', 'Leather-bound', 'Large Print']),
    productLanguage: z.string().min(1, {
        message: "Language of the book is required."
    }),
    description: z.string().min(1, {
        message: "Description of the book is required."
    })
})

