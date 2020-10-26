import { ReactNode } from 'react'

interface WithChildren {
    children?: ReactNode
}

interface WithAnyProps {
    [propName: string]: any
}
