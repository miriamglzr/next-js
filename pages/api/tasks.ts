// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Task } from '../../context/Tasks'

declare global {
var items: Task[]
}

globalThis.items = [{id: 1, name: 'Do homework' }]
// do a function to add into the array

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>, item?: Task
) {
    if (req.method === 'POST' && item) {
          // Process a POST request
        globalThis.items.push(item)
        res.status(201).json(items)
    }  else {
  res.status(200).json(items)}
}