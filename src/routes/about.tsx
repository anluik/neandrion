import { createFileRoute } from '@tanstack/react-router'
import AboutView from '#/views/about/AboutView'

export const Route = createFileRoute('/about')({ component: AboutView })
