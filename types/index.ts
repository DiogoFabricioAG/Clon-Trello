export type ID = string; // Sera con Nanoid

export interface Task{
    id: ID,
    title: string,
    createdAt: Date,
}

export interface Column{
    id: ID,
    title: string,
    tasks: Task[],
}

// Export para utilizarlos afuera de este index.ts