'use client'
import {queryClient} from '@/libs'
import {QueryClientProvider as Provider} from '@tanstack/react-query'
import {PropsWithChildren} from 'react'

export function QueryClientProvider({children}: PropsWithChildren) {
  return <Provider client={queryClient}>{children}</Provider>
}
