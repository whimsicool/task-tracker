export interface Task {     //`interface` describes the shape of an object, export lets other files import it
    id: number
    title: string
    done: boolean
}