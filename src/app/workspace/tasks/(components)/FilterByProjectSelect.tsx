import {DataSelect} from '@/components/select'

export default function FilterByProjectSelect() {
  return (
    <DataSelect
      placeholder="Filter by project"
      label="Projects"
      options={[
        {label: 'API Ring', value: 'API Ring'},
        {label: 'SSBP', value: 'SSBP'},
        {label: 'Digital Onbo', value: 'Digital Onbo'},
        {label: 'CMS / TMS', value: 'CMS / TMS'},
        {label: 'Documentation', value: 'Documentation'},
        {label: 'BA', value: 'BA'},
        {label: 'QMS', value: 'QMS'},
        {label: 'CDMS', value: 'CDMS'},
        {label: 'SmartPay', value: 'SmartPay'},
        {label: 'H2H', value: 'H2H'},
        {label: 'SMS', value: 'SMS'},
        {label: 'DocumentAI', value: 'DocumentAI'},
        {label: 'KBZPay', value: 'KBZPay'},
        {label: 'Inbound Remittance', value: 'Inbound Remittance'},
        {label: 'N / A', value: 'N / A'},
        {label: 'Credit - Card', value: 'Credit - Card'},
        {label: 'MiniApp', value: 'MiniApp'},
        {label: 'PayAdvance', value: 'PayAdvance'},
        {label: 'Supply Chain', value: 'Supply Chain'},
        {label: 'ADBankAdmin', value: 'ADBankAdmin'},
      ]}
      className="w-[150px]"
    />
  )
}
