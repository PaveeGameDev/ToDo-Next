import {z} from "zod"

const schema = z.object({
    title: z.string().min(2).max(100),
    text: z.string().min(2).max(1000)
})

export default schema