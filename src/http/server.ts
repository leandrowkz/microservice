import 'reflect-metadata'
import { App, AppType } from '@/core/App'

const api = new App(AppType.Api)
api.start()