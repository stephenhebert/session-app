import { getUser } from '~/data/repositories/users'

export default eventHandler(async (event) => {
  const { auth } = event.context

  const clerkId = auth.userId

  if (!clerkId) {
    setResponseStatus(event, 403)
    return ''
  }

  const user = await getUser({
      clerkId
  })

  return user 
})