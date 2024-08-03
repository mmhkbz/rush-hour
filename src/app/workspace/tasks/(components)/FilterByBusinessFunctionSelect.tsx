import {DataSelect} from '@/components/select'

export default function FilterByBusinessFunctionSelect() {
  return (
    <DataSelect
      options={[
        {
          label: 'F01-HUMAN RESOURCE FUNCTION',
          value: 'F01-HUMAN RESOURCE FUNCTION',
        },
        {
          label: 'F03-SHARED SERVICE FUNCTION',
          value: 'F03-SHARED SERVICE FUNCTION',
        },
        {
          label: 'F04-LEGAL AND COMPLIANCE FUNCTION',
          value: 'F04-LEGAL AND COMPLIANCE FUNCTION',
        },
        {
          label: 'F05-INTERNAL AUDIT FUNCTION',
          value: 'F05-INTERNAL AUDIT FUNCTION',
        },
        {label: 'F06-TECHNOLOGY FUNCTION', value: 'F06-TECHNOLOGY FUNCTION'},
        {label: 'F07-MARKETING FUNCTION', value: 'F07-MARKETING FUNCTION'},
        {
          label: 'F08-CORPORATE AFFAIR FUNCTION',
          value: 'F08-CORPORATE AFFAIR FUNCTION',
        },
        {label: 'F09-FINANCE FUNCTION', value: 'F09-FINANCE FUNCTION'},
        {
          label: 'F10-RISK MANAGEMENT FUNCTION',
          value: 'F10-RISK MANAGEMENT FUNCTION',
        },
        {label: 'F11-CREDIT FUNCTION', value: 'F11-CREDIT FUNCTION'},
        {label: 'F12-CEO OFFICE', value: 'F12-CEO OFFICE'},
        {label: 'F13-CHAIRMAN OFFICE', value: 'F13-CHAIRMAN OFFICE'},
        {label: 'F14-Sale Function', value: 'F14-Sale Function'},
        {label: 'F15-OPERATION FUNCTION', value: 'F15-OPERATION FUNCTION'},
        {
          label: 'F16-DIGITAL PROFESSIONAL SERVICES',
          value: 'F16-DIGITAL PROFESSIONAL SERVICES',
        },
        {
          label: 'F17-ANALYTICS CENTRE OF EXCELLENCE FUNCTION',
          value: 'F17-ANALYTICS CENTRE OF EXCELLENCE FUNCTION',
        },
        {label: 'F18-KBZPay PMO FUNCTION', value: 'F18-KBZPay PMO FUNCTION'},
        {
          label: 'F19-PUBLIC POLICY AND GOVERNMENT AFFAIRS',
          value: 'F19-PUBLIC POLICY AND GOVERNMENT AFFAIRS',
        },
        {
          label: 'F20-KBZPay CENTER OPERATION FUNCTION',
          value: 'F20-KBZPay CENTER OPERATION FUNCTION',
        },
        {
          label: 'F21-SOFTWARE AND DATA ANALYTICS FUNCTION',
          value: 'F21-SOFTWARE AND DATA ANALYTICS FUNCTION',
        },
        {
          label: 'F22-MARKETING COMMUNICATIONS FUNCTION',
          value: 'F22-MARKETING COMMUNICATIONS FUNCTION',
        },
        {label: 'F23-MD OFFICE 1', value: 'F23-MD OFFICE 1'},
        {label: 'F24-MD OFFICE 2', value: 'F24-MD OFFICE 2'},
        {
          label: 'F25-KBZPAY OPERATIONS FUNCTION',
          value: 'F25-KBZPAY OPERATIONS FUNCTION',
        },
        {
          label: 'F26-VIRTUAL BRANCH FUNCTION',
          value: 'F26-VIRTUAL BRANCH FUNCTION',
        },
        {
          label: 'F27-CASH MANAGEMENT FUNCTION',
          value: 'F27-CASH MANAGEMENT FUNCTION',
        },
        {
          label: 'F28-CAR (ALL COLLECTIONS AND RECOVERY) FUNCTION',
          value: 'F28-CAR (ALL COLLECTIONS AND RECOVERY) FUNCTION',
        },
        {
          label: 'F29-BRANCH OPERATIONS, YGN AND LOWER MYANMAR',
          value: 'F29-BRANCH OPERATIONS, YGN AND LOWER MYANMAR',
        },
        {
          label: 'F30-BRANCH OPERATIONS, MDY AND UPPER MYANMAR',
          value: 'F30-BRANCH OPERATIONS, MDY AND UPPER MYANMAR',
        },
        {
          label: 'F31-BRANCH OPERATIONS, SHAN AND KAYAH',
          value: 'F31-BRANCH OPERATIONS, SHAN AND KAYAH',
        },
        {
          label: 'F32-BRANCH OPERATIONS, NAY PYI TAW',
          value: 'F32-BRANCH OPERATIONS, NAY PYI TAW',
        },
        {label: 'F33-CREDIT FUNCTION', value: 'F33-CREDIT FUNCTION'},
        {
          label: 'F34-ADMINISTRATION AND DIGITAL PROFESSIONAL SERVICES',
          value: 'F34-ADMINISTRATION AND DIGITAL PROFESSIONAL SERVICES',
        },
        {label: 'F35-GOVERNMENT AFFAIRS', value: 'F35-GOVERNMENT AFFAIRS'},
        {
          label: 'F36-KBZPAY BUSINESS INSIGHTS/ DATA',
          value: 'F36-KBZPAY BUSINESS INSIGHTS/ DATA',
        },
        {
          label: 'F37-KBZPAY TREASURY AND PERFORMANCE MANAGEMENT',
          value: 'F37-KBZPAY TREASURY AND PERFORMANCE MANAGEMENT',
        },
        {
          label: 'V01-SMART CORPORATE / FI VC',
          value: 'V01-SMART CORPORATE / FI VC',
        },
        {
          label: 'V02-SMART DEPOSIT / WEALTH VC',
          value: 'V02-SMART DEPOSIT / WEALTH VC',
        },
        {label: 'V03-SMART SME VC', value: 'V03-SMART SME VC'},
        {label: 'V04-UNSECURED CONSUMER', value: 'V04-UNSECURED CONSUMER'},
        {
          label: 'V05-SMART TERRITORIES - KAMARYUT VC',
          value: 'V05-SMART TERRITORIES - KAMARYUT VC',
        },
        {
          label: 'V06-SMART COMMERCIAL REAL ESTATE VC',
          value: 'V06-SMART COMMERCIAL REAL ESTATE VC',
        },
        {
          label: 'V07-SMART VIRTUAL BRANCH VC',
          value: 'V07-SMART VIRTUAL BRANCH VC',
        },
        {label: 'V08-TRADE FINANCE', value: 'V08-TRADE FINANCE'},
        {label: 'V09-PAYROLL', value: 'V09-PAYROLL'},
        {
          label: 'V10-SMART TRANSACTION BANKING VC',
          value: 'V10-SMART TRANSACTION BANKING VC',
        },
        {
          label: 'V11-SMART TERRITORIES - BIG 28 VC',
          value: 'V11-SMART TERRITORIES - BIG 28 VC',
        },
        {
          label: 'V12-SMART SECURED CONSUMER VC',
          value: 'V12-SMART SECURED CONSUMER VC',
        },
        {label: 'V13-TREASURY', value: 'V13-TREASURY'},
        {
          label: 'V14-SMART CASH AND NETWORK LOGISTICS VC',
          value: 'V14-SMART CASH AND NETWORK LOGISTICS VC',
        },
        {
          label: 'V15-CAR (ALL COLLECTIONS AND RECOVERY) VC',
          value: 'V15-CAR (ALL COLLECTIONS AND RECOVERY) VC',
        },
        {
          label: 'V16-SMART TERRITORIES - EMERGING 600 VC',
          value: 'V16-SMART TERRITORIES - EMERGING 600 VC',
        },
        {
          label: 'V17-SMART DOMESTIC REMITTANCE VC',
          value: 'V17-SMART DOMESTIC REMITTANCE VC',
        },
        {label: 'V19-AGENT BANKING', value: 'V19-AGENT BANKING'},
        {
          label: 'V20-SMART TERRITORIES (BLUE) VC',
          value: 'V20-SMART TERRITORIES (BLUE) VC',
        },
        {
          label: 'V21-SMART TERRITORIES (RED) VC',
          value: 'V21-SMART TERRITORIES (RED) VC',
        },
        {
          label: 'V22-SMART TERRITORIES (GREEN) VC',
          value: 'V22-SMART TERRITORIES (GREEN) VC',
        },
        {
          label: 'V23-SMART INTERNATIONAL CORPORATE/ FI VC',
          value: 'V23-SMART INTERNATIONAL CORPORATE/ FI VC',
        },
        {label: 'V24-LOCAL CORPORATE', value: 'V24-LOCAL CORPORATE'},
        {label: 'V25-WHOLESALE BANKING', value: 'V25-WHOLESALE BANKING'},
        {label: 'V26-STRUCTURED FINANCE', value: 'V26-STRUCTURED FINANCE'},
        {label: 'V27-PROPERTY VC', value: 'V27-PROPERTY VC'},
        {label: 'V28-BANCASSURANCE VC', value: 'V28-BANCASSURANCE VC'},
        {
          label: 'V29-SMART TERRITORIES 1 VC',
          value: 'V29-SMART TERRITORIES 1 VC',
        },
        {
          label: 'V30-SMART TERRITORIES 2 VC',
          value: 'V30-SMART TERRITORIES 2 VC',
        },
        {
          label: 'V31-SMART TERRITORIES 3 VC',
          value: 'V31-SMART TERRITORIES 3 VC',
        },
        {
          label: 'V32-SMART TERRITORIES 4 VC',
          value: 'V32-SMART TERRITORIES 4 VC',
        },
        {
          label: 'V33-SMART TERRITORIES 5 VC',
          value: 'V33-SMART TERRITORIES 5 VC',
        },
        {label: 'V34-DIGITAL HEALTH', value: 'V34-DIGITAL HEALTH'},
        {label: 'V35-KBZPAY MARKET', value: 'V35-KBZPAY MARKET'},
        {
          label: 'V36-KBZPAY OFFICIAL ACCOUNTS AND CHAT',
          value: 'V36-KBZPAY OFFICIAL ACCOUNTS AND CHAT',
        },
        {label: 'V37-KBZPay Center', value: 'V37-KBZPay Center'},
        {
          label: 'V38-SMART CORPORATE TRANSACTION BANKING VC',
          value: 'V38-SMART CORPORATE TRANSACTION BANKING VC',
        },
        {
          label: 'V39-Smart Retail Transaction Banking VC',
          value: 'V39-Smart Retail Transaction Banking VC',
        },
        {
          label: 'V40-OREO (OTHER REAL ESTATE OWNED)',
          value: 'V40-OREO (OTHER REAL ESTATE OWNED)',
        },
        {
          label: 'V41-SMART BUSINESS BANKING VC',
          value: 'V41-SMART BUSINESS BANKING VC',
        },
        {
          label: 'V42-SME AND BUSINESS BANKING',
          value: 'V42-SME AND BUSINESS BANKING',
        },
        {
          label: 'V43-DEPOSIT/ WEALTH AND BANCASSURANCE VC',
          value: 'V43-DEPOSIT/ WEALTH AND BANCASSURANCE VC',
        },
        {label: 'V44-TRANSACTION BANKING', value: 'V44-TRANSACTION BANKING'},
        {label: 'V45-KBZPAY MINI APPS', value: 'V45-KBZPAY MINI APPS'},
        {
          label: 'V46-DIGITAL PROFESSIONAL SERVICES',
          value: 'V46-DIGITAL PROFESSIONAL SERVICES',
        },
        {label: 'V47-COMMERCIAL BANKING', value: 'V47-COMMERCIAL BANKING'},
        {
          label: 'V48-INTERNATIONAL CORPORATE',
          value: 'V48-INTERNATIONAL CORPORATE',
        },
        {
          label: 'V49-INSTITUTIONAL BANKING',
          value: 'V49-INSTITUTIONAL BANKING',
        },
        {
          label: 'V50-KBZPAY, DIGITAL BANKING AND CARD BUSINESS',
          value: 'V50-KBZPAY, DIGITAL BANKING AND CARD BUSINESS',
        },
        {label: 'V51-MD OFFICE 3', value: 'V51-MD OFFICE 3'},
        {label: 'V52-MD OFFICE 4', value: 'V52-MD OFFICE 4'},
        {label: 'V53-MD OFFICE 5', value: 'V53-MD OFFICE 5'},
        {label: 'V54-CARD BUSINESS', value: 'V54-CARD BUSINESS'},
        {
          label: 'V55-MANAGED SERVICE BUSINESS',
          value: 'V55-MANAGED SERVICE BUSINESS',
        },
        {
          label: 'V56-WEALTH AND BANCASSURANCE',
          value: 'V56-WEALTH AND BANCASSURANCE',
        },
        {label: 'V57-CUSTOMER SERVICE', value: 'V57-CUSTOMER SERVICE'},
        {label: 'V58-RETAIL BANKING', value: 'V58-RETAIL BANKING'},
        {label: 'V59-FINTECH', value: 'V59-FINTECH'},
        {label: 'V60-DEPOSIT', value: 'V60-DEPOSIT'},
        {label: 'V61-MORTGAGE', value: 'V61-MORTGAGE'},
        {label: 'V62-KBZPAY LENDING', value: 'V62-KBZPAY LENDING'},
        {label: 'V63-SALES AND ENGAGEMENT', value: 'V63-SALES AND ENGAGEMENT'},
        {label: 'V64-KBZPAY', value: 'V64-KBZPAY'},
        {
          label: 'V65-KBZPAY EMERGING 6 MILLIONS',
          value: 'V65-KBZPAY EMERGING 6 MILLIONS',
        },
        {label: 'V66-BANCASSURANCE', value: 'V66-BANCASSURANCE'},
        {label: 'V67-WEALTH', value: 'V67-WEALTH'},
        {label: 'N/A', value: 'N/A'},
      ]}
      placeholder="Filter by business function"
      label="Business Functions"
      className="w-[250px] max-w-[250px]"
    />
  )
}
