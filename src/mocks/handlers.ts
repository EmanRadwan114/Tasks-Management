import { http, HttpResponse } from 'msw'

export const handlers = [
  // Intercept the "GET /user" requests...
  http.get('/api/user', () => {
    // ...and respond with a "200 OK" response,
    // together with a JSON response body.
    return HttpResponse.json({
      id: 'c7b4431b-4b7d-4a19-bf7d-699e11ef4463',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]
