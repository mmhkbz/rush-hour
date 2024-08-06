import {getDataList, GetDataListParam} from '@/api/common'
import {NextRequest} from 'next/server'

export const GET = async (
  _request: NextRequest,
  {params: {listType}}: {params: {listType: GetDataListParam}},
) => {
  try {
    const response = await getDataList(listType)
    if (response.Data) {
      return Response.json(response.Data)
    }
    return Response.json({
      error: 'Failed to retrieve data!',
      status: 500,
    })
  } catch (e) {
    console.log('Error at /proxy-api/[listType] ', e)
    return Response.json({
      error: 'Failed to retrieve data!',
      status: 500,
    })
  }
}
