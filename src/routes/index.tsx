import { createFileRoute } from '@tanstack/react-router'
import HomeView from '#/views/home/HomeView'

export const Route = createFileRoute('/')({ component: HomeView })
