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
  export type NamedObject = {
    id: string
    name: string
  }
  export enum RoleType {
    ADMIN = 1,
    USER = 2,
  }
  export type APIBaseResponse = {
    KBZRefNo: string
  }
  export type APIDataResponse<T> = APIBaseResponse & {
    Data: T
  }
  export type TaskEntity = {
    PK: string
    SK: string
    employee_id: string
    employee_name: string
    task_name: string
    remark: string
    task_category_id: string
    task_category_name: string
    sub_task_category_id: string
    sub_task_category_name: string
    task_start: Date
    task_end: Date
    task_status_id: string
    task_status_name: string
    task_level_id: string
    task_level_name: string
    project_id: string
    project_name: string
    team_id: string
    team_name: string
    department_id: string
    department_name: string
    log_date: Date
  }
}

export {}
