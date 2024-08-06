export const QUERY_KEYS = {
  TASKS_LIST: ['tasks'],
  ROLE_LIST: ['roles'],
  ROLE_BY_ID: (id: number | string) => ['role', id],
}

export const COOKIE_KEYS = {
  ACCESS_TOKEN: 'nekto_ssecca',
  REFRESH_TOKEN: 'hserfer_nekto',
}
