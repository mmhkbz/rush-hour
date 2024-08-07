import {getDataList, GetDataListParam} from '@/api/common'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export const useGetDataList = (target: GetDataListParam) =>
  useQuery({
    queryKey: QUERY_KEYS.COMMON_DATA_LIST(target),
    queryFn: async () => getDataList(target),
    select: (response) =>
      response.Data
        ? response.Data.map((value) => ({
            label: value.name,
            value: value.id,
          }))
        : [],
  })
