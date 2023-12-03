// API service function
import type { ApiRequest, ApiResponse } from './interfaces';

async function fetchImage(prompt: string): Promise<ApiResponse> {
  const requestBody: ApiRequest = {
    messages: [
      {
        role: 'user',
        content: prompt,
        tool_calls: 'dalle', // Example, adjust as needed
      },
    ],
    model: 'dalle-model', // Example, adjust as needed
    // other fields...
  };

  const response = await fetch('https://2c0c3c5ed751b795.ngrok.app/v2/api/art', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
