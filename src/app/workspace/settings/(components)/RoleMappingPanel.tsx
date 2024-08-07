import {Card, CardContent} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import RoleMappingList from './RoleMappingList'
import {IconUser} from '@tabler/icons-react'

export default function RoleMappingPanel() {
  return (
    <Card className="my-2 py-3">
      <CardContent>
        <div className="p-0 md:p-3 py-3 flex justify-between items-center">
          <h3 className="text-blue-800 text-[14px] flex items-center">
            <IconUser width={24} height={24} />
            Role Map Setting
          </h3>
        </div>
        <Separator />

        <RoleMappingList />
      </CardContent>
    </Card>
  )
}
