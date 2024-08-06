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
  type APIBaseResponse = {
    KBZRefNo: string
  }
  export type APIDataResponse<T> = APIBaseResponse & {
    Data: T
  }
  export type APIErrorResponse = APIBaseResponse & {
    Data: {}
    Error: {
      Code: string
      Message: string
      Details: {
        ErrorCode: string
        ErrorDescription: string
      }[]
    }
  }
  export type CustomInfoResponse = {
    message: string
    error: boolean
  }
}

export {}
