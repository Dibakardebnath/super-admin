#!/usr/bin/env bun

// Load environment variables from root directory
import { config } from 'dotenv'
config({ path: '../../.env' })

// Run the actual application
await import('./src/index.ts')