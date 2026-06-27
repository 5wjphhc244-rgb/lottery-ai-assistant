import type { ChatRequest, ChatResponse } from '../types';

const DISCLAIMER = '以上数据为历史开奖记录，仅供娱乐参考，不构成任何投注建议。彩票开奖号码为随机产生，历史数据不代表未来趋势。请理性购彩，量力而行。';

class AiService {
  /**
   * Process a chat request (non-streaming)
   */
  async processChat(request: ChatRequest): Promise<ChatResponse> {
    const reply = `您好！收到您的问题：「${request.message}」。我是彩票AI助手，目前处于演示模式。如需完整AI分析功能，请配置AI服务API密钥。`;

    return {
      sessionId: request.sessionId,
      reply,
      type: 'text',
      disclaimer: DISCLAIMER,
    };
  }

  /**
   * Process a chat request with streaming (SSE)
   */
  async processChatStream(
    request: ChatRequest,
    onChunk: (chunk: string) => void,
    onDone: (disclaimer: string) => void
  ): Promise<void> {
    const reply = `您好！收到您的问题：「${request.message}」。我是彩票AI助手，目前处于演示模式。如需完整AI分析功能，请配置AI服务API密钥。`;

    // Simulate streaming
    for (let i = 0; i < reply.length; i += 5) {
      const chunk = reply.slice(i, i + 5);
      onChunk(chunk);
    }

    onDone(DISCLAIMER);
  }
}

export const aiService = new AiService();
