import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';export const metadata:Metadata={title:'Kairo Nocturne — Dark techno. Berlin.',description:'Le son. Le mouvement. Un seul geste.'};export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
