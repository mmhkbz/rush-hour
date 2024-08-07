import {getDataList} from '@/api/common'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export const useGetTeams = () =>
  useQuery({
    queryKey: QUERY_KEYS.TEAM_LIST,
    queryFn: async () => getDataList('team-list'),
    select: (response) =>
      response.Data
        ? response.Data.map((value) => ({
            label: value.name,
            value: value.id,
          }))
        : [],
  })
