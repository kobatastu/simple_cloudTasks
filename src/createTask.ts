import { CloudTasksClient } from '@google-cloud/tasks'

export const createHttpTaskWithToken = async (
  project: string,
  queue: string,
  location: string,
  url: string,
  data: {
    text: string,
    birthday: string
  },
) => {
  const client = new CloudTasksClient()
  const parent = client.queuePath( project, location, queue );
  const task = {
    httpRequest: {
      httpMethod: 'POST' as const,
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      body: Buffer.from(JSON.stringify(data)),
    }
  }
  return client.createTask({ parent, task })
}
