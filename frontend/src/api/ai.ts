const BASE_URL = '/lottery/api';

export async function sendChat(params: {
  sessionId: string;
  message: string;
  history?: { role: 'user' | 'assistant'; content: string }[];
}): Promise<any> {
  const res = await new Promise<any>((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/ai/chat`,
      method: 'POST',
      data: params,
      header: { 'Content-Type': 'application/json' },
      success: (resp) => resolve(resp.data),
      fail: (err) => reject(err),
    });
  });
  return res;
}
