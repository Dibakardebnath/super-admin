#!/usr/bin/env bun

// Load environment variables from root directory
import { config } from 'dotenv'
config({ path: '../../.env' })

// Manually set DATABASE_URL to ensure it's correct
process.env.DATABASE_URL = 'postgresql://postgres:yupcha@10.0.0.50:5433/yupcha-hr-server'

// Run the actual application
await import('./src/index.ts')