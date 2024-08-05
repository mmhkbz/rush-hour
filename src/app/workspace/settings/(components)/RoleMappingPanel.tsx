import {Button} from '@/components/ui/button'
import {Card, CardContent} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import {IconCirclePlus, IconUser} from '@tabler/icons-react'
import RoleMappingList from './RoleMappingList'

export default function RoleMappingPanel() {
  return (
    <Card className="my-2 py-3">
      <CardContent>
        <div className="p-0 md:p-3 py-3 flex justify-between items-center">
          <h3 className="text-blue-800 text-[14px] flex items-center">
            <IconUser width={24} height={24} />
            Role Map Setting
          </h3>
          <Button className="bg-blue-800 flex items-center gap-2">
            <IconCirclePlus width={16} height={16} />
            Mapping
          </Button>
        </div>
        <Separator />

        <RoleMappingList />
      </CardContent>
    </Card>
  )
}
