// Request and response interfaces
export interface ApiRequest {
  messages: Array<{
    role: string;
    content: string;
    tool_calls: string;
  }>;
  model: string;
  // other fields...
}

export interface ApiResponse {
  id: number;
  object: string;
  created: number;
  // other fields...
  choices: {
    finish_reason: string;
    index: number;
    logprobs: string;
    Messages: Array<{
      role: string;
      content: string;
      tool_calls: string;
    }>;
  };
  // other fields...
}
