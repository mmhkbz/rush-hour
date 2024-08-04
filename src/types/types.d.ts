declare global {
  export type Task = {
    id: string
    name: string
    status: TaskStatus
    complexity: TaskComplexity
    createdAt: Date
    updatedAt?: Date
    fromTime?: Date
    toTime?: Date
    projectName?: string
    projectManagerName?: string
    businessAnalystName?: string
    staffId: string
    staffName: string
    category?: string
    departmentName?: string
    subTaskName?: string
  }
  export type TaskStatus = 'completed' | 'in-progress' | 'planned' | 'pending'
  export type TaskComplexity = 'Low' | 'Medium' | 'High'
}

export {}
