import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider, queryOptions } from '@tanstack/react-query'
import UserProvider from './globalvaribles/context/userProvider.tsx'
const queyclient=  new QueryClient();
createRoot(document.getElementById('root')!).render(
 
 <QueryClientProvider client={queyclient}>
    <UserProvider>
    <App />

    </UserProvider>

 </QueryClientProvider>

)
