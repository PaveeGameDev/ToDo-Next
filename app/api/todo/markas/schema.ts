import {z} from "zod"

const schema = z.object({
    id: z.number(),
    active: z.boolean()
})

export default schema