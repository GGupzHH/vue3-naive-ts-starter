// mock/index.ts
import userMocks from './api/user'
import sysMocks from './api/sys'

export default [
  ...userMocks,
  ...sysMocks
]
