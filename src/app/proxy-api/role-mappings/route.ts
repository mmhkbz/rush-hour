import {getRoleList} from '@/api/role'

export const GET = async () => {
  try {
    const response = await getRoleList()
    if (response.Data) {
      return Response.json(response.Data)
    }
    return Response.json({
      error: 'Failed to retrieve data!',
      status: 500,
    })
  } catch (e) {
    console.log('Error at /proxy-api/role-mappings ', e)
    return Response.json({
      error: 'Failed to retrieve data!',
      status: 500,
    })
  }
}
